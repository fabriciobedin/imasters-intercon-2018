package com.intercon.painelcontroleandroid;

import android.app.Application;
import android.content.Context;
import android.content.pm.PackageManager;
import android.provider.Settings;
import android.support.v4.app.ActivityCompat;
import android.telephony.TelephonyManager;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;

/**
 * Created by ricardoogliari on 9/30/18.
 */

public class Core extends Application {

    public static DatabaseReference ref;
    public static String deviceId;
    public static StorageReference mStorageRef;

    @Override
    public void onCreate() {
        super.onCreate();

        deviceId = Settings.Secure.getString(getContentResolver(),
                Settings.Secure.ANDROID_ID);

        FirebaseDatabase database = FirebaseDatabase.getInstance();
        ref = database.getReference();

        mStorageRef = FirebaseStorage.getInstance().getReference();

    }
}
