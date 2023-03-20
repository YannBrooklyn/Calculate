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
// console.log(h1result);
h1result.classList.add("result");
h1result.innerHTML = "0";


let h1resulthidden = document.querySelector("main div h1:nth-child(2) ");
// console.log(h1resulthidden);
h1resulthidden.setAttribute("hidden", "hidden");
h1resulthidden.innerHTML = "";
h1resulthidden.classList.add("resulthidden");


let h1resulthidden2 = document.querySelector("main div h1:nth-child(3) ");
console.log(h1resulthidden2);
h1resulthidden2.setAttribute("hidden", "hidden");
h1resulthidden2.innerHTML = "";
h1resulthidden2.classList.add("resulthidden2");


let resultjs = -1;
let resultjs2 = -1;
let resultjs3 = -1;

resultjs = h1resulthidden
resultjs2 = h1resulthidden2




/****************************** THE DIV ********************/


//div screen

//////////////////////   JS SIDE    //////////////////////////


const divscreen = document.querySelector("main div:first-child");
// console.log(divscreen);
divscreen.classList.add("screen");
divscreen.style.color = "white"
divscreen.style.width = "50vh"
divscreen.style.height = "10vh"
divscreen.style.backgroundColor = "rgb(0, 0, 25)"
divscreen.style.borderStyle = "solid"
divscreen.style.borderWidth = "1px"
divscreen.style.borderColor = "yellow"


//////////////////////   CSS SIDE    /////////////////////////


const mainjs = document.querySelector("main");
mainjs.style.display = "flex"
mainjs.style.flexDirection = "column";



/********************************************************/

//div calculator
const divcalculator = document.querySelector("main div:nth-child(2)");
// console.log(divcalculator);
divcalculator.classList.add("calculator");
divcalculator.style.backgroundColor = "black";
divcalculator.style.width = "50vh"
divcalculator.style.height = "70vh"
divcalculator.style.display = "flex"
divcalculator.style.flexDirection = "row"
divcalculator.style.flexWrap = "wrap";

/********************************************************/

//div numbers
const divnumbers = document.querySelector("div div:nth-child(1)");
// console.log(divnumbers);
divnumbers.classList.add("numbers");
divnumbers.style.width = "31vh"
divnumbers.style.height = "40vh"



/********************************************************/

//div numbers789
const divnumbers789 = document.querySelector("div > div div:nth-child(1)");
// console.log(divnumbers789);
divnumbers789.classList.add("numbers789");



/********************************************************/

//div number456
const divnumber456 = document.querySelector("div > div div:nth-child(2)");
// console.log(divnumber456);
divnumber456.classList.add("number456");

/********************************************************/

//div number123
const divnumber123 = document.querySelector("div > div div:nth-child(3)");
// console.log(divnumber123);
divnumber123.classList.add("number123");


/********************************************************/

//div number0side
const divnumber0side = document.querySelector("div > div div:nth-child(4)");
// console.log(divnumber0side);
divnumber0side.classList.add("number0side");

/********************************************************/

// div calculate

const divcalculate = document.querySelector("main > div:nth-child(2) > div:nth-child(2)");
// console.log(divcalculate);
divcalculate.classList.add("calculate");
divcalculate.style.display = "flex";
divcalculate.style.flexDirection ="column";

/********************************************************/

const divparametre = document.querySelector("main > div:nth-child(2) > div:nth-child(1) > div:nth-child(5)");
// console.log(divparametre);
divparametre.classList.add("parametre");
divparametre.style.display = "flex";
divparametre.style.flexDirection ="row";

/********************************************************/

const divhistorique = document.querySelector("main > div:nth-child(2) > div:nth-child(1) > div:nth-child(6)");
// console.log(divhistorique);
divhistorique.classList.add("historik");
divhistorique.style.display = "flex";
divhistorique.style.flexDirection ="row";
divhistorique.style.backgroundColor = "darkblue"
divhistorique.style.width = "30vh";
divhistorique.style.height = "20vh";




/****************************** THE BUTTON ********************/



const button7 = document.querySelector("div button:first-child");
// console.log(button7);
button7.classList.add("button7");
button7.innerHTML = "7";

button7.style.color = "white";
button7.style.backgroundColor = "red";
button7.style.border = "none"
button7.style.borderRadius = "5vh 5vh 5vh 5vh"
button7.style.width = "10vh"
button7.style.height= "10vh"
button7.style.fontSize = "6vh"

button7.addEventListener("click", function fubu7(){
    if (h1result.innerHTML === "0"){
        h1result.innerHTML = "";
    }
    if (resultjs3 >= 0) {
       
        h1result.innerHTML = "";
        h1resulthidden.innerHTML = "";
        resultjs = -1;
        resultjs3 = -1;
    }
    if (resultjs >= 0 && resultjs2 === 0) {
        
        h1result.insertAdjacentHTML("beforeend", 7);
        h1resulthidden2.insertAdjacentHTML("beforeend", 7);
        
    }

    else if (resultjs >= 0) {
        h1result.insertAdjacentHTML("beforeend", 7);
        h1resulthidden2.insertAdjacentHTML("beforeend", 7);
       
    }
    else {
        
        h1result.insertAdjacentHTML("beforeend", 7);
        h1resulthidden.insertAdjacentHTML("beforeend", 7);
        
        
    }
    

})


const button8 = document.querySelector("div button:nth-child(2)");
// console.log(button8);
button8.classList.add("button8");
button8.innerHTML = "8";

button8.style.color = "white";
button8.style.backgroundColor = "red";
button8.style.border = "none"
button8.style.borderRadius = "5vh 5vh 5vh 5vh"
button8.style.width = "10vh"
button8.style.height= "10vh"
button8.style.fontSize = "6vh"

button8.addEventListener("click", function fubu8(){
    if (h1result.innerHTML === "0"){
        h1result.innerHTML = "";
    }
    if (resultjs >= 0 && resultjs2 === 0) {
        
        h1result.insertAdjacentHTML("beforeend", 8);
        h1resulthidden2.insertAdjacentHTML("beforeend", 8);
        
    }

    else if (resultjs >= 0) {
        h1result.insertAdjacentHTML("beforeend", 8);
        h1resulthidden2.insertAdjacentHTML("beforeend", 8);
       
    }
    else {
        
        h1result.insertAdjacentHTML("beforeend", 8);
        h1resulthidden.insertAdjacentHTML("beforeend", 8);
        
        
    }
    

})

const button9 = document.querySelector("div button:nth-child(3)");
// console.log(button9);
button9.classList.add("button9");
button9.innerHTML = "9";

button9.style.color = "white";
button9.style.backgroundColor = "red";
button9.style.border = "none"
button9.style.borderRadius = "5vh 5vh 5vh 5vh"
button9.style.width = "10vh"
button9.style.height= "10vh"
button9.style.fontSize = "6vh"

button9.addEventListener("click", function fubu9(){
    if (h1result.innerHTML === "0"){
        h1result.innerHTML = "";
    }
    if (resultjs >= 0 && resultjs2 === 0) {
        
        h1result.insertAdjacentHTML("beforeend", 9);
        h1resulthidden2.insertAdjacentHTML("beforeend", 9);
        
    }

    else if (resultjs >= 0) {
        h1result.insertAdjacentHTML("beforeend", 9);
        h1resulthidden2.insertAdjacentHTML("beforeend", 9);
       
    }
    else {
        
        h1result.insertAdjacentHTML("beforeend", 9);
        h1resulthidden.insertAdjacentHTML("beforeend", 9);
        
        
    }
    

})


const button4 = document.querySelector("main div:nth-child(2) > div > div:nth-child(2)  button:nth-child(1)");
// console.log(button4);
button4.classList.add("button4");
button4.innerHTML = "4";

button4.style.color = "white";
button4.style.backgroundColor = "red";
button4.style.border = "none"
button4.style.borderRadius = "5vh 5vh 5vh 5vh"
button4.style.width = "10vh"
button4.style.height= "10vh"
button4.style.fontSize = "6vh"

button4.addEventListener("click", function fubu4(){
    if (h1result.innerHTML === "0"){
        h1result.innerHTML = "";
    }
    if (resultjs >= 0 && resultjs2 === 0) {
        
        h1result.insertAdjacentHTML("beforeend", 4);
        h1resulthidden2.insertAdjacentHTML("beforeend", 4);
        
    }

    else if (resultjs >= 0) {
        h1result.insertAdjacentHTML("beforeend", 4);
        h1resulthidden2.insertAdjacentHTML("beforeend", 4);
       
    }
    else {
        
        h1result.insertAdjacentHTML("beforeend", 4);
        h1resulthidden.insertAdjacentHTML("beforeend", 4);
        
        
    }
    

})

const button5 = document.querySelector("main div:nth-child(2) > div > div:nth-child(2)  button:nth-child(2)");
// console.log(button5);
button5.classList.add("button5");
button5.innerHTML = "5";

button5.style.color = "white";
button5.style.backgroundColor = "red";
button5.style.border = "none"
button5.style.borderRadius = "5vh 5vh 5vh 5vh"
button5.style.width = "10vh"
button5.style.height= "10vh"
button5.style.fontSize = "6vh"

button5.addEventListener("click", function fubu5(){
    if (h1result.innerHTML === "0"){
        h1result.innerHTML = "";
    }
    if (resultjs >= 0 && resultjs2 === 0) {
        
        h1result.insertAdjacentHTML("beforeend", 5);
        h1resulthidden2.insertAdjacentHTML("beforeend", 5);
        
    }

    else if (resultjs >= 0) {
        h1result.insertAdjacentHTML("beforeend", 5);
        h1resulthidden2.insertAdjacentHTML("beforeend", 5);
       
    }
    else {
        
        h1result.insertAdjacentHTML("beforeend", 5);
        h1resulthidden.insertAdjacentHTML("beforeend", 5);
        
        
    }
    

})

const button6 = document.querySelector("main div:nth-child(2) > div > div:nth-child(2)  button:nth-child(3)");
// console.log(button6);
button6.classList.add("button6");
button6.innerHTML = "6";

button6.style.color = "white";
button6.style.backgroundColor = "red";
button6.style.border = "none"
button6.style.borderRadius = "5vh 5vh 5vh 5vh"
button6.style.width = "10vh"
button6.style.height= "10vh"
button6.style.fontSize = "6vh"

button6.addEventListener("click", function fubu6(){
    if (h1result.innerHTML === "0"){
        h1result.innerHTML = "";
    }
    if (resultjs >= 0 && resultjs2 === 0) {
        
        h1result.insertAdjacentHTML("beforeend", 6);
        h1resulthidden2.insertAdjacentHTML("beforeend", 6);
        
    }

    else if (resultjs >= 0) {
        h1result.insertAdjacentHTML("beforeend", 6);
        h1resulthidden2.insertAdjacentHTML("beforeend", 6);
       
    }
    else {
        
        h1result.insertAdjacentHTML("beforeend", 6);
        h1resulthidden.insertAdjacentHTML("beforeend", 6);
        
        
    }
    

})

const button1 = document.querySelector("main div:nth-child(2) > div > div:nth-child(3)  button:nth-child(1)");
// console.log(button1);
button1.classList.add("button1");
button1.innerHTML = "1";
button1.style.color = "white";

button1.style.color = "white";
button1.style.backgroundColor = "red";
button1.style.border = "none"
button1.style.borderRadius = "5vh 5vh 5vh 5vh"
button1.style.width = "10vh"
button1.style.height= "10vh"
button1.style.fontSize = "6vh"

button1.addEventListener("click", function fubu1(){
    if (h1result.innerHTML === "0"){
        h1result.innerHTML = "";
    }
    if (resultjs >= 0 && resultjs2 === 0) {
        
        h1result.insertAdjacentHTML("beforeend", 1);
        h1resulthidden2.insertAdjacentHTML("beforeend", 1);
        
    }

    else if (resultjs >= 0) {
        h1result.insertAdjacentHTML("beforeend", 1);
        h1resulthidden2.insertAdjacentHTML("beforeend", 1);
       
    }
    else {
        
        h1result.insertAdjacentHTML("beforeend", 1);
        h1resulthidden.insertAdjacentHTML("beforeend", 1);
        
        
    }
    

})

const button2 = document.querySelector("main div:nth-child(2) > div > div:nth-child(3)  button:nth-child(2)");
// console.log(button2);
button2.classList.add("button2");
button2.innerHTML = "2";

button2.style.color = "white";
button2.style.backgroundColor = "red";
button2.style.border = "none"
button2.style.borderRadius = "5vh 5vh 5vh 5vh"
button2.style.width = "10vh"
button2.style.height= "10vh"
button2.style.fontSize = "6vh"

button2.addEventListener("click", function fubu2(){
    if (h1result.innerHTML === "0"){
        h1result.innerHTML = "";
    }
    if (resultjs >= 0 && resultjs2 === 0) {
        
        h1result.insertAdjacentHTML("beforeend", 2);
        h1resulthidden2.insertAdjacentHTML("beforeend", 2);
        
    }

    else if (resultjs >= 0) {
        h1result.insertAdjacentHTML("beforeend", 2);
        h1resulthidden2.insertAdjacentHTML("beforeend", 2);
       
    }
    else {
        
        h1result.insertAdjacentHTML("beforeend", 2);
        h1resulthidden.insertAdjacentHTML("beforeend", 2);
        
        
    }
    

})

const button3 = document.querySelector("main div:nth-child(2) > div > div:nth-child(3)  button:nth-child(3)");
// console.log(button3);
button3.classList.add("button3");
button3.innerHTML = "3";

button3.style.color = "white";
button3.style.backgroundColor = "red";
button3.style.border = "none"
button3.style.borderRadius = "5vh 5vh 5vh 5vh"
button3.style.width = "10vh"
button3.style.height= "10vh"
button3.style.fontSize = "6vh"

button3.addEventListener("click", function fubu3(){
    if (h1result.innerHTML === "0"){
        h1result.innerHTML = "";
    }
    if (resultjs >= 0 && resultjs2 === 0) {
        
        h1result.insertAdjacentHTML("beforeend", 3);
        h1resulthidden2.insertAdjacentHTML("beforeend", 3);
        
    }

    else if (resultjs >= 0) {
        h1result.insertAdjacentHTML("beforeend", 3);
        h1resulthidden2.insertAdjacentHTML("beforeend", 3);
       
    }
    else {
        
        h1result.insertAdjacentHTML("beforeend", 3);
        h1resulthidden.insertAdjacentHTML("beforeend", 3);
        
        
    }
    

})

const buttonside = document.querySelector("main div:nth-child(2) > div > div:nth-child(4)  button:nth-child(1)");
// console.log(buttonpositif);
buttonside.classList.add("button+|-");
buttonside.innerHTML = "+|-";

buttonside.style.color = "white";
buttonside.style.backgroundColor = "red";
buttonside.style.border = "none"
buttonside.style.borderRadius = "5vh 5vh 5vh 5vh"
buttonside.style.width = "10vh"
buttonside.style.height= "10vh"
buttonside.style.fontSize = "6vh"

const button0 = document.querySelector("main div:nth-child(2) > div > div:nth-child(4)  button:nth-child(2)");
// console.log(button0);
button0.classList.add("button0");
button0.innerHTML = "0";

button0.style.color = "white";
button0.style.backgroundColor = "red";
button0.style.border = "none"
button0.style.borderRadius = "5vh 5vh 5vh 5vh"
button0.style.width = "10vh"
button0.style.height= "10vh"
button0.style.fontSize = "6vh"

button0.addEventListener("click", function fubu0(){
    if (h1result.innerHTML === "0"){
        h1result.innerHTML = "";
    }
    if (resultjs >= 0 && resultjs2 === 0) {
        
        h1result.insertAdjacentHTML("beforeend", 0);
        h1resulthidden2.insertAdjacentHTML("beforeend", 0);
        
    }

    else if (resultjs >= 0) {
        h1result.insertAdjacentHTML("beforeend", 0);
        h1resulthidden2.insertAdjacentHTML("beforeend", 0);
       
    }
    else {
        
        h1result.insertAdjacentHTML("beforeend", 0);
        h1resulthidden.insertAdjacentHTML("beforeend", 0);
        
        
    }
    

})

const buttondecimal = document.querySelector("main div:nth-child(2) > div > div:nth-child(4)  button:nth-child(3)");
// console.log(buttonnegatif);
buttondecimal.classList.add("buttondecimal");
buttondecimal.innerHTML = ".";
buttondecimal.style.color = "white";

buttondecimal.style.color = "white";
buttondecimal.style.backgroundColor = "red";
buttondecimal.style.border = "none"
buttondecimal.style.borderRadius = "5vh 5vh 5vh 5vh"
buttondecimal.style.width = "10vh"
buttondecimal.style.height= "10vh"
buttondecimal.style.fontSize = "6vh"

const addition = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(1)");
// console.log(addition);
addition.classList.add("button+");
addition.innerHTML = "+";

addition.style.color = "white";
addition.style.backgroundColor = "green";
addition.style.border = "none"
addition.style.borderRadius = "5vh 5vh 5vh 5vh"
addition.style.width = "10vh"
addition.style.height= "10vh"
addition.style.fontSize = "6vh"

addition.addEventListener("click", function fubuaddition(){
    h1result.insertAdjacentHTML("beforeend", "+")
    
    if (resultjs >= 0) {

    
    resultjs2 = parseFloat(h1resulthidden2.innerHTML);
    }
    else {
        resultjs = parseFloat(h1resulthidden.innerHTML);
    }
    
    
})

const soustraction = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(2)");
// console.log(soustraction);
soustraction.classList.add("button-");
soustraction.innerHTML = "-";

soustraction.style.color = "white";
soustraction.style.backgroundColor = "green";
soustraction.style.border = "none"
soustraction.style.borderRadius = "5vh 5vh 5vh 5vh"
soustraction.style.width = "10vh"
soustraction.style.height= "10vh"
soustraction.style.fontSize = "6vh"

soustraction.addEventListener("click", function fubusoustraction(){
    h1result.insertAdjacentHTML("beforeend", "-")
    if (resultjs >= 0) {

    
        resultjs2 = parseFloat(h1resulthidden2.innerHTML);
        }
        else {
            resultjs = parseFloat(h1resulthidden.innerHTML);
        }
    
})

const multiplication = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(3)");
// console.log(multiplication);
multiplication.classList.add("button*");
multiplication.innerHTML = "*";


multiplication.style.color = "white";
multiplication.style.backgroundColor = "green";
multiplication.style.border = "none"
multiplication.style.borderRadius = "5vh 5vh 5vh 5vh"
multiplication.style.width = "10vh"
multiplication.style.height= "10vh"
multiplication.style.fontSize = "6vh"

multiplication.addEventListener("click", function fubumulti(){
    h1result.insertAdjacentHTML("beforeend", "x")
    if (resultjs >= 0) {

    
        resultjs2 = parseFloat(h1resulthidden2.innerHTML);
        }
        else {
            resultjs = parseFloat(h1resulthidden.innerHTML);
        }
    
})

const diviser = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(4)");
// console.log(diviser);
diviser.classList.add("button/");
diviser.innerHTML = "/";

diviser.style.color = "white";
diviser.style.backgroundColor = "green";
diviser.style.border = "none"
diviser.style.borderRadius = "5vh 5vh 5vh 5vh"
diviser.style.width = "10vh"
diviser.style.height= "10vh"
diviser.style.fontSize = "6vh"

diviser.addEventListener("click", function fubudiviser(){
    h1result.insertAdjacentHTML("beforeend", "/")
    if (resultjs >= 0) {

    
        resultjs2 = parseFloat(h1resulthidden2.innerHTML);
        }
        else {
            resultjs = parseFloat(h1resulthidden.innerHTML);
        }
    
})

const modulo = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(5)");
// console.log(modulo);
modulo.classList.add("button%");
modulo.innerHTML = "%";
modulo.style.color = "white";

modulo.style.color = "white";
modulo.style.backgroundColor = "green";
modulo.style.border = "none"
modulo.style.borderRadius = "5vh 5vh 5vh 5vh"
modulo.style.width = "10vh"
modulo.style.height= "10vh"
modulo.style.fontSize = "6vh"

modulo.addEventListener("click", function fubumodulo(){
    h1result.insertAdjacentHTML("beforeend", "%")
    if (resultjs >= 0) {

    
        resultjs2 = parseFloat(h1resulthidden2.innerHTML);
        }
        else {
            resultjs = parseFloat(h1resulthidden.innerHTML);
        }
    
})

const resultat = document.querySelector("main > div:nth-child(2) > div:nth-child(2) > button:nth-child(6)");
// console.log(resultat);
resultat.classList.add("button=");
resultat.innerHTML = "=";

resultat.style.color = "white";
resultat.style.backgroundColor = "green";
resultat.style.border = "none"
resultat.style.borderRadius = "5vh 5vh 5vh 5vh"
resultat.style.width = "10vh"
resultat.style.height= "10vh"
resultat.style.fontSize = "6vh"


resultat.addEventListener("click", function fuburesult(){
    resultjs2 = parseFloat(h1resulthidden2.innerHTML);
    
    if (h1result.innerHTML === resultjs + "+" + resultjs2) {
    const newLi = document.createElement("h5")
    newLi.innerHTML = h1result.innerHTML + "=";
    h1result.innerHTML = resultjs2 + resultjs;
    newLi.innerHTML = newLi.innerHTML + h1result.innerHTML + "| ";
    document.querySelector("main > div:nth-child(2) > div:nth-child(1) > div:nth-child(6)").appendChild(newLi)
    newLi.style.color = "white"
    newLi.style.fontSize = "2vh"
    newLi.style.listStyleType = "none"
     
    }

    else if (h1result.innerHTML === resultjs + "-" + resultjs2 ) {
        h1result.innerHTML = resultjs - resultjs2;
    }

    else if (h1result.innerHTML === resultjs + "/" + resultjs2 ) {
        h1result.innerHTML = resultjs / resultjs2;
    }

    else if (h1result.innerHTML === resultjs + "x" + resultjs2 ) {
        h1result.innerHTML = resultjs * resultjs2;
    }

    else if (h1result.innerHTML === resultjs + "%" + resultjs2 ) {
        h1result.innerHTML = resultjs % resultjs2;
    }
    resultjs = parseFloat(h1result.innerHTML);
    h1resulthidden.innerHTML = parseFloat(h1result.innerHTML);
    resultjs2 = -1;
    h1resulthidden2.innerHTML = "";
    resultjs3 = parseFloat(h1result.innerHTML);
    
    
})


const buttonclear = document.querySelector("main > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(1)");
// console.log(buttonclear);
buttonclear.classList.add("buttonc");
buttonclear.innerHTML = "C";
buttonclear.style.color = "white";
buttonclear.style.backgroundColor = "rgb(250, 217, 0)";
buttonclear.style.border = "none"
buttonclear.style.borderRadius = "5vh 5vh 5vh 5vh"
buttonclear.style.width = "10vh"
buttonclear.style.height= "10vh"
buttonclear.style.fontSize = "6vh"
buttonclear.addEventListener("click" , function fubucl(){
    resultjs = -1;
    resultjs2 = -1;
    resultjs3= -1;
    h1result.innerHTML = "0";
    h1resulthidden.innerHTML = "";
    h1resulthidden2.innerHTML = "";
})

const buttonsettings = document.querySelector("main > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(2)");
// console.log(buttonsettings);
buttonsettings.classList.add("buttonseti");
buttonsettings.innerHTML = "S";
buttonsettings.style.color = "white";
buttonsettings.style.backgroundColor = "rgb(250, 217, 0)";
buttonsettings.style.border = "none"
buttonsettings.style.borderRadius = "5vh 5vh 5vh 5vh"
buttonsettings.style.width = "10vh"
buttonsettings.style.height= "10vh"
buttonsettings.style.fontSize = "6vh"

const buttonhistory = document.querySelector("main > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(3)");
// console.log(buttonhistory);
buttonhistory.classList.add("buttonhisto");
buttonhistory.innerHTML = "H";
buttonhistory.style.color = "white";
buttonhistory.style.backgroundColor = "rgb(250, 217, 0)";
buttonhistory.style.border = "none"
buttonhistory.style.borderRadius = "5vh 5vh 5vh 5vh"
buttonhistory.style.width = "10vh"
buttonhistory.style.height= "10vh"
buttonhistory.style.fontSize = "6vh"

 