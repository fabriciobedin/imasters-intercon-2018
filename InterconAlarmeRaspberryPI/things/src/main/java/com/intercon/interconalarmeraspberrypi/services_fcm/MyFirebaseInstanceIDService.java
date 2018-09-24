package com.intercon.interconalarmeraspberrypi.services_fcm;

import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.FirebaseInstanceIdService;
import com.intercon.interconalarmeraspberrypi.core.LifeCycle;
import com.intercon.interconalarmeraspberrypi.util.Constants;

/**
 * Created by ricardoogliari on 9/23/18.
 */

public class MyFirebaseInstanceIDService extends FirebaseInstanceIdService{

    @Override
    public void onTokenRefresh() {
        // Get updated InstanceID token.
        String refreshedToken = FirebaseInstanceId.getInstance().getToken();
        Log.d(Constants.TAG,
                "Refreshed token: " + refreshedToken);

        // If you want to send messages to this application instance or
        // manage this apps subscriptions on the server side, send the
        // Instance ID token to your app server.
        LifeCycle.ref.child("token").setValue(refreshedToken);
    }
}
