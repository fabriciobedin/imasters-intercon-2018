package com.intercon.painelcontroleandroid.model

/**
 * Created by ricardoogliari on 10/3/18.
 */
class SensorEnergia (var status: StatusEnergia?){

    constructor() : this(null){}

}

class StatusEnergia (var status: Int = 0) {}