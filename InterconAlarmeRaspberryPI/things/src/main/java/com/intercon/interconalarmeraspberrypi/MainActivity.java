package com.intercon.interconalarmeraspberrypi;

import android.app.Activity;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;

import com.google.android.things.pio.Gpio;
import com.google.android.things.pio.GpioCallback;
import com.google.android.things.pio.PeripheralManager;
import com.google.firebase.iid.FirebaseInstanceId;
import com.intercon.interconalarmeraspberrypi.core.LifeCycle;
import com.intercon.interconalarmeraspberrypi.util.Constants;
import com.intercon.interconalarmeraspberrypi.util.MessageEvent;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.io.IOException;

/**
 * Skeleton of an Android Things activity.
 * <p>
 * Android Things peripheral APIs are accessible through the class
 * PeripheralManagerService. For example, the snippet below will open a GPIO pin and
 * set it to HIGH:
 * <p>
 * <pre>{@code
 * PeripheralManagerService service = new PeripheralManagerService();
 * mLedGpio = service.openGpio("BCM6");
 * mLedGpio.setDirection(Gpio.DIRECTION_OUT_INITIALLY_LOW);
 * mLedGpio.setValue(true);
 * }</pre>
 * <p>
 * For more complex peripherals, look for an existing user-space driver, or implement one if none
 * is available.
 *
 * @see <a href="https://github.com/androidthings/contrib-drivers#readme">https://github.com/androidthings/contrib-drivers#readme</a>
 */

public class MainActivity extends Activity implements GpioCallback {
    private static final String TAG = MainActivity.class.getSimpleName();

    private static final String ECHO_PIN_NAME = "BCM20";
    private static final String TRIGGER_PIN_NAME = "BCM21";

    private Gpio mEcho;
    private Gpio mTrigger;

    private long time1, time2;

    private Handler ultrasonicTriggerHandler;
    private MediaPlayer mediaPlayer;

    private Runnable triggerRunnable = new Runnable() {
        @Override
        public void run() {
            try {
                readDistanceAsnyc();
                ultrasonicTriggerHandler.postDelayed(triggerRunnable, 1000);
            } catch (IOException e) {
                e.printStackTrace();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        PeripheralManager service = PeripheralManager.getInstance();

        String refreshedToken = FirebaseInstanceId.getInstance().getToken();
        Log.d(Constants.TAG, "Refreshed token: " + refreshedToken);
        LifeCycle.ref.child("token").setValue(refreshedToken);

        try {
            mEcho = service.openGpio(ECHO_PIN_NAME);
            // Configure as an input.
            mEcho.setDirection(Gpio.DIRECTION_IN);
            // Enable edge trigger events.
            mEcho.setEdgeTriggerType(Gpio.EDGE_BOTH);
            // Set Active type to HIGH, then the HIGH events will be considered as TRUE
            mEcho.setActiveType(Gpio.ACTIVE_HIGH);

        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            mTrigger = service.openGpio(TRIGGER_PIN_NAME);

            mTrigger.setDirection(Gpio.DIRECTION_OUT_INITIALLY_LOW);

        } catch (IOException e) {
            e.printStackTrace();
        }

        ultrasonicTriggerHandler = new Handler();
        ultrasonicTriggerHandler.post(triggerRunnable);

        try {
            mEcho.registerGpioCallback(null, this);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        EventBus.getDefault().unregister(this);
        // Step 7. Close the resource
        if (mEcho != null) {
            // unregister from the callback
            mEcho.unregisterGpioCallback(this);
            try {
                mEcho.close();
            } catch (IOException e) {
                Log.e(Constants.TAG, "Error on PeripheralIO API", e);
            }
        }

// Step 7. Close the resource
        if (mTrigger != null) {
            try {
                mTrigger.close();
            } catch (IOException e) {
                Log.e(Constants.TAG, "Error on PeripheralIO API", e);
            }
        }
    }

    @Override
    public boolean onGpioEdge(Gpio gpio) {
        try {

            if (gpio.getValue() == false){
                time2 = System.nanoTime();

                long pulseWidth = time2 - time1;

                double distance = (pulseWidth / 1000000000.0) * 340.0 / 2.0 * 100.0;

                Log.i(Constants.TAG, "distance: " + distance + " cm");
                if (distance < 50){
                    controlSound(true);
                }
            } else {
                time1 = System.nanoTime();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return true;
    }

    public void controlSound(boolean play){
        if (play){

            if (mediaPlayer != null && mediaPlayer.isPlaying()) {
                return;
            }
            Log.e(Constants.TAG, "play alarm sound");
            mediaPlayer = MediaPlayer.create(MainActivity.this, R.raw.alarme);
            mediaPlayer.setLooping(true);
            mediaPlayer.start();
        } else {
            if (mediaPlayer != null) {
                Log.e(Constants.TAG, "stop alarm sound");
                mediaPlayer.stop();
                mediaPlayer.reset();
                mediaPlayer.release();
                mediaPlayer = null;
            }
        }
    }

    @Override
    public void onGpioError(Gpio gpio, int error) {

    }

    protected void readDistanceAsnyc() throws IOException, InterruptedException {
        mTrigger.setValue(false);
        Thread.sleep(0,2000);

        mTrigger.setValue(true);
        Thread.sleep(0,10000); //10 microsec

        mTrigger.setValue(false);
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onMessageEvent(MessageEvent event) {
        controlSound(false);
    };

    @Override
    public void onStart() {
        super.onStart();
        EventBus.getDefault().register(this);
    }

}

