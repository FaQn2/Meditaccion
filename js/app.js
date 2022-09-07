window.addEventListener("load",function(){

  /*   // MOSTRAR UNA FRASE CADA X TIEMPO
 let timerId = setInterval(() => (randomFrases()), 6400);

 function randomFrases(){
   const frase = ["Mindful breathing is a kind of bridge that connects the body with the mind.",
   "Make your mental well-being not depend on something or someone else, only on you.",
   "Lack of time is not an excuse not to meditate.",
   "Inhale acceptance exhale tension"
     
 ];
   const aleatorio = frase[Math.floor(Math.random() * frase.length)];
   var imprimirfrase = document.getElementById("frase").innerHTML = aleatorio;
 }

 */

//hace un form de login o registee y poner la imagen del wachin meditando, fijarese como queda el globo solo.
//logo + palabra logo
//arreglar la pagina para que sea 100% resoponsive



 const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Mindful breathing is a kind of bridge that connects the body with the mind.",
   "Make your mental well-being not depend on something or someone else, only on you.",
   "Lack of time is not an excuse not to meditate.",
   "Inhale acceptance exhale tension"
];

const morphTime = 0.87;
const cooldownTime = 5.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 72)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 1) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 72)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 1) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();
















});


