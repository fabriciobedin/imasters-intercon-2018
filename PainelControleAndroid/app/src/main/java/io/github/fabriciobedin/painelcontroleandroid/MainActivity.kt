package io.github.fabriciobedin.painelcontroleandroid

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import android.widget.ToggleButton

class MainActivity : AppCompatActivity() {

//    internal var txtSensorLuz1: TextView = findViewById(R.id.ctrl_txt_L2_C1)
//    internal var txtSensorLuz2: TextView = findViewById(R.id.ctrl_txt_L2_C2)
//    internal var txtSensorLuz3: TextView = findViewById(R.id.ctrl_txt_L2_C3)
//    internal var btSensor1Luz1: ToggleButton = findViewById(R.id.ctrl_bt_L3_C1)
//    internal var btSensor1Luz2: ToggleButton = findViewById(R.id.ctrl_bt_L3_C2)
//    internal var btSensor1Luz3: ToggleButton = findViewById(R.id.ctrl_bt_L3_C3)
//
//    internal var txtSensorChuva: TextView = findViewById(R.id.ctrl_txt_L5_C1)
//    internal var txtSensorAlarme: TextView = findViewById(R.id.ctrl_txt_L5_C3)
//    internal var txtSensorTemperatura: TextView = findViewById(R.id.ctrl_txt_L5_C2)
//
//    internal var txtSensorJanela: TextView = findViewById(R.id.ctrl_txt_L8_C1)
//    internal var txtHorarioJanelaAbriu: TextView = findViewById(R.id.ctrl_txt_L8_C2)
//    internal var txtHorarioJanelaFechou: TextView = findViewById(R.id.ctrl_txt_L8_C3)
//
//    internal var txtSensorPorta1: TextView = findViewById(R.id.ctrl_txt_L11_C1)
//    internal var txtHorarioPorta1Abriu: TextView = findViewById(R.id.ctrl_txt_L11_C2)
//    internal var txtHorarioPorta1Fechou: TextView = findViewById(R.id.ctrl_txt_L11_C3)
//
//    internal var txtSensorPorta2: TextView = findViewById(R.id.ctrl_txt_L14_C1)
//    internal var txtHorarioPorta2Abriu: TextView = findViewById(R.id.ctrl_txt_L14_C2)
//    internal var txtHorarioPorta2Fechou: TextView = findViewById(R.id.ctrl_txt_L14_C3)
//
//    internal var btAlarme: ToggleButton = findViewById(R.id.ctrl_bt_L6_C3)
//    internal var statusLampadaLDR1: Int? = 0
//    internal var statusLampadaLDR2: Int? = 0
//    internal var statusLampadaAPP1: Int? = 0
//    internal var statusLampadaAPP2: Int? = 0
//    internal var seguro: Boolean? = true
//    internal var inicializaAlarme: Boolean? = true

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        var txtSensorLuz1: TextView = findViewById(R.id.ctrl_txt_L2_C1)
        var txtSensorLuz2: TextView = findViewById(R.id.ctrl_txt_L2_C2)
        var txtSensorLuz3: TextView = findViewById(R.id.ctrl_txt_L2_C3)
        var btSensor1Luz1: ToggleButton = findViewById(R.id.ctrl_bt_L3_C1)
        var btSensor1Luz2: ToggleButton = findViewById(R.id.ctrl_bt_L3_C2)
        var btSensor1Luz3: ToggleButton = findViewById(R.id.ctrl_bt_L3_C3)

        var txtSensorChuva: TextView = findViewById(R.id.ctrl_txt_L5_C1)
        var txtSensorAlarme: TextView = findViewById(R.id.ctrl_txt_L5_C3)
        var txtSensorTemperatura: TextView = findViewById(R.id.ctrl_txt_L5_C2)

        var txtSensorJanela: TextView = findViewById(R.id.ctrl_txt_L8_C1)
        var txtHorarioJanelaAbriu: TextView = findViewById(R.id.ctrl_txt_L8_C2)
        var txtHorarioJanelaFechou: TextView = findViewById(R.id.ctrl_txt_L8_C3)

        var txtSensorPorta1: TextView = findViewById(R.id.ctrl_txt_L11_C1)
        var txtHorarioPorta1Abriu: TextView = findViewById(R.id.ctrl_txt_L11_C2)
        var txtHorarioPorta1Fechou: TextView = findViewById(R.id.ctrl_txt_L11_C3)

        var txtSensorPorta2: TextView = findViewById(R.id.ctrl_txt_L14_C1)
        var txtHorarioPorta2Abriu: TextView = findViewById(R.id.ctrl_txt_L14_C2)
        var txtHorarioPorta2Fechou: TextView = findViewById(R.id.ctrl_txt_L14_C3)

        var btAlarme: ToggleButton = findViewById(R.id.ctrl_bt_L6_C3)
        var statusLampadaLDR1: Int? = 0
        var statusLampadaLDR2: Int? = 0
        var statusLampadaAPP1: Int? = 0
        var statusLampadaAPP2: Int? = 0
        var seguro: Boolean? = true
        var inicializaAlarme: Boolean? = true


        btSensor1Luz1.textOn = "Ligada"
        btSensor1Luz1.textOff = "Desligada"
        btSensor1Luz2.textOn = "Ligada"
        btSensor1Luz2.textOff = "Desligada"
        btSensor1Luz3.textOn = "Ligada"
        btSensor1Luz3.textOff = "Desligada"
        btAlarme.textOn = "Ligado"
        btAlarme.textOff = "Desligado"


    }
}
