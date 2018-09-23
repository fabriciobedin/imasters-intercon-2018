package com.intercon.interconalarmeraspberrypi.core;

import android.app.Application;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

/**
 * Created by ricardoogliari on 9/23/18.
 */

public class LifeCycle extends Application {

    public static DatabaseReference ref;

    @Override
    public void onCreate() {
        super.onCreate();
        FirebaseDatabase database = FirebaseDatabase.getInstance();
        ref = database.getReference();

    }
}

