package com.intercon.interconalarmeraspberrypi;

import android.app.Application;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by ricardoogliari on 7/22/18.
 */

public class LifeCycle extends Application {

    public static AlarmService service;

    @Override
    public void onCreate() {
        super.onCreate();

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("https://us-central1-alarme-83731.cloudfunctions.net/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        service = retrofit.create(AlarmService.class);
    }
}
