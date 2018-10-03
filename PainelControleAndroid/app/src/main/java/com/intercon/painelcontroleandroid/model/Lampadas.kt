package com.intercon.painelcontroleandroid.model

/**
 * Created by ricardoogliari on 10/3/18.
 */
class Lampadas (
        var lamp1: Lamp1?,
        var lamp2: Lamp2?,
        var lamp3: Lamp3?,
        var lamp4: Lamp4?,
        var lamp5: Lamp5?,
        var lamp6: Lamp6?,
        var lamp7: Lamp7?) {

    constructor() : this(null, null, null, null, null, null, null){
    }
}

class Lamp1 (var controle: Int){
    constructor() : this(0){}
}
class Lamp2 (var controle: Int){
    constructor() : this(0){}
}
class Lamp3 (var controle: Int){
    constructor() : this(0){}
}
class Lamp4 (var controle: Int){
    constructor() : this(0){}
}
class Lamp5 (var controle: Int){
    constructor() : this(0){}
}
class Lamp6 (var controle: Int){
    constructor() : this(0){}
}
class Lamp7 (var controle: Int){
    constructor() : this(0){}
}