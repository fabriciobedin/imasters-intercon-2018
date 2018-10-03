package com.intercon.painelcontroleandroid.model

import com.google.gson.annotations.SerializedName

/**
 * Created by ricardoogliari on 10/3/18.
 */
class Result(
@SerializedName("temperatura")
var temperatura: TemperatureCtn?){

    constructor() : this(null){
    }
}