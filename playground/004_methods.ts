// ===============================
// METHODS PRACTICE - TS
// ===============================

// 1. Fonction "void" (ne retourne rien)
function printMessage(message: string): void {
    console.log("Message: ", message);
}
printMessage("Bonjour TypeScript!");

// 2. Fonction avec retour de valeur
function add(a: number, b: number): number {
    return a + b;
}
//let Result: number = add(40, 10);
//console.log(`Somme: ${Result}`); // Type de print avec `${Result}`

// Version simplifiée mais pas très claire
console.log(`Somme ${add(40,10)}`); 