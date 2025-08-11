// ===============================
// ADDITIONAL TYPES PRACTICE - TS
// ===============================

// 1. noImplicitAny example (should always annotate types)
function multiply(a: number, b: number): number {
  return a * b;
}

// 2. Annotation de type sur les variables
let userId: number = 101;
let userEmail: string = "user@example.com";
let isPremium: boolean = false;

// 3. Fonction avec paramètres et valeur de retour
function greetUser(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old.`;
}
greetUser("Sebastián", 33);

// 4. Fonction qui retourne une Promise
function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
  });
}
// Exemple d'utilisation de la fonction fetchData
fetchData("https://api.example.com").then((data) => {
  console.log(data); // Affichera : Data from https://api.example.com
});
// Exemple avec async/await
async function getData() {
  const data = await fetchData("https://api.example.com");
  console.log(data); // Affichera : Data from https://api.example.com
}
getData(); 

// 5. Type d'objet avec propriétés optionnelles
type Product = {
  id: number;
  name: string;
  description?: string; // optional property
};
// Exemple d'utilisation de l'objet Product 
let product: Product = {
  id: 1,
  name: "TypeScript Handbook",
  description: "A comprehensive guide to TypeScript" // optional, can be omitted
};
console.log(product); // { id: 1, name: 'TypeScript Handbook', description: 'A comprehensive guide to TypeScript' }

// 6. Union types
let paymentStatus: "paid" | "pending" | "failed";
paymentStatus = "paid";
// paymentStatus = "completed"; // ❌ Erreur, "completed" n'est pas un type valide

// 7. Type aliases
type Point = {
  x: number;
  y: number;
};
// Exemple d'utilisation du type Point
let point: Point = { x: 5, y: 10 };

function printPoint(pt: Point): void {
  console.log(`Point at (${pt.x}, ${pt.y})`);
}

let myPoint: Point = { x: 10, y: 200 };
printPoint(myPoint);