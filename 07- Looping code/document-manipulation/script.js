
// Speichert eine Referenz zum <a> in einer Variablen
const link = document.querySelector('a');

// Manipuliert den Textinhalt des <a>
link.textContent = 'Mozilla Developer Network';

// Manipuliert die URL des <a>
link.href = 'https://developer.mozilla.org';



// Speichert eine Referenz zur <section>
const sect = document.querySelector('section');

// Erzeugt ein neues <p>
const para = document.createElement('p');
// Erzeugt den Textinhalt für das <p>
para.textContent = 'We hope you enjoyed the ride.';

// Fügt den neuen Paragraphen beim Ende der <section> hinzu
sect.appendChild(para);


// Erzeugt einen neuen Textknoten für den Elementenbaum
const text = document.createTextNode(' - the premier source for web development knowledge.');
// Speichert die Referenz zum <p> in dem der link ist
const linkPara = document.querySelector('p');
linkPara.appendChild(text);


// Verschiebt den Paragraphen mit dem Link an das Ende der Section
sect.appendChild(linkPara);

// Entfernt einen node unter Angabe des nodes und des Elternelementes
// sect.removeChild(linkPara);

// Entfernt einen node mit einer Referenz zu sich selbst (funkioniert nur bei neuen Browsern)
// linkPara.remove();

// Entfernt den node auch bei alten Browsern
// linkPara.parentNode.removeChild(linkPara)

