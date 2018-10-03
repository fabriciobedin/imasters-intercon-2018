package com.intercon.painelcontroleandroid.model

import com.google.gson.annotations.SerializedName

/**
 * Created by ricardoogliari on 10/3/18.
 */
class Result(
@SerializedName("temperatura")
var temperatura: TemperatureCtn?,
var lampadas: Lampadas?,
var bancoCoolers: BancoCoolers?,
var servidor: Servidor?,
var sensorEnergia: SensorEnergia?,
var rackServidor: RackServidor?){

    constructor() : this(null, null, null, null, null, null){
    }
}