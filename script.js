// ======================
// MENSAJES
// ======================

const mensajes = [

"🌷 Algunos días parecen normales hasta que se convierten en recuerdos bonitos.",

"✨ Hay personas que mejoran los lugares simplemente estando allí.",

"🦋 A veces las mejores cosas llegan sin avisar.",

"🌙 Incluso una pequeña luz destaca en la oscuridad.",

"💜 Nunca subestimes el valor de una sonrisa sincera.",

"🌸 Hay momentos simples que terminan siendo los más especiales."

];

function mensajeAleatorio(){

let r = Math.floor(Math.random()*mensajes.length);

document.getElementById("mensaje").innerHTML = mensajes[r];

}

// ======================
// PREGUNTAS
// ======================

const preguntas = [

"¿Qué lugar te gustaría visitar algún día?",

"¿Qué canción representa tu semana?",

"¿Qué te hace sentir en paz?",

"¿Qué recuerdo te hace sonreír?",

"¿Qué habilidad te gustaría aprender?",

"¿Qué harías si pudieras viajar en el tiempo?",

"¿Cuál es tu comida favorita para un día feliz?"

];

function preguntaAleatoria(){

let r = Math.floor(Math.random()*preguntas.length);

document.getElementById("pregunta").innerHTML = preguntas[r];

}

// ======================
// ORACULO
// ======================

const oraculos = [

"⭐ Algo interesante podría sorprenderte pronto.",

"🌙 El universo recomienda descansar un poco más.",

"🌷 Hoy es buen día para darte un gusto.",

"✨ Mantén la curiosidad encendida.",

"🦋 Confía más en tu intuición.",

"💜 Algo bonito puede aparecer donde menos lo esperas."

];

function consultarOraculo(){

let r = Math.floor(Math.random()*oraculos.length);

document.getElementById("oraculo").innerHTML = oraculos[r];

}

// ======================
// GATO
// ======================

const gatos = [

"🐱 Miau.",

"🐱 El gato aprueba tu energía de hoy.",

"🐱 El gato cree que deberías sonreír.",

"🐱 +10 puntos de ternura.",

"🐱 El gato está orgulloso de ti.",

"🐱 Has recibido un maullido legendario."

];

function acariciarGato(){

let r = Math.floor(Math.random()*gatos.length);

document.getElementById("gato").innerHTML = gatos[r];

}

// ======================
// JARDIN
// ======================

let flores = Number(localStorage.getItem("flores")) || 0;

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

document.getElementById("contador").innerHTML =
estrellas;

verificarLogros();

}

// ======================
// CARTAS
// ======================

let cartasAbiertas =
Number(localStorage.getItem("cartas")) || 0;

const cartas = [

"💌 A veces los pequeños detalles son los que más se recuerdan.",

"💌 Algunas personas dejan huellas bonitas sin darse cuenta.",

"💌 Gracias por dedicar unos minutos a explorar este rincón.",

"💌 Hay días que merecen guardarse para siempre.",

"💌 Nunca está de más recordar que las cosas simples también tienen magia."

];

function abrirCarta(){

let r = Math.floor(Math.random()*cartas.length);

document.getElementById("carta").innerHTML =
cartas[r];

cartasAbiertas++;

localStorage.setItem("cartas",cartasAbiertas);

verificarLogros();

}

// ======================
// LOGROS
// ======================

function verificarLogros(){

let html="";

if(estrellas >= 10){

html += "<p>🏆 Explorador del universo</p>";

}else{

html += "<p>🔒 Explorador del universo</p>";

}

if(flores >= 15){

html += "<p>🏆 Jardinero estelar</p>";

}else{

html += "<p>🔒 Jardinero estelar</p>";

}

if(cartasAbiertas >= 5){

html += "<p>🏆 Maestro de las cartas</p>";

}else{

html += "<p>🔒 Maestro de las cartas</p>";

}

document.getElementById("logros").innerHTML =
html;

if(
estrellas >= 10 &&
flores >= 15 &&
cartasAbiertas >= 5
){

document.getElementById("salaSecreta").style.display =
"block";

}

}

// ======================
// ESTRELLAS DE FONDO
// ======================

for(let i=0;i<120;i++){

let star = document.createElement("div");

star.className="star";

star.innerHTML="⭐";

star.style.left =
Math.random()*100 + "%";

star.style.top =
Math.random()*100 + "%";

star.style.fontSize =
(10 + Math.random()*20) + "px";

star.style.opacity =
Math.random();

document.getElementById("stars")
.appendChild(star);

}

// ======================
// INICIO
// ======================

actualizarJardin();

document.getElementById("contador").innerHTML =
estrellas;

verificarLogros();
