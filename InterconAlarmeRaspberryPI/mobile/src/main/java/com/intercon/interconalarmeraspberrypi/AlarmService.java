package com.intercon.interconalarmeraspberrypi;

import retrofit2.Call;
import retrofit2.http.GET;

/**
 * Created by ricardoogliari on 7/26/18.
 */

public interface AlarmService {

    @GET("stopAlarm")
    Call<ReturnParser> stopAlarm();

}
