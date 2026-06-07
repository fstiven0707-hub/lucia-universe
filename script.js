/* =========================
   UNIVERSO INTERACTIVO
   NIVEL DIOS SCRIPT
========================= */

/* CANVAS SETUP */
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

/* CREAR PARTÍCULAS */
function initUniverse(){
particles = [];

for(let i=0;i<140;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5)*0.4,
dy:(Math.random()-0.5)*0.4
});
}
}

initUniverse();

/* ANIMACIÓN UNIVERSO */
function animate(){

ctx.fillStyle="rgba(5,8,20,0.35)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="rgba(255,255,255,0.8)";

particles.forEach(p=>{

p.x += p.dx;
p.y += p.dy;

/* rebote suave */
if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
if(p.y < 0 || p.y > canvas.height) p.dy *= -1;

/* dibujar */
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(animate);
}

animate();

/* =========================
   HISTORIA DINÁMICA
========================= */

let stage = 0;
let clicks = 0;

/* textos emocionales */
const story = [
"El universo detecta tu presencia 🌌",
"Las estrellas comienzan a reaccionar ✨",
"Algo invisible se está conectando...",
"El espacio te reconoce...",
"Última fase de sincronización..."
];

/* =========================
   INICIO EXPERIENCIA
========================= */

function start(){

document.getElementById("ui").innerHTML = `
<h1>🌙 Sincronizando universo...</h1>
<p>Espera un momento, todo está conectándose contigo</p>
<button onclick="next()">Continuar</button>
`;

}

/* =========================
   PROGRESIÓN
========================= */

function next(){

document.getElementById("ui").innerHTML = `
<h1>✨ ${story[stage] || "Conexión completa"}</h1>

<p>Interactúa con el universo tocando la pantalla</p>

<button onclick="interact()">🌌 Tocar universo</button>
<button onclick="secret()">🔮 Mensaje oculto</button>
`;

stage++;

}

/* =========================
   INTERACCIÓN PRINCIPAL
========================= */

function interact(){

clicks++;

const panel = document.getElementById("panel");
panel.style.display = "block";

if(clicks < 3){
panel.innerText = "🌌 El universo te observa en silencio...";
}

else if(clicks < 6){
panel.innerText = "✨ Algo está respondiendo a tu energía...";
}

else if(clicks < 10){
panel.innerText = "💫 El universo empieza a recordarte...";
}

else{
panel.innerText = "🌠 Conexión completa establecida";
unlockFinal();
}

}

/* =========================
   MENSAJE OCULTO
========================= */

function secret(){

document.getElementById("ui").innerHTML = `
<h1>🔮 Mensaje oculto</h1>

<p>
No todos los universos son visibles...<br><br>

Algunos solo existen cuando alguien especial los mira ✨
</p>

<button onclick="next()">Volver</button>
`;

}

/* =========================
   FINAL NIVEL DIOS
========================= */

function unlockFinal(){

document.getElementById("ui").innerHTML = `
<h1>🌌 Universo sincronizado</h1>

<p>
Has activado una conexión única.<br><br>

Este universo no es un programa...<br>
es una respuesta.
</p>

<button onclick="finalMessage()">💜 Ver mensaje final</button>
`;

}

/* =========================
   MENSAJE FINAL
========================= */

function finalMessage(){

document.getElementById("ui").innerHTML = `
<h1>💜 Mensaje final</h1>

<p>
Si estás leyendo esto,<br><br>

significa que alguien creó este universo pensando en ti.<br><br>

✨ Y eso ya lo cambia todo.
</p>

<h2>🌌 Fin de la experiencia</h2>

<button onclick="restart()">🔁 Reiniciar universo</button>
`;

}

/* =========================
   REINICIO
========================= */

function restart(){
location.reload();
}

/* =========================
   RESIZE RESPONSIVE
========================= */

window.addEventListener("resize",()=>{

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

initUniverse();

});

/* =========================
   CLICK GLOBAL (EXTRA MAGIC)
========================= */

document.addEventListener("click",(e)=>{

if(!document.getElementById("panel")) return;

const panel = document.getElementById("panel");

panel.style.opacity = "1";

setTimeout(()=>{
panel.style.opacity = "0.7";
},800);

});
