package com.intercon.painelcontroleandroid.model

/**
 * Created by ricardoogliari on 10/3/18.
 */
class Servidor (var status: Status?){

    constructor() : this(null){}

}

class Status (var status: Int = 0) {}