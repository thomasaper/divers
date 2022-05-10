///////////////////////////////////////
///// Warum sind loops nützlich? /////
/////////////////////////////////////

// Loops wiederholen das Gleiche immer wieder, oft nur mit anderen Variabeln oder leicht verändertem Code bei jedem Durchgang.





///////////////////////////////////////
///// Durch eine Sammlung loopen /////
/////////////////////////////////////

// Oft wenn du ein Loops verwendest, möchtest du durch eine Sammlung von item loopen, wie in einem array. Es gibt in Javascript auch noch
// andere Sammlungen wie set und map.



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

const filtered = cats.filter((cat) => cat.startsWith('L'));
console.log(filtered);
// [ "Leopard", "Lion" ]




///////////////////////////////////////
///// Der Standard for loop /////
/////////////////////////////////////