package com.intercon.painelcontroleandroid.model

/**
 * Created by ricardoogliari on 10/3/18.
 */
class RackServidor (var status: StatusRack?){

    constructor() : this(null){}

}

class StatusRack (var status: Int = 0) {}