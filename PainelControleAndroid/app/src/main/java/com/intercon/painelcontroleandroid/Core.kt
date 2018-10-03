package com.intercon.painelcontroleandroid

import android.app.Application
import android.content.Context
import android.content.pm.PackageManager
import android.provider.Settings
import android.support.v4.app.ActivityCompat
import android.telephony.TelephonyManager

import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.storage.FirebaseStorage
import com.google.firebase.storage.StorageReference

/**
 * Created by ricardoogliari on 9/30/18.
 */

class Core : Application() {

    override fun onCreate() {
        super.onCreate()

        deviceId = Settings.Secure.getString(contentResolver,
                Settings.Secure.ANDROID_ID)

        val database = FirebaseDatabase.getInstance()
        ref = database.reference

        mStorageRef = FirebaseStorage.getInstance().reference

    }

    companion object {

        lateinit var ref: DatabaseReference
        lateinit var deviceId: String
        lateinit var mStorageRef: StorageReference
    }
}
