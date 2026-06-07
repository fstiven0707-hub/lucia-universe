// ======================
// MENSAJES
// ======================

const mensajes = [

"🌷 Algunos días parecen normales hasta que se convierten en recuerdos bonitos.",

"✨ Hay personas que dejan una huella especial sin darse cuenta.",

"🦋 A veces la magia está en los detalles.",

"🌙 Incluso las noches más oscuras tienen estrellas.",

"💜 Nunca subestimes el valor de una sonrisa.",

"🌸 Hoy puede ser un día especial."

];

function mensajeAleatorio(){

let r=Math.floor(Math.random()*mensajes.length);

document.getElementById("mensaje").innerHTML=
mensajes[r];

}

// ======================
// PREGUNTAS
// ======================

const preguntas=[

"¿Qué lugar te gustaría conocer?",

"¿Cuál es tu recuerdo favorito?",

"¿Qué canción te representa hoy?",

"¿Qué te hace sentir en paz?",

"¿Qué sueño te gustaría cumplir?",

"¿Qué superpoder elegirías?",

"¿Qué te hace sonreír sin razón?"

];

function preguntaAleatoria(){

let r=Math.floor(Math.random()*preguntas.length);

document.getElementById("pregunta").innerHTML=
preguntas[r];

}

// ======================
// ORÁCULO
// ======================

const oraculos=[

"⭐ Algo bueno podría sorprenderte pronto.",

"🌷 Hoy es un buen día para darte un gusto.",

"🌙 Confía un poco más en ti.",

"✨ Mantén la curiosidad encendida.",

"🦋 Algo bonito viene en camino."

];

function consultarOraculo(){

let r=Math.floor(Math.random()*oraculos.length);

document.getElementById("oraculo").innerHTML=
oraculos[r];

}

// ======================
// MASCOTA
// ======================

const mascota=[

"🐱 Miau.",

"🐱 El gato cree que deberías sonreír.",

"🐱 Has recibido +10 puntos de ternura.",

"🐱 El gato aprueba tu energía.",

"🐱 El gato exige cariño."

];

function acariciarMascota(){

let r=Math.floor(Math.random()*mascota.length);

document.getElementById("petMessage").innerHTML=
mascota[r];

}

// ======================
// JARDÍN
// ======================

let flores =
Number(localStorage.getItem("flores")) || 0;

function actualizarJardin(){

document.getElementById("jardin").innerHTML =
"🌷".repeat(flores);

}

function plantarFlor(){

flores++;

localStorage.setItem("flores",flores);

actualizarJardin();

verificarLogros();

}

// ======================
// ESTRELLAS
// ======================

let estrellas =
Number(localStorage.getItem("estrellas")) || 0;

function buscarEstrella(){

estrellas++;

localStorage.setItem("estrellas",estrellas);

document.getElementById("contadorEstrellas").innerHTML=
estrellas;

verificarLogros();

}

// ======================
// CARTAS
// ======================

let cartasAbiertas =
Number(localStorage.getItem("cartas")) || 0;

const cartas=[

"💌 Algunas personas hacen este mundo un poco más bonito.",

"💌 Los pequeños detalles suelen ser los más memorables.",

"💌 Nunca subestimes el valor de una conversación agradable.",

"💌 Gracias por explorar este rincón del universo.",

"💌 Hay momentos simples que merecen quedarse para siempre."

];

function abrirCarta(){

let r=Math.floor(Math.random()*cartas.length);

document.getElementById("carta").innerHTML=
cartas[r];

cartasAbiertas++;

localStorage.setItem("cartas",cartasAbiertas);

verificarLogros();

}

// ======================
// DIARIO
// ======================

const diario =
document.getElementById("diario");

if(diario){

diario.value =
localStorage.getItem("recuerdo") || "";

}

function guardarRecuerdo(){

localStorage.setItem(
"recuerdo",
diario.value
);

alert("📖 Recuerdo guardado");

}

// ======================
// RULETA
// ======================

const premios=[

"🌷 Escuchar una canción nueva",

"☕ Tomar algo rico",

"🌙 Mirar las estrellas",

"📚 Aprender algo curioso",

"🦋 Dar un paseo",

"✨ Sonreír más"

];

function girarRuleta(){

let r=Math.floor(
Math.random()*premios.length
);

document.getElementById("ruletaResultado")
.innerHTML=premios[r];

}

// ======================
// COFRE
// ======================

const tesoros=[

"⭐ Encontraste polvo estelar",

"🌷 Encontraste una flor mágica",

"💜 Encontraste buena suerte",

"🦋 Encontraste una mariposa cósmica",

"✨ Encontraste una estrella brillante"

];

function abrirCofre(){

let r=Math.floor(
Math.random()*tesoros.length
);

document.getElementById("cofre")
.innerHTML=tesoros[r];

}

// ======================
// OBSERVATORIO
// ======================

const hora=new Date().getHours();

let mensajeHora="";

if(hora<12){

mensajeHora=
"☀️ El cielo está iluminado por la mañana.";

}
else if(hora<18){

mensajeHora=
"🌤️ La tarde se ve tranquila.";

}
else{

mensajeHora=
"🌙 Las estrellas dominan el cielo.";

}

document.getElementById("observatorio")
.innerHTML=mensajeHora;

// ======================
// LOGROS
// ======================

function verificarLogros(){

let html="";

if(estrellas>=10){

html+="<p>🏆 Explorador Cósmico</p>";

}else{

html+="<p>🔒 Explorador Cósmico</p>";

}

if(flores>=15){

html+="<p>🏆 Jardinero Estelar</p>";

}else{

html+="<p>🔒 Jardinero Estelar</p>";

}

if(cartasAbiertas>=5){

html+="<p>🏆 Maestro de las Cartas</p>";

}else{

html+="<p>🔒 Maestro de las Cartas</p>";

}

if(estrellas>=10 &&
flores>=15 &&
cartasAbiertas>=5){

html+="<p>🏆 Guardián del Universo</p>";

document.getElementById("salaSecreta")
.style.display="block";

}

document.getElementById("logros")
.innerHTML=html;

}

// ======================
// ESTRELLAS DE FONDO
// ======================

for(let i=0;i<250;i++){

let star=document.createElement("div");

star.className="star";

star.innerHTML="✦";

star.style.left=
Math.random()*100+"%";

star.style.top=
Math.random()*100+"%";

star.style.fontSize=
(6+Math.random()*18)+"px";

star.style.opacity=
Math.random();

document.getElementById("stars")
.appendChild(star);

}

// ======================
// ESTRELLAS FUGACES
// ======================

function crearEstrellaFugaz(){

let estrella=
document.createElement("div");

estrella.style.position="fixed";

estrella.style.width="3px";

estrella.style.height="120px";

estrella.style.background=
"linear-gradient(white,transparent)";

estrella.style.top=
Math.random()*300+"px";

estrella.style.left=
Math.random()*window.innerWidth+"px";

estrella.style.transform=
"rotate(45deg)";

estrella.style.zIndex="-1";

estrella.style.pointerEvents="none";

document.body.appendChild(estrella);

let x=parseInt(estrella.style.left);

let y=parseInt(estrella.style.top);

let mover=setInterval(()=>{

x+=25;

y+=25;

estrella.style.left=x+"px";

estrella.style.top=y+"px";

},20);

setTimeout(()=>{

clearInterval(mover);

estrella.remove();

},1200);

}

setInterval(

crearEstrellaFugaz,

4000

);

// ======================
// CURSOR CON BRILLOS
// ======================

document.addEventListener(
"mousemove",
e=>{

const brillo=
document.createElement("div");

brillo.innerHTML="✨";

brillo.style.position="fixed";

brillo.style.left=e.clientX+"px";

brillo.style.top=e.clientY+"px";

brillo.style.pointerEvents="none";

brillo.style.fontSize="12px";

document.body.appendChild(brillo);

setTimeout(()=>{

brillo.remove();

},700);

}
);

// ======================
// INICIO
// ======================

actualizarJardin();

document.getElementById(
"contadorEstrellas"
).innerHTML=estrellas;

verificarLogros();
