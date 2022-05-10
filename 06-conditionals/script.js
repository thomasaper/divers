////////////////////////////////
///// if...else statements /////
///////////////////////////////

// Das if statement fragt eine Bedingung ab. Ist diese Bedingung wahr, wird der Code ausgeführt.
// Das else wird ausgeführt, wenn die if Bedingung nicht erfüllt ist.
// Das else if wird genutzt, um mehrere Bedingungen zu testen

// Es folgt eine einfache WetterApp, die einen Text auswirft, wenn eine bestimmte Auswahl getroffen wird

// Enthält die Referenz zum Auswahlfeld
const select = document.querySelector('select');
// Enthält die Referenz zum <p> Tag in das der Text kopiert wird
const para = document.querySelector('p');

// startet die Funktion setWeather, sobald eine Auswahl getroffen wurde
select.addEventListener('change', setWeather);


function setWeather() {

  // in dieser Variable wird die Auswahl im <select> Element gespeichert
  const choice = select.value;

  // Es wird getestet, welche Auswahl getroffen wurde. Wenn keine Auswahl getroffen wird, wird der code im else Block angewendet
  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    // löscht den Inhalt im select Feld
  } else {
    para.textContent = '';
  }
}

// Jeder Wert der nicht false, undefined, null, 0, NaN, oder ein leerer string ('') ist, wird wahr.

let cheese = 'Cheddar';

// Die Bedindung ist wahr, es reciht, dass sie existiert. 
if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}




//////////////////////////////////////////////
///// if...else statements verschachteln /////
/////////////////////////////////////////////

// Das Verschachteln (nesting) von if...else statements ist ok und üblich

// Hier wird in userer WetterApp ein if...else statement verschachtelt, um die Temperatur abzufragen

// Wenn die Auswahl auf sunny fällt
if (choice === 'sunny') {
    // Wenn die Temperatur kleiner als 86 Fahrenheit ist
    if (temperature < 86) {
      para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.`;
    // Wenn die Temperatur größer oder gleich 86 Fahrenheit ist  
    } else if (temperature >= 86) {
      para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
    }
  }




///////////////////////////////////////////////
///// Logische Operatoren AND, OR und NOT /////
//////////////////////////////////////////////

// Diese werden genutzt, wenn man mehrere Bedinungen testen möchte, ohne viele if...else Statements zu schreiben

// Der folgende Operator kettet zwei Bedingungen zusammen. Beide müssen eintreffen, damit die Bedingung wahr wird
// &&

// Der folgende Operator kettet zwei Bedingungen zusammen. Eine oder mehr der Bedingungen müssen erfüllt sein, damit der gesamte Ausdruck wahr wird
// ||

// Der folgende Operator kehrt die Bedingung ins Gegenteil um. !(true) wäre also
// !



//////////////////////////////
///// switch Statements /////
/////////////////////////////

// switch Statements werden verwendet, wenn ein einfacher Wert als input gebeben wird und dieser mit vielen Möglichkeiten auf Gleichheit getestet wird, 
// und dann ein Codeblock ausgeführt wird

// Als Beispiel folgt unsere WetterApp als switch Statement

function setWeather() {
    const choice = select.value;
  
    switch (choice) {
      case 'sunny':
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
        break;
      case 'rainy':
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
        break;
      case 'snowing':
        para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
        break;
      case 'overcast':
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
        break;
        // läuf wenn kein Fall eintritt
      default:
        para.textContent = '';
    }
  }



/////////////////////////////////////////
///// Bedingter (ternärer) Operator /////
////////////////////////////////////////

// Wird Bedingung true, wird Ausdruck1 zurüchgegeben, andernfalls wird Ausdruck2 wiedergegeben
// Bedingung ? Ausdruck1: Ausdruck2

// Der ternäre Operator kann auch angewendet werden, um Codeblöcke auszuführen. Im folgenden ein themewechsel (siehe auch html)

const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));



////////////////////////////
///// Test your skills /////
////////////////////////////


/* 

Conditionals 2
---------------


let response;
let score = 100;
let machineActive = true;

// Add your code here

if (machineActive === true) {


   if (score < 0 || score > 100) {
   response = "This is not possible, an error has occurred.";
  } else if (score < 20) {
  response = "That was a terrible score — total fail!";
  } else if (score >= 20 && score < 40) {
  response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
  } else if (score >= 40 && score < 70) {
  response = "You did a passable job, not bad!";
  } else if (score >= 70 && score < 90) {
  response = "That\'s a great score, you really know your stuff.";
  } else if (score >= 90 && score <= 100) {
  response = "What an amazing score! Did you cheat? Are you for real?";
  }


} else {
response = "Turn the maschine on";
};


// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);


Conditionals 3
--------------

if (machineActive) {
	switch (true) {
		case (score >= 0 && score < 20):
		  response = 'That was a terrible score — total fail!';
		  break;
		case (score >= 20 && score < 40):
		  response = 'You know some things, but it\'s a pretty bad score. Needs improvement.';
		  break;
		case (score >= 40 && score < 70):
		  response = 'You did a passable job, not bad!';
		  break;
		case (score >= 70 && score < 90):
		  response = 'That\'s a great score, you really know your stuff.';
		  break;
		case (score >= 90 && score <= 100):
		  response = 'What an amazing score! Did you cheat? Are you for real?';
		  break;
		default:
		  response = 'This is not possible, an error has occurred.';
	}
} else {
  response = 'The machine is turned off. Turn it on to process your score.';
};


Conditionals 4
--------------

let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here

if (machineActive) {

machineResult = 'Machine is active. Trying login.';

pwd === "cheese" ? pwdResult = "Login complete" : pwdResult = "False pwd";


} else {

machineResult = "The maschine is off";

};


    


  
*/