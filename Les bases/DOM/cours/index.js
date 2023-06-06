// Selecteurs
// querySelector = une méthode, c'est une fonction codée d'avance
document.querySelector("h4").style.background = "red";

const baliseHtml = document.querySelector("h4");
const h2 = document.querySelector("h2");
const keypress = document.querySelector(".keypress");
console.log(h2);
h2.addEventListener("click", () => {
  keypress.style.background = "orange";
});

// Evenement sur le click
// Déclaration des variables
const questionContainer = document.querySelector(".click-event");

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
  questionContainer.classList.toggle("question-clicked");
});

const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// Debuggage
// console.log(btn1,btn2);

// Revelation du <p>
btn1.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
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
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";

  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-50%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
  mousemove.style.border = "2px solid yellow";
});

// Mouse enter : quand la souris survol une zone
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(9deg)";
});

//----------------------------------

// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const box = document.querySelector(".boxes");

// Création de son en Javascript avec le parametre on peut mettre n'importe qu'elle lettre
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  console.log(ring);
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    btn2.style.background = "blue";
  } else if (e.key === "x") {
    box.style.background = "red";
  }
  ring(e.key);
});

/*********************/

// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-60px";
  }
});

// ------------------------------------------
// Form Event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
// Stocker ce qui est taper dans l'Input
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log(pseudo);
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

// Pour ne pas changer de page aprés avoir cliquer sur submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // JS connait l'id cgv

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
        <h3> Pseudo : ${pseudo} </h3>
        <h4> Langage préféré : ${language}
        `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

// Evenement Load event. Il se déclenche une fois que toutes la page est chargée

window.addEventListener("load", () => {
  console.log("Doc chargé !");
});

// -----------------------------------------

//
const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

// Selectionner par ID, on peut déclarer l'ID par getElementbyId

// addEventListener VS onClick
// La méthode onClick s'utilise qu'une fois.
// document.body.onclick = function() {
//     console.log('Coucou');
// }

// document.body.onscroll = () => {
//     alert('ca marche!')
// }

// Bubling = > déclenchement a la fin
document.body.addEventListener(
  "click",
  () => {
    console.log("click num1");
  },
  
);

// UseCapture => déclenchement au début
document.body.addEventListener(
  "click",
  () => {
    console.log("click num2");
  },
  true
);


//----------------------------------------------

// Stop propagation

questionContainer.addEventListener('click', (e) => {
    alert('test');
    e.stopPropagation();
});

// RemoveEventListener : retirer un evenement

// ----------------------------------

// BOM : Browser object model

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open('http://google.com', "cours js", "height=600, with=300")

// Evenement adossés à Window
// window.alert('hello')
// Confirm

btn2.addEventListener('click', () => {
    confirm("voulez-vous vraiment vous tromper ?"); 
})

let answer;
btn2.addEventListener('click', () => {
  answer =  prompt("Entrez votre nom?"); 

  questionContainer.innerHTML += "<h3> Bravo " + answer + "</h3>";
})

// setimeout : tp en millisecondes avant de déclencher, c'est un timer

setTimeout(() => {
  questionContainer.style.background = "red";
}, 4000);

// Execute un bout de code toutes les temps de secondes
// let interval = setInterval(() => {
//   document.body.innerHTML += 
//   "<div class='box'><h2>Nouvelle boite !</h2></div>"
//   success();
// }, 3000);

// Quand on clique sur le body, on arrete la methode
document.body.addEventListener('click', (e) => {
  clearInterval(interval);
 console.log(e.target)
})

// Location = pour rediriger vers des liens
// console.log(location.href);
// console.log(location.host);
// console.log(location.location.pathname);
// console.log(location.search);

// location.replace("https://lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr";
// }

// Objet Navigator

console.log(navigator.userAgent)

// Il peut aussi nous localiser
// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  document.body.innerHTML += ('Votre position actuelle est :');
  document.body.innerHTML += (`Latitude : ${crd.latitude}`);
  document.body.innerHTML += (`Longitude : ${crd.longitude}`);
  document.body.innerHTML += (`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);


//HIstory
// window.history.back();
//history.go(-3);


let prenom = setInterval(() => {
  document.body.innerHTML += `<h3>Wassila</h3>`
}, 3000);



document.body.addEventListener('click', () => {
  clearInterval(prenom);
})
