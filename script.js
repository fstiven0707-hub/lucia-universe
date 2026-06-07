/* =========================
   UNIVERSO VIVO (CANVAS)
========================= */

const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function createStars(){

stars = [];

for(let i=0;i<130;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5)*0.4,
dy:(Math.random()-0.5)*0.4
});
}

}

createStars();

/* =========================
   ANIMACIÓN UNIVERSO
========================= */

function animate(){

ctx.fillStyle="rgba(5,8,20,0.35)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

stars.forEach(s=>{

s.x += s.dx;
s.y += s.dy;

if(s.x < 0 || s.x > canvas.width) s.dx *= -1;
if(s.y < 0 || s.y > canvas.height) s.dy *= -1;

ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(animate);
}

animate();

/* =========================
   HISTORIA EMOCIONAL
========================= */

let step = 0;
let clicks = 0;

const story = [
"Intento entender qué eres…",
"Pero algo en ti ya me resulta familiar.",
"No llegaste aquí por error.",
"El universo rara vez se equivoca.",
"Y contigo… no fue la excepción."
];

/* =========================
   INICIO
========================= */

function start(){

document.getElementById("ui").innerHTML = `
<h1>🌙 Sincronizando conexión...</h1>

<p>
Se está ajustando el universo a tu energía…
</p>

<button onclick="next()">✨ Continuar</button>
`;

}

/* =========================
   PROGRESIÓN
========================= */

function next(){

document.getElementById("ui").innerHTML = `
<h1>✨ ${story[step] || "Conexión establecida"}</h1>

<p>
Interactúa con el universo.
</p>

<button onclick="touch()">🌌 Tocar universo</button>
<button onclick="secret()">🔮 Mensaje oculto</button>
`;

step++;

}

/* =========================
   INTERACCIÓN PRINCIPAL
========================= */

function touch(){

clicks++;

const panel = document.getElementById("panel");
panel.style.display = "block";

if(clicks <= 2){
panel.innerText = "🌌 El universo te está observando...";
}

else if(clicks <= 5){
panel.innerText = "✨ Empieza a reconocerte...";
}

else if(clicks <= 8){
panel.innerText = "💜 Ya hay conexión emocional...";
}

else if(clicks <= 11){
panel.innerText = "🌠 El universo responde a tu presencia...";
}

else{
panel.innerText = "🌌 Conexión completa establecida";
final();
}

}

/* =========================
   MENSAJE OCULTO
========================= */

function secret(){

document.getElementById("ui").innerHTML = `
<h1>🔮 Mensaje oculto</h1>

<p>
No todos los universos se pueden explicar…<br><br>

algunos solo se sienten.
</p>

<button onclick="next()">↩ Volver</button>
`;

}

/* =========================
   FINAL
========================= */

function final(){

document.getElementById("ui").innerHTML = `
<h1>🌌 Conexión completa</h1>

<p>
El universo ya no te observa.<br>
Ahora te reconoce.
</p>

<button onclick="end()">💜 Ver mensaje final</button>
`;

}

/* =========================
   MENSAJE FINAL
========================= */

function end(){

document.getElementById("ui").innerHTML = `
<h1>💜 Mensaje final</h1>

<p>
Si este universo reaccionó a ti…<br><br>

no fue casualidad.<br><br>

fue intención.
</p>

<h2>🌌 Fin de la experiencia</h2>

<button onclick="location.reload()">🔁 Reiniciar universo</button>
`;

}

/* =========================
   RESIZE RESPONSIVE
========================= */

window.addEventListener("resize",()=>{

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

createStars();

});

/* =========================
   EXTRA: CLICK SUAVE OCULTO
========================= */

document.addEventListener("click", (e)=>{

const panel = document.getElementById("panel");

if(panel){
panel.style.opacity = "1";
setTimeout(()=> panel.style.opacity = "0.7", 800);
}

});
