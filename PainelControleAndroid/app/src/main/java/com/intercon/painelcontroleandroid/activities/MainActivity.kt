package com.intercon.painelcontroleandroid.activities

import android.graphics.drawable.Drawable
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.annotation.DrawableRes
import android.view.View
import com.google.firebase.iid.FirebaseInstanceId
import com.intercon.painelcontroleandroid.Core
import com.intercon.painelcontroleandroid.R
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var refreshedToken : String ? = FirebaseInstanceId.getInstance().token
        refreshedToken?.let {
            Core.ref.child("smartphones/" + Core.deviceId).setValue(refreshedToken)
        }

        txtShowLights.setOnClickListener {
            if (linearLight.visibility == View.GONE) {
                linearLight.visibility = View.VISIBLE
                txtShowLights.setCompoundDrawablesRelativeWithIntrinsicBounds(
                        null,
                        null,
                        resources.getDrawable(R.drawable.ic_minus_circle_outline),
                        null )
            } else {
                linearLight.visibility = View.GONE
                txtShowLights.setCompoundDrawablesRelativeWithIntrinsicBounds(
                        null,
                        null,
                        resources.getDrawable(R.drawable.ic_plus_circle_outline),
                        null )
            }
        }

        txtShowTempLights.setOnClickListener {
            if (linearTempLight.visibility == View.GONE) {
                linearTempLight.visibility = View.VISIBLE
                txtShowTempLights.setCompoundDrawablesRelativeWithIntrinsicBounds(
                        null,
                        null,
                        resources.getDrawable(R.drawable.ic_minus_circle_outline),
                        null )
            } else {
                linearTempLight.visibility = View.GONE
                txtShowTempLights.setCompoundDrawablesRelativeWithIntrinsicBounds(
                        null,
                        null,
                        resources.getDrawable(R.drawable.ic_plus_circle_outline),
                        null )
            }
        }

    }
}
