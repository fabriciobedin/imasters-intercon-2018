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

                it.lampadas?.let {
                    if (it.lamp1?.controle == 0) {
                        txtLightDo.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_outline),
                                null,
                                null,
                                null )
                    } else if (it.lamp1?.controle == 1) {
                        txtLightDo.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_on_outline),
                                null,
                                null,
                                null )
                    }

                    if (it.lamp2?.controle == 0) {
                        txtLightRe.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_outline),
                                null,
                                null,
                                null )
                    } else if (it.lamp2?.controle == 1) {
                        txtLightRe.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_on_outline),
                                null,
                                null,
                                null )
                    }

                    if (it.lamp3?.controle == 0) {
                        txtLightMi.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_outline),
                                null,
                                null,
                                null )
                    } else if (it.lamp3?.controle == 1) {
                        txtLightMi.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_on_outline),
                                null,
                                null,
                                null )
                    }

                    if (it.lamp4?.controle == 0) {
                        txtLightFa.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_outline),
                                null,
                                null,
                                null )
                    } else if (it.lamp4?.controle == 1) {
                        txtLightFa.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_on_outline),
                                null,
                                null,
                                null )
                    }

                    if (it.lamp5?.controle == 0) {
                        txtLightSol.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_outline),
                                null,
                                null,
                                null )
                    } else if (it.lamp5?.controle == 1) {
                        txtLightSol.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_on_outline),
                                null,
                                null,
                                null )
                    }

                    if (it.lamp6?.controle == 0) {
                        txtLightLa.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_outline),
                                null,
                                null,
                                null )
                    } else if (it.lamp6?.controle == 1) {
                        txtLightLa.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_on_outline),
                                null,
                                null,
                                null )
                    }

                    if (it.lamp7?.controle == 0) {
                        txtLightSi.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_outline),
                                null,
                                null,
                                null )
                    } else if (it.lamp7?.controle == 1) {
                        txtLightSi.setCompoundDrawablesRelativeWithIntrinsicBounds(
                                resources.getDrawable(R.drawable.ic_lightbulb_on_outline),
                                null,
                                null,
                                null )
                    }
                }

                it.bancoCoolers?.let {
                    if (it.controle?.controle == 0){
                        txtCooler.text = "Desligado"
                        txtCooler.setCompoundDrawablesRelativeWithIntrinsicBounds(resources.getDrawable(R.drawable.ic_fan_off),null,null,null )
                    } else if (it.controle?.controle == 1){
                        txtCooler.text = "Ligado"
                        txtCooler.setCompoundDrawablesRelativeWithIntrinsicBounds(resources.getDrawable(R.drawable.ic_fan),null,null,null )
                    }
                }

                it.servidor?.let {
                    if (it.status?.status == 0){
                        txtServer.text = "Desligado"
                        txtServer.setCompoundDrawablesRelativeWithIntrinsicBounds(resources.getDrawable(R.drawable.ic_power_off),null,null,null )
                    } else if (it.status?.status == 1){
                        txtServer.text = "Ligado"
                        txtServer.setCompoundDrawablesRelativeWithIntrinsicBounds(resources.getDrawable(R.drawable.ic_power_on),null,null,null )
                    }
                }

                it.rackServidor?.let {
                    if (it.status?.status == 0){
                        txtRack.text = "Fechado"
                        txtRack.setCompoundDrawablesRelativeWithIntrinsicBounds(resources.getDrawable(R.drawable.ic_lock_outline),null,null,null )
                    } else if (it.status?.status == 1){
                        txtRack.text = "Aberto"
                        txtRack.setCompoundDrawablesRelativeWithIntrinsicBounds(resources.getDrawable(R.drawable.ic_lock_open_outline),null,null,null )
                    }
                }

                it.sensorEnergia?.let {
                    if (it.status?.status == 0){
                        txtEnergy.text = "Sem luz"
                        txtEnergy.setCompoundDrawablesRelativeWithIntrinsicBounds(resources.getDrawable(R.drawable.ic_power_plug_off),null,null,null )
                    } else if (it.status?.status == 1){
                        txtEnergy.text = "Com luz"
                        txtEnergy.setCompoundDrawablesRelativeWithIntrinsicBounds(resources.getDrawable(R.drawable.ic_power_plug),null,null,null )
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

        txtShowStatus.setOnClickListener {
            if (linearStatus.visibility == View.GONE) {
                linearStatus.visibility = View.VISIBLE
                txtShowStatus.setCompoundDrawablesRelativeWithIntrinsicBounds(
                        null,
                        null,
                        resources.getDrawable(R.drawable.ic_minus_circle_outline),
                        null )
            } else {
                linearStatus.visibility = View.GONE
                txtShowStatus.setCompoundDrawablesRelativeWithIntrinsicBounds(
                        null,
                        null,
                        resources.getDrawable(R.drawable.ic_plus_circle_outline),
                        null )
            }
        }

        Core.ref.addValueEventListener(this)
    }
}
