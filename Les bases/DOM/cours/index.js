// Selecteurs
// querySelector = une méthode, c'est une fonction codée d'avance
document.querySelector('h4').style.background = "red";

const baliseHtml = document.querySelector("h4");
const h2 = document.querySelector("h2");
const keypress = document.querySelector(".keypress")
console.log(h2);
h2.addEventListener('click', () => {
    keypress.style.background = "orange";
})

// Evenement sur le click
// Déclaration des variables
const questionContainer = document.querySelector('.click-event');


// Vérification 
// console.log(questionContainer);

questionContainer.style.borderRadius = "150px";

// Syntaxte de l'évenement comme un click, scroll...
// questionContainer.addEventListener("click", () => {
//     console.log("Coucou !");
// });

// changer le style de la division .click-event

// questionContainer.addEventListener("click", () => {
//     questionContainer.style.background = "red";
//     questionContainer.style.border = "3px solid teal";
// });

// Plusieurs styles = vaut mieux injecter une classe avec toutes les proprieté qu'on veut lui mettre

// questionContainer.addEventListener("click", () => {
//     questionContainer.classList.add('question-clicked');
// });

// On veut enlever la .class au click avec le toggle

questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle('question-clicked');
});

const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');

// Debuggage
// console.log(btn1,btn2);

// Revelation du <p>
btn1.addEventListener('click', () => {
    response.classList.toggle('show-response');
    response.style.background = "green";
});

btn2.addEventListener('click', () => {    
    response.classList.add('show-response');
    response.style.background = "red";
});

// Ne pas zapper que l'id est superieur a la class et a la balise html


// ****************************************


// Evenement sur la souris

//On pointe cette souris

const mousemove = document.querySelector(".mousemove");

console.log(mousemove);

// On utilisera window au lieu de document, car c'est l'evenement au dessus de document
// le e renferme toute une serie d'evenement, ca récupere toutes les données.
// Ne pas oublier de mettre l'unité
window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
  
    mousemove.style.top = e.pageY + "px";    
  
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-50%)";
})
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
  mousemove.style.border = "2px solid yellow";
})

// Mouse enter : quand la souris survol une zone
questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
})

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
})

response.addEventListener('mouseover' , () => {
    response.style.transform = "rotate(9deg)"
})

//----------------------------------

// KeyPress event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');
const box = document.querySelector('.boxes');

// Création de son en Javascript avec le parametre on peut mettre n'importe qu'elle lettre
const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    console.log(ring)
    audio.play();
}

document.addEventListener('keypress', (e) => {
 key.textContent = e.key;

 if (e.key === "j") {
     keypressContainer.style.background = "pink"
 } else if (e.key === "h"){
    btn2.style.background = "blue";
 } else if ( e.key === "x") {
    box.style.background = "red";
 }
 ring(e.key);
})

/*********************/

// Scroll Event

const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    console.log(window.scrollY);

    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-60px";
    }
});

// ------------------------------------------


