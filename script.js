// =========================
// PANTALLA DE INICIO
// =========================

const startButton =
document.getElementById("startButton");

const welcomeScreen =
document.getElementById("welcomeScreen");

const mainContent =
document.getElementById("mainContent");

if(mainContent){

mainContent.style.display="none";

}

if(startButton){

startButton.addEventListener("click",()=>{

welcomeScreen.style.opacity="0";

setTimeout(()=>{

welcomeScreen.style.display="none";

mainContent.style.display="block";

},800);

});

}

// =========================
// MENSAJES
// =========================

const messages=[

"✨ Hay lugares que se visitan y otros que se descubren.",

"🌷 Las pequeñas cosas suelen ser las más bonitas.",

"⭐ Una estrella no compite con las demás, simplemente brilla.",

"🌙 Algunas noches guardan secretos especiales.",

"💜 Nunca subestimes el valor de una sonrisa.",

"🦋 Hay días simples que terminan siendo inolvidables."

];

function newMessage(){

let r=Math.floor(Math.random()*messages.length);

document.getElementById("message").innerHTML=
messages[r];

}

// =========================
// PREGUNTAS
// =========================

const questions=[

"¿Cuál es tu recuerdo favorito?",

"¿Qué lugar del mundo te gustaría conocer?",

"¿Qué canción representa tu semana?",

"¿Qué te hace sentir en paz?",

"¿Qué habilidad te gustaría aprender?",

"¿Qué superpoder elegirías?",

"¿Qué te hace feliz?"

];

function newQuestion(){

let r=Math.floor(Math.random()*questions.length);

document.getElementById("question").innerHTML=
questions[r];

}

// =========================
// ORACULO
// =========================

const oracleMessages=[

"🌠 Algo bueno podría sorprenderte pronto.",

"✨ Mantén la curiosidad encendida.",

"🌙 El universo recomienda descansar un poco.",

"⭐ Confía más en ti.",

"🌷 Hoy es un buen día para sonreír."

];

function oracle(){

let r=Math.floor(Math.random()*oracleMessages.length);

document.getElementById("oracle").innerHTML=
oracleMessages[r];

}

// =========================
// JARDIN
// =========================

let flowers=
Number(localStorage.getItem("flowers"))||0;

function updateGarden(){

const garden=
document.getElementById("garden");

if(garden){

garden.innerHTML="🌷".repeat(flowers);

}

document.getElementById("flowerCount").innerHTML=
flowers;

}

function plantFlower(){

flowers++;

localStorage.setItem(
"flowers",
flowers
);

updateGarden();

checkAchievements();

}

// =========================
// ESTRELLAS
// =========================

let stars=
Number(localStorage.getItem("stars"))||0;

function updateStars(){

const counter=
document.getElementById("starCount");

if(counter){

counter.innerHTML=stars;

}

}

function collectStar(){

stars++;

localStorage.setItem(
"stars",
stars
);

updateStars();

checkAchievements();

}

// =========================
// MASCOTA
// =========================

const petMessages=[

"😺 La mascota está feliz.",

"🐱 Miau.",

"😸 Parece que quiere jugar.",

"🐾 Has ganado puntos de ternura.",

"😺 La mascota aprueba tu visita."

];

function petAction(){

let r=Math.floor(
Math.random()*petMessages.length
);

document.getElementById("petText")
.innerHTML=
petMessages[r];

}

// =========================
// COFRES
// =========================

const chestRewards=[

"⭐ Estrella dorada",

"🌷 Flor brillante",

"💜 Buena suerte",

"🦋 Mariposa cósmica",

"✨ Polvo estelar"

];

function openChest(){

let r=Math.floor(
Math.random()*chestRewards.length
);

document.getElementById("chestText")
.innerHTML=
chestRewards[r];

}

// =========================
// RULETA
// =========================

const roulette=[

"🌙 Mirar el cielo",

"🌷 Escuchar música",

"⭐ Aprender algo nuevo",

"☕ Tomar algo rico",

"✨ Hacer algo creativo",

"🦋 Dar un paseo"

];

function spinRoulette(){

let r=Math.floor(
Math.random()*roulette.length
);

document.getElementById("rouletteResult")
.innerHTML=
roulette[r];

}

// =========================
// DIARIO
// =========================

const diary=
document.getElementById("diary");

if(diary){

diary.value=
localStorage.getItem("diary")||"";

}

function saveDiary(){

if(diary){

localStorage.setItem(
"diary",
diary.value
);

alert("📖 Guardado");

}

}

// =========================
// LOGROS
// =========================

function checkAchievements(){

let total=0;

let html="";

if(stars>=10){

html+="<p>🏆 Explorador</p>";

total++;

}else{

html+="<p>🔒 Explorador</p>";

}

if(flowers>=10){

html+="<p>🏆 Jardinero</p>";

total++;

}else{

html+="<p>🔒 Jardinero</p>";

}

if(stars>=25){

html+="<p>🏆 Navegante Estelar</p>";

total++;

}else{

html+="<p>🔒 Navegante Estelar</p>";

}

const achievementBox=
document.getElementById("achievements");

if(achievementBox){

achievementBox.innerHTML=html;

}

const achievementCount=
document.getElementById("achievementCount");

if(achievementCount){

achievementCount.innerHTML=total;

}

if(total>=3){

const room=
document.getElementById("secretRoom");

if(room){

room.style.display="block";

}

}

}

// =========================
// ESTRELLAS DE FONDO
// =========================

const starsContainer=
document.getElementById("stars");

if(starsContainer){

for(let i=0;i<300;i++){

let star=
document.createElement("div");

star.innerHTML="✦";

star.style.position="absolute";

star.style.left=
Math.random()*100+"%";

star.style.top=
Math.random()*100+"%";

star.style.color="white";

star.style.opacity=
Math.random();

star.style.fontSize=
(5+Math.random()*15)+"px";

star.style.cursor="pointer";

star.addEventListener("click",()=>{

collectStar();

star.remove();

});

starsContainer.appendChild(star);

}

}

// =========================
// ESTRELLAS FUGACES
// =========================

function shootingStar(){

let s=
document.createElement("div");

s.style.position="fixed";

s.style.width="3px";

s.style.height="120px";

s.style.background=
"linear-gradient(white,transparent)";

s.style.transform=
"rotate(45deg)";

s.style.left=
Math.random()*window.innerWidth+"px";

s.style.top=
Math.random()*300+"px";

s.style.pointerEvents="none";

document.body.appendChild(s);

let x=parseInt(s.style.left);
let y=parseInt(s.style.top);

let move=setInterval(()=>{

x+=20;
y+=20;

s.style.left=x+"px";
s.style.top=y+"px";

},20);

setTimeout(()=>{

clearInterval(move);

s.remove();

},1000);

}

setInterval(

shootingStar,

3000

);

// =========================
// CURSOR MAGICO
// =========================

document.addEventListener(
"mousemove",
e=>{

let sparkle=
document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=
e.clientX+"px";

sparkle.style.top=
e.clientY+"px";

sparkle.style.pointerEvents="none";

sparkle.style.fontSize="12px";

document.body.appendChild(
sparkle
);

setTimeout(()=>{

sparkle.remove();

},500);

}
);

// =========================
// INICIO
// =========================

updateGarden();

updateStars();

checkAchievements();
