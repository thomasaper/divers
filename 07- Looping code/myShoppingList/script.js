// Enthält Referenz zum <ul>
const list = document.querySelector('ul');
// Enthält Referenz zum <input>
const input = document.querySelector('input');
// Enthält Referenz zum <button>
const button = document.querySelector('button');

// Funktion wird gestartet, sobald der <button> geklickt wird
button.addEventListener('click', () => {
  // Enthält den gegenwärtigen Inhalt von <input>  
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});