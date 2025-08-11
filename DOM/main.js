var h1 = document.querySelector('h1');
console.log(h1 === null || h1 === void 0 ? void 0 : h1.textContent); // Affiche le contenu du h1
// Sélectionne l'élément avec la classe 'title'
var title = document.querySelector('.title');
console.log(title === null || title === void 0 ? void 0 : title.textContent);
var message = document.querySelector('#message'); // Sélectionne l'élément avec l'ID 'message'
console.log(message === null || message === void 0 ? void 0 : message.placeholder); // Affiche le contenu de l'élément avec l'ID 'message'
