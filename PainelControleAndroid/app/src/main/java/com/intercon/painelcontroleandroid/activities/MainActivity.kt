package com.intercon.painelcontroleandroid.activities

import android.graphics.drawable.Drawable
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.annotation.DrawableRes
import android.util.Log
import android.view.View
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.ValueEventListener
import com.google.firebase.iid.FirebaseInstanceId
import com.google.gson.Gson
import com.intercon.painelcontroleandroid.Core
import com.intercon.painelcontroleandroid.R
import com.intercon.painelcontroleandroid.model.Result
import kotlinx.android.synthetic.main.activity_main.*
import org.json.JSONObject

class MainActivity : AppCompatActivity(), ValueEventListener {

    override fun onCancelled(p0: DatabaseError?) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.

    }

    override fun onDataChange(snapshot: DataSnapshot?) {
        snapshot?.let {
            val jsonObject = it.getValue(Result::class.java)
            jsonObject?.let {
                it.temperatura?.let {
                    it.temperatura?.let {
                        txtTemperature.text = it.celsius.toString()
                    }
                }
            }

        }



    }

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

        Core.ref.addValueEventListener(this)
    }
}
