/*

///////////////////////////////////////
///// Warum sind loops nützlich? /////
/////////////////////////////////////

// Loops wiederholen das Gleiche immer wieder, oft nur mit anderen Variabeln oder leicht verändertem Code bei jedem Durchgang.





///////////////////////////////////////
///// Durch eine Sammlung loopen /////
/////////////////////////////////////

// Oft wenn du ein Loops verwendest, möchtest du durch eine Sammlung von items loopen, wie in einem array. 


//  Der for...of loop
//  -----------------

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// Nehme jedes item aus dem array cats und gib es in der Konsole aus
for (const cat of cats) {
  console.log(cat);
};




//  map() und filter()
//  ------------------

// Javascript verfügt über spezialisierte Methoden für Sammlungen. Hier werden zwei beschrieben

// Du kannst die map() Methode verwenden, um etwas an jedem item in einer Sammlung zu tun und eine neue Sammlung zu erstellen, die diese
// veränderten items enthält.



// map()
// ----

// Im folgenden erzeugen wir eine Funktion und mit Hilfe der map() Methode können wir diese Funktion an jedem Item im array anwenden und in einem neuen
// Array wiedergeben.

function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper); // Bemerke ohne Klammern

console.log(upperCats); // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]


// filter()
// --------

// Filter() wird verwendet um an jedem Item in einer Sammlung ein Test durchzuführen und in einer neuen Sammlung nur die Items wiederzugeben
// die den Test bestehen

// Die filter() Methode wirkt ähnlich der map() Methode, gibt aber einen boolschen Wert wieder. Nur die Item, die den Test mit true bestehen, werden
// ins neue array übergeben

function lCat(cat) {
  return cat.startsWith("L");
}

const filtered = cats.filter(lCat);

console.log(filtered); // [ "Leopard", "Lion" ]

// map() und filter() werden oft mit Funktionsausdrücken (function expressions) verwendet. Die Funktion umgeschrieben würde folgendermaßen aussehen: 

// const filtered = cats.filter((cat) => cat.startsWith('L'));
console.log(filtered);
// [ "Leopard", "Lion" ]




///////////////////////////////////////
///// Der Standard for loop /////
/////////////////////////////////////

// Wenn du keine Kollektion hast, durch die du loopen möchtest, sondern einen bestimmten code 100mal durchführen möchtest,
// wird der for loop verwendet.

// for (initializer; condition; final-expression) {
  // code to run
// }



// Looping through collections with a for loop

const dogs = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteDogs = 'My dogs are called ';

for (let i = 0; i < dogs.length; i++) {

  if (i === dogs.length - 1) {
    myFavoriteDogs += `and ${dogs[i]}.` // Nur der letzte Hund am Ende des arrays
  } else {
    myFavoriteDogs += `${dogs[i]}, ` // Loopt einmal durch das array

  }
};

console.log(myFavoriteDogs); // "My cats are called Pete, Biggles, and Jasmine."





// Exiting loops with break

// in html auskommentiert


const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  para.textContent = '';
  for (const contact of contacts) {
    const splitContact = contact.split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    }
  }
  if (para.textContent === '') {
   para.textContent = 'Contact not found.';
 }
});




// Skipping iterations with continue

const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  para.textContent = 'Output: ';
  const num = input.value;
  input.value = '';
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});






// while 

const crows = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCrows = 'My crows are called ';

let a = 0;

while (a < crows.length) {
  if (a === crows.length - 1) {
    myFavoriteCrows += `and ${crows[a]}.`;
  } else {
    myFavoriteCrows += `${crows[a]}, `;
  }

  a++;
}

console.log(myFavoriteCrows);     // "My crows are called Pete, Biggles, and Jasmine."




// do...while

const cars = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCars = 'My cars are called ';

let b = 0;

do {
  if (b === cats.length - 1) {
    myFavoriteCars += `and ${cars[b]}.`;
  } else {
    myFavoriteCars += `${cars[b]}, `;
  }

  i++;
} while (b < cars.length);

console.log(myFavoriteCars);     // "My cars are called Pete, Biggles, and Jasmine."






// Active learning: Launch countdown

let i = 10;

while (i >= 0) {
 const para = document.createElement('p');
 if (i === 10) {
 para.textContent = `Countdown ${i}`;
 } else if (i === 0) {
  para.textContent = 'Blast off!';
 } else {
 para.textContent = i;
 }

 output.appendChild(para);

 i--;
};

*/