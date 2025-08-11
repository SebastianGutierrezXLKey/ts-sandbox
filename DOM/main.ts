// Affiche le contenu du h1
const h1 = document.querySelector('h1');
console.log(h1?.textContent); 

// Sélectionne l'élément avec la classe 'title'
let title : HTMLHeadingElement = document.querySelector('.title') as HTMLHeadingElement;
console.log(title?.textContent);

// Affiche le contenu de l'élément avec l'ID 'message'
const message = document.querySelector('#message') as HTMLInputElement; // Sélectionne l'élément avec l'ID 'message'
console.log(message?.placeholder); 