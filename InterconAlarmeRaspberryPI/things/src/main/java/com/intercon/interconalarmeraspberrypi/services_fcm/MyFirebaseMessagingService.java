package com.intercon.interconalarmeraspberrypi.services_fcm;

import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.intercon.interconalarmeraspberrypi.util.Constants;
import com.intercon.interconalarmeraspberrypi.util.MessageEvent;

import org.greenrobot.eventbus.EventBus;

/**
 * Created by ricardoogliari on 9/23/18.
 */

public class MyFirebaseMessagingService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        EventBus.getDefault().post(new MessageEvent());
        Log.d(Constants.TAG, "Message received and token: " + remoteMessage.getData());
        super.onMessageReceived(remoteMessage);
    }
}
