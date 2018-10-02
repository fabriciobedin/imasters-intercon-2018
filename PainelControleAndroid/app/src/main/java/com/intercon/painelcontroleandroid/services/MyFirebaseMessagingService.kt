package com.intercon.painelcontroleandroid.services

import android.content.Intent
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import com.intercon.painelcontroleandroid.activities.ThiefActivity

/**
 * Created by ricardoogliari on 9/30/18.
 */

class MyFirebaseMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage?) {
        // ...
        var intent = Intent(this, ThiefActivity::class.java);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        startActivity(intent)
    }

}
