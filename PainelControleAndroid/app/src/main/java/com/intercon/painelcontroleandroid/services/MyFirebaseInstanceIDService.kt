package com.intercon.painelcontroleandroid.services

import com.google.firebase.iid.FirebaseInstanceId
import com.google.firebase.iid.FirebaseInstanceIdService
import com.intercon.painelcontroleandroid.Core

import java.util.ResourceBundle

/**
 * Created by ricardoogliari on 9/30/18.
 */

class MyFirebaseInstanceIDService : FirebaseInstanceIdService() {

    override fun onTokenRefresh() {
        // Get updated InstanceID token.
        val refreshedToken = FirebaseInstanceId.getInstance().token
        Core.ref.child("smartphones/" + Core.deviceId).setValue(refreshedToken)
    }

}
