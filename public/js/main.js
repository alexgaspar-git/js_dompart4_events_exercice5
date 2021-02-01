//1

let input = document.querySelector('input');

input.addEventListener('focus', () => {
    input.style.backgroundColor = "blue"
});

//2

let input1 = document.querySelectorAll('input')[1];

input1.addEventListener('focus', () => {
    input1.style.backgroundColor = "blue"
});

input1.addEventListener('focusout', () => {
    input1.style.backgroundColor = ""
});

//3

let p1 = document.getElementsByClassName('premierParagraphe')[0];
let p2 = document.getElementsByClassName('secondParagraphe')[0];
let p3 = document.getElementsByClassName('dernierParagraphe')[0];
let bouton = document.getElementsByClassName('buttonExo')[0];

bouton.addEventListener('click', () => {
    p1.textContent = p2.textContent
    p3.textContent = p2.textContent
});

//4

let iEx4 = document.querySelector('#iEx4');
let bouton2 = document.querySelectorAll('.buttonExo')[1];
let pEx4 = document.querySelector('#exo4');

bouton2.addEventListener('click', () => {
    pEx4.textContent = iEx4.value
});

//5

let btn3 = document.getElementsByClassName("btn")[2];
let img1 = document.getElementsByClassName("img-responsive")[0];
let exo5P = document.getElementsByTagName("p")[4].innerText;

btn3.addEventListener("click", () => {
  // Récupère l'index du point dans la chaine de caractère "Chemin : ./src/image/tartine.png" et stock cet index dans la variable indexPoint
  let indexPoint = exo5P.indexOf(".");
  // On ce sert de la methode slice sur la chaine de caractère "Chemin : ./src/image/tartine.png" pour ne garder que le texte a partir de l'index contenu dans la variable indexPoint
  let cheminExo5P = exo5P.slice(indexPoint);

  img1.src = cheminExo5P;
});

//6
let imgSecond = document.querySelectorAll("img")[1];
let imgthird = document.querySelectorAll("img")[2];
let stock = "";

let stockimg = () => {
  stock = imgSecond.attributes[1].value;
};
let remplaceimg = () => {
  imgthird.attributes[1].value = stock;
};

imgSecond.addEventListener("click", stockimg);
imgthird.addEventListener("click", remplaceimg);

// Exo 7
let exo7Button = document.querySelectorAll("button.btn")[3];
let exo7P1 = exo7Button.previousElementSibling;
let exo7P2 = exo7Button.nextElementSibling;
let exo7Temp = "";

let interChange = () => {
  exo7Temp = exo7P1.innerText;
  exo7P1.innerText = exo7P2.innerText;
  exo7P2.innerText = exo7Temp;
};

exo7Button.addEventListener("click", interChange);
