// file:///C:/Users/Yann/Downloads/My_Calculate.pdf

// https://www.youtube.com/watch?v=sXwPfnsKGiE

/* LANGAGE

HTML / CSS / JAVASCRIPT / JQuery

SUJET
Coder une bonne vieille calculatrice est un excellent exercice pratique pour
améliorer vos compétences en JavaScript. Vous pourrez vous amuser sur le
développement de l’interface graphique en ajoutant dans le DOM
directement la partie HTML, puis ajouter de l’intelligence avec JavaScript et
JQUERY pour la partie animation en bonus.

Commencez avec quelques opérateurs simples et des boutons de base pour
gérer :

● L’addition
● La soustraction
● La multiplication
● La Division
● + BONUS

Ensuite, vous pourrez prendre en compte les degrés, racines carrés et toutes
les autres opérations que vous voulez. Une calculatrice complète et aboutie
est un excellent projet javascript pour progresser.

RENDU

Liens github. */



/*****************************************************************/








/****************** RESULT ************************/

let h1result = document.querySelector("div > h1:first-child");
console.log(h1result);
h1result.classList.add("result");



let h1resulthidden = document.querySelector("main div h1:nth-child(2) ");
console.log(h1resulthidden);
h1resulthidden.setAttribute("hidden", "hidden");
h1resulthidden.innerHTML = "";
h1resulthidden.classList.add("resulthidden");


let resultjs = 0;
let resultjs2 = 0;
let resultjs3 = 0;






/****************************** THE DIV ********************/


//div screen

//////////////////////   JS SIDE    //////////////////////////


const divscreen = document.querySelector("main div:first-child");
console.log(divscreen);
divscreen.classList.add("screen");

//////////////////////   CSS SIDE    /////////////////////////




/********************************************************/

//div calculator
const divcalculator = document.querySelector("main div:nth-child(2)");
console.log(divcalculator);
divcalculator.classList.add("calculator");

/********************************************************/

//div numbers
const divnumbers = document.querySelector("div div:nth-child(1)");
console.log(divnumbers);
divnumbers.classList.add("numbers");

/********************************************************/

//div numbers789
const divnumbers789 = document.querySelector("div > div div:nth-child(1)");
console.log(divnumbers789);
divnumbers789.classList.add("numbers789");

/********************************************************/

//div number456
const divnumber456 = document.querySelector("div > div div:nth-child(2)");
console.log(divnumber456);
divnumber456.classList.add("number456");

/********************************************************/

//div number123
const divnumber123 = document.querySelector("div > div div:nth-child(3)");
console.log(divnumber123);
divnumber123.classList.add("number123");

/********************************************************/

//div number0side
const divnumber0side = document.querySelector("div > div div:nth-child(4)");
console.log(divnumber0side);
divnumber0side.classList.add("number0side");

/********************************************************/

// div calculate

const divcalculate = document.querySelector("main > div:nth-child(2) > div:nth-child(2)");
console.log(divcalculate);
divcalculate.classList.add("calculate");

/********************************************************/


/****************************** THE BUTTON ********************/



const button7 = document.querySelector("div button:first-child");
console.log(button7);
button7.classList.add("button7");
button7.innerHTML = "7";
button7.addEventListener("click", function fubu7(){
    if (h1result.innerHTML === "+" + resultjs) {
        resultjs2 = 7
        h1result.insertAdjacentHTML("afterbegin", resultjs2);
        resultjs2 = parseFloat(h1result.innerHTML);
    }
    else {
        resultjs = 7;
        h1result.insertAdjacentHTML("afterbegin", resultjs);
        resultjs = parseFloat(h1result.innerHTML);
        
    }
    
    
    
    h1resulthidden.innerHTML="7";

})


const button8 = document.querySelector("div button:nth-child(2)");
console.log(button8);
button8.classList.add("button8");
button8.innerHTML = "8";

const button9 = document.querySelector("div button:nth-child(3)");
console.log(button9);
button9.classList.add("button9");
button9.innerHTML = "9";

const button4 = document.querySelector("main div:nth-child(2) > div > div:nth-child(2)  button:nth-child(1)");
console.log(button4);
button4.classList.add("button4");
button4.innerHTML = "4";

const button5 = document.querySelector("main div:nth-child(2) > div > div:nth-child(2)  button:nth-child(2)");
console.log(button5);
button5.classList.add("button5");
button5.innerHTML = "5";

const button6 = document.querySelector("main div:nth-child(2) > div > div:nth-child(2)  button:nth-child(3)");
console.log(button6);
button6.classList.add("button6");
button6.innerHTML = "6";

const button1 = document.querySelector("main div:nth-child(2) > div > div:nth-child(3)  button:nth-child(1)");
console.log(button1);
button1.classList.add("button1");
button1.innerHTML = "1";

const button2 = document.querySelector("main div:nth-child(2) > div > div:nth-child(3)  button:nth-child(2)");
console.log(button2);
button2.classList.add("button2");
button2.innerHTML = "2";

const button3 = document.querySelector("main div:nth-child(2) > div > div:nth-child(3)  button:nth-child(3)");
console.log(button3);
button3.classList.add("button3");
button3.innerHTML = "3";

const buttonpositif = document.querySelector("main div:nth-child(2) > div > div:nth-child(4)  button:nth-child(1)");
console.log(buttonpositif);
buttonpositif.classList.add("button+|");
buttonpositif.innerHTML = "+|";

const button0 = document.querySelector("main div:nth-child(2) > div > div:nth-child(4)  button:nth-child(2)");
console.log(button0);
button0.classList.add("button0");
button0.innerHTML = "0";

const buttonnegatif = document.querySelector("main div:nth-child(2) > div > div:nth-child(4)  button:nth-child(3)");
console.log(buttonnegatif);
buttonnegatif.classList.add("button-|");
buttonnegatif.innerHTML = "-|";

const addition = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(1)");
console.log(addition);
addition.classList.add("button+");
addition.innerHTML = "+";
addition.addEventListener("click", function fubuaddition(){
    h1result.insertAdjacentHTML("afterbegin", "+")
    resultjs2 = resultjs;
    
    
})

const soustraction = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(2)");
console.log(soustraction);
soustraction.classList.add("button-");
soustraction.innerHTML = "-";

const multiplication = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(3)");
console.log(multiplication);
multiplication.classList.add("button*");
multiplication.innerHTML = "*";

const diviser = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(4)");
console.log(diviser);
diviser.classList.add("button/");
diviser.innerHTML = "/";

const modulo = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(5)");
console.log(modulo);
modulo.classList.add("button%");
modulo.innerHTML = "%";

const resultat = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(6)");
console.log(resultat);
resultat.classList.add("button=");
resultat.innerHTML = "=";
resultat.addEventListener("click", function fuburesult(){
    
    if (h1result.innerHTML == resultjs2 + "+" + resultjs )
    h1result.innerHTML = resultjs2 + resultjs;
    h1resulthidden.innerHTML="+";
    
})




