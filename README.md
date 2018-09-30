### Sistema que utiliza varios recursos importantes do Firebase
Segue abaixo um exemplo simples de como ligar apenas um sensor, nos próximos dias estarei completando esse tutorial e colocando aqui o passo a passo de como configurar o restante dos projetos desse repositório.

#### 1º - Ligar o sensor no arduino conforme imagem abaixo
<div class="img1" align="center">
  <img src="https://github.com/rwaldron/johnny-five/raw/master/docs/breadboard/photoresistor.png" width="450" height="450" al />
</div>

#### 2º - Abrir o Arduino, ir em File -> Example -> Firmata -> StandardFirmata
(caso você não tenha é só ir em arduino.cc, baixar e instalar)<br>
O Firmata faz a leitura do que estiver conectado ao arduino, sem precisar escrever 1 linha em C#.

#### 3º - Instalar o Node JS
Disponível em https://nodejs.org/

#### 4º - Abrir o terminal do Node e executar esse comando para instalar o plugin Johnny-five
npm install johnny-five
(jhonifive é uma api que você pode utilizar pra ligar varios sensores no arduino ou placa que estiver usando, ele tem um suporte bem amplo. Com ele, você não precisa se preocupar em escrever um código extenso pra fazer a leitura de um sensor, ele se comunica com o firmata que deixou rodando no arduino e faz tudo sozinho.) 

#### 5º - Entrar no site do Johnny-Five pra copiar o código do sensor que estiver usando
http://johnny-five.io/api/light/<br>
o código pra leitura desse sensor que estou usando é esse: <br>
<br>
<code>var five = require("johnny-five");</code><br>
<code>var board = new five.Board();</code><br>
<code>board.on("ready", function() {</code><br>
<code>     var light = new five.Light("A0");</code><br>
<code>     light.on("change", function() {</code><br>
<code>          console.log(this.level);</code><br>
<code>     });</code><br>
<code>});</code><br>

#### 6º - Criar um novo projeto no Firebase
https://console.firebase.google.com/

Após criado, vai em adicionar app e seleciona a opção WEB <br>
Vai abrir uma janela com um script, vai ser algo parecido com isso.. copie ele.<br>
<br>
<code>var config = {</code><br>
<code>    apiKey: "AIzaSyAFns36dXaJbFrRBYK_XsoU649M0loIPXo",</code><br>
<code>    authDomain: "cloudhomeautomation-cfde9.firebaseapp.com",</code><br>
<code>    databaseURL: "https://cloudhomeautomation-cfde9.firebaseio.com",</code><br>
<code>    storageBucket: "cloudhomeautomation-cfde9.appspot.com",</code><br>
<code>    messagingSenderId: "498048127162"</code><br>
<code>  };</code><br>
<code>firebase.initializeApp(config);</code><br>

#### 7º - Criar um novo arquivo script.js com algum editor (eu usei o Sublime Text)
• colar o código copiado no firebase pra esse arquivo<br>
• colar o código copiado do johnny-five no mesmo arquivo<br>
o script vai ficar parecido com o arquivo que está nesse projeto, dentro da pasta arduino, script.js<br>
https://github.com/fabriciobedin/ArduinoSensorWithFirebase/blob/master/arduino/script.js<br>
Eu apenas coloquei um "if" para apenas enviar os valores para o firebase quando forem alterados, ou seja, se não tiver variação de luz, ele mantém o mesmo valor e não fica enviando numeros iguais.

#### 8º - Abrir o terminal e acessar por ele o diretório onde o script.js foi salvo
exemplo: cd C:/Users/Fabricio/Desktop/Scripts<br>
Executar os seguintes comandos:<br>
• npm install -g firebase-tools<br>
(pra instalar o plugin do firebase)<br>
• firebase login<br>
(entre com os dados da sua conta google que você criou o projeto do firebase)<br>
(vai pedir pra confirmar umas coisas, pode ir colocando y e enter)<br>
• npm install firebase --save<br>
• firebase init<br>
• node script.js<br>
após executar isso, ele vai se conectar ao arduino e começar a passar os dados do sensor para o Firebase

#### 9º - Abrir o https://console.firebase.google.com/ e entrar no projeto criado
Clicar na guia Database (menu do lado esquerdo), e ver se apareceu uma chave com uma tag sensor com os dados dentro
Caso não tenha aparecido, as regras do Firebase devem estar bloqueando, vai na guia regras (na parte de cima, no lado de dados) e altere os valores conforme abaixo, isso vai fazer o Firebase liiberar qualquer comunicação, sem autenticação.

<code>{</code><br>
<code>  "rules": {</code><br>
<code>    ".read": true,</code><br>
<code>    ".write": true</code><br>
<code>  }</code><br>
<code>}</code><br>

#### 10º - Volte pro inicio do Firebase e selecione a opção Adicionar Projeto Android 
Tenha cuidado pra deixar o mesmo nome do pacote, no meu caso eu deixei esse:<br>
casca.upf.com.homeautomation

#### 11º - Após isso, você pode clonar esse projeto do github no seu Android Studio
E substituir o arquivo google-services.json que está na raiz do projeto pelo arquivo que o Firebase gerou.
(Porque se deixar o arquivo que está atualmente, ele vai tentar se comunicar com o meu projeto do Firebase e não com o seu).

#### 12º - Pronto, pode executar o aplicativo que conforme a leitura do sensor vai aparecer a lampada acesa ou apagada
Caso a imagem da lampada não mude, apenas olhe o valor que o sensor está informando e mude no "if" da classe MainActivity.
Porque conforme o sensor utilizado ele dá uma pequena variação nos valores, aí você olha no firebase qual o valor que ele fica quando apaga ou acende a luz e coloca nesse if.


