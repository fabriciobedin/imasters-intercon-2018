
#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <Ticker.h>
#include "DHT.h"

// Set these to run example.
#define FIREBASE_HOST "intercon-cc310.firebaseio.com"
#define FIREBASE_AUTH "qR25ovbE67twvaeQQQQWUpOKHJsg3tPp58VsqQZE"
#define WIFI_SSID "Fabricio"
#define WIFI_PASSWORD "@fabricio"

#define LAMP_PIN D3
#define LDR A0
#define PRESENCE_PIN D4
#define DHT_PIN D5
#define DHTTYPE DHT11
// Publique a cada 5 min
#define DHT_INTERVAL 1000*60*5
#define LDR_INTERVAL 1000*2
#define LAMP_INTERVAL 100

DHT dht(DHT_PIN, DHTTYPE);
Ticker tickerDht;
Ticker tickerLdr;
Ticker tickerLamp;
bool testeDht = true;
bool testeLdr = true;
bool testeLamp = true;

void publishDht(){
  testeDht = true;
}

void publishLdr(){
  testeLdr = true;
}

void publishLamp(){
  testeLamp = true;
}

void setupPins(){

  pinMode(LAMP_PIN, OUTPUT);
  digitalWrite(LAMP_PIN, LOW);
  
  pinMode(PRESENCE_PIN, INPUT);
  pinMode(LDR, INPUT);

  dht.begin();  
}

void setupWifi(){
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Conectando");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.println("-------------------------------------------------");
  Serial.print("Conectado na rede: ");
  Serial.println(WiFi.SSID());
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
  Serial.print("Subnet Mask: ");
  Serial.println(WiFi.subnetMask());
  Serial.print("MAC Address: ");
  Serial.println(WiFi.macAddress());
  Serial.print("RSSI: ");
  Serial.println(WiFi.RSSI());
  Serial.println("-------------------------------------------------");
}

void setupFirebase(){
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.setBool("lamp", false);
  Firebase.setBool("presence", false);
}

void setup() {
  Serial.begin(9600);

  setupPins();
  setupWifi();    

  setupFirebase();

  // Registra o ticker para publicar de tempos em tempos
  tickerDht.attach_ms(DHT_INTERVAL, publishDht);

  tickerLdr.attach_ms(LDR_INTERVAL, publishLdr);
  
  tickerLamp.attach_ms(LAMP_INTERVAL, publishLamp);
}

void loop() {

  // Apenas publique quando passar o tempo determinado
  if(!testeDht){
    Serial.println("Recebendo dados do DHT...");
    // Obtem os dados do sensor DHT 
    float humidity = dht.readHumidity();
    float temperature = dht.readTemperature();
    if(!isnan(humidity) && !isnan(temperature)){
      // Manda para o firebase
      Firebase.pushFloat("temperature", temperature);
      Firebase.pushFloat("humidity", humidity);    
      testeDht = false;
    }else{
      Serial.println("Erro ao receber dados do DHT");
    }
  }

   if(testeLdr){
    Serial.println("Recebendo dados do LDR...");
    // Obtem os dados do sensor DHT 
    float ldr = analogRead(LDR);
    if(!isnan(ldr)){
      // Manda para o firebase
      Firebase.pushFloat("ldr", ldr);  
      testeLdr = false;
    }else{
      Serial.println("Erro ao receber dados do LDR");
    }
  }

  if(testeLamp){
    bool lampValue = Firebase.getBool("lamp");
    if(!isnan(lampValue)){
      digitalWrite(LAMP_PIN, lampValue ? HIGH : LOW);
      testeLamp = false;
    }else{
      Serial.println("Erro ao receber dados da lamp");
    }
    
    
  }

  // Verifica o valor do sensor de presença
  // LOW sem movimento
  // HIGH com movimento
  int presence = digitalRead(PRESENCE_PIN);  
  Firebase.setBool("presence", presence == HIGH);
  delay(500);
}
