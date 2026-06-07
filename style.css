/* ===========================
   RESET
=========================== */

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{

font-family:'Segoe UI',sans-serif;

background:
linear-gradient(
180deg,
#050816,
#0f172a,
#1e1b4b,
#0f172a
);

color:white;

overflow-x:hidden;

min-height:100vh;

position:relative;

}

/* ===========================
   ESTRELLAS
=========================== */

#stars{

position:fixed;

top:0;
left:0;

width:100%;
height:100%;

z-index:-10;

overflow:hidden;

}

/* ===========================
   NEBULOSAS
=========================== */

body::before{

content:"";

position:fixed;

width:500px;
height:500px;

background:
rgba(168,85,247,.15);

filter:blur(120px);

top:-150px;
left:-150px;

z-index:-9;

animation:nebulaMove 25s infinite alternate;

}

body::after{

content:"";

position:fixed;

width:600px;
height:600px;

background:
rgba(236,72,153,.15);

filter:blur(140px);

bottom:-250px;
right:-250px;

z-index:-9;

animation:nebulaMove2 30s infinite alternate;

}

@keyframes nebulaMove{

from{
transform:translate(0,0);
}

to{
transform:translate(150px,100px);
}

}

@keyframes nebulaMove2{

from{
transform:translate(0,0);
}

to{
transform:translate(-150px,-100px);
}

}

/* ===========================
   LUNA
=========================== */

.moon{

position:fixed;

top:60px;
right:80px;

width:180px;
height:180px;

border-radius:50%;

background:white;

box-shadow:
0 0 30px white,
0 0 60px white,
0 0 120px white;

z-index:-3;

animation:floatMoon 8s ease-in-out infinite;

}

@keyframes floatMoon{

0%{
transform:translateY(0);
}

50%{
transform:translateY(-20px);
}

100%{
transform:translateY(0);
}

}

/* ===========================
   PLANETAS
=========================== */

.planet{

position:fixed;

border-radius:50%;

z-index:-4;

}

.planet1{

width:120px;
height:120px;

background:
linear-gradient(
45deg,
#00c6ff,
#0072ff
);

top:250px;
left:50px;

animation:planetFloat 12s infinite ease-in-out;

}

.planet2{

width:80px;
height:80px;

background:
linear-gradient(
45deg,
#ff6ec7,
#ff9671
);

bottom:120px;
right:120px;

animation:planetFloat 8s infinite ease-in-out;

}

.planet3{

width:60px;
height:60px;

background:
linear-gradient(
45deg,
#f9f871,
#fcb045
);

top:450px;
right:250px;

animation:planetFloat 10s infinite ease-in-out;

}

@keyframes planetFloat{

0%{
transform:translateY(0);
}

50%{
transform:translateY(-15px);
}

100%{
transform:translateY(0);
}

}

/* ===========================
   PANTALLA DE INICIO
=========================== */

#welcomeScreen{

position:fixed;

top:0;
left:0;

width:100%;
height:100%;

display:flex;

flex-direction:column;

justify-content:center;
align-items:center;

background:
rgba(0,0,0,.9);

z-index:1000;

text-align:center;

}

#welcomeScreen h1{

font-size:4rem;

margin-bottom:20px;

}

#welcomeScreen p{

font-size:1.2rem;

margin-bottom:30px;

}

/* ===========================
   HEADER
=========================== */

header{

padding:120px 20px 60px;

text-align:center;

}

header h1{

font-size:4rem;

margin-bottom:20px;

text-shadow:
0 0 20px white;

}

header p{

max-width:700px;

margin:auto;

font-size:1.2rem;

line-height:1.8;

opacity:.9;

}

/* ===========================
   TARJETAS
=========================== */

.glass{

width:90%;

max-width:1000px;

margin:25px auto;

padding:30px;

background:
rgba(255,255,255,.08);

border:
1px solid rgba(255,255,255,.15);

backdrop-filter:blur(15px);

border-radius:25px;

box-shadow:
0 0 30px rgba(255,255,255,.08);

transition:.3s;

}

.glass:hover{

transform:
translateY(-5px);

box-shadow:
0 0 40px rgba(255,255,255,.15);

}

.glass h2{

margin-bottom:20px;

font-size:2rem;

}

/* ===========================
   BOTONES
=========================== */

button{

padding:14px 24px;

border:none;

border-radius:15px;

cursor:pointer;

font-size:16px;

margin-top:15px;

color:white;

background:
linear-gradient(
45deg,
#ec4899,
#8b5cf6
);

transition:.3s;

}

button:hover{

transform:scale(1.05);

box-shadow:
0 0 20px #ec4899;

}

/* ===========================
   ESTADISTICAS
=========================== */

.stats{

display:flex;

justify-content:center;

gap:20px;

flex-wrap:wrap;

}

.statBox{

padding:20px;

border-radius:20px;

background:
rgba(255,255,255,.05);

min-width:120px;

text-align:center;

font-size:1.5rem;

}

/* ===========================
   JARDIN
=========================== */

#garden{

font-size:35px;

line-height:2;

min-height:80px;

margin-top:15px;

}

/* ===========================
   MASCOTA
=========================== */

#pet{

font-size:5rem;

animation:bounce 2s infinite;

}

@keyframes bounce{

0%{
transform:translateY(0);
}

50%{
transform:translateY(-10px);
}

100%{
transform:translateY(0);
}

}

/* ===========================
   MAPA GALACTICO
=========================== */

.map{

display:grid;

grid-template-columns:
repeat(auto-fit,minmax(200px,1fr));

gap:20px;

margin-top:20px;

}

.planetCard{

padding:25px;

border-radius:20px;

background:
rgba(255,255,255,.06);

text-align:center;

transition:.3s;

cursor:pointer;

}

.planetCard:hover{

transform:scale(1.05);

}

/* ===========================
   DIARIO
=========================== */

textarea{

width:100%;

height:180px;

padding:15px;

border:none;

border-radius:15px;

background:
rgba(255,255,255,.08);

color:white;

resize:none;

outline:none;

}

/* ===========================
   SALA SECRETA
=========================== */

.secret{

display:none;

background:
linear-gradient(
135deg,
rgba(236,72,153,.15),
rgba(139,92,246,.15)
);

}

/* ===========================
   FOOTER
=========================== */

footer{

padding:60px;

text-align:center;

opacity:.8;

}

/* ===========================
   RESPONSIVE
=========================== */

@media(max-width:768px){

header h1{

font-size:2.5rem;

}

#welcomeScreen h1{

font-size:2.5rem;

}

.moon{

width:100px;
height:100px;

right:20px;

}

.planet1{

width:70px;
height:70px;

}

.planet2{

width:50px;
height:50px;

}

.planet3{

display:none;

}

.glass{

padding:20px;

}

.glass h2{

font-size:1.4rem;

}

button{

width:100%;

}

.stats{

flex-direction:column;

}

}
