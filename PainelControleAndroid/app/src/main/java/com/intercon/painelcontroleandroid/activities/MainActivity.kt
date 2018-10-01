package com.intercon.painelcontroleandroid.activities

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import com.google.firebase.iid.FirebaseInstanceId
import com.intercon.painelcontroleandroid.Core
import com.intercon.painelcontroleandroid.R

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var refreshedToken : String ? = FirebaseInstanceId.getInstance().token
        refreshedToken?.let {
            Core.ref.child("smartphones/" + Core.deviceId).setValue(refreshedToken)
        }

    }
}
