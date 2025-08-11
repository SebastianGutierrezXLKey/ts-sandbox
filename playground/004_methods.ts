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

// 3. Fonction avec paramètres optionnels
function greet(name: string, age?: number): string {
    if (age) {
        return `Bonjour ${name}, vous avez ${age} ans.`;
    }
    return `Bonjour ${name}`;
}
console.log(greet("Sebastian", 33)); // Avec âge
console.log(greet("Bob")); // Sans âge

// 4 .Fonction avec paramètres multiples
function SumAllNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(`Somme de tous les nombres: ${SumAllNumbers(1, 2, 3, 4, 5)}`); // Somme de tous les nombres

// 5. Fonction avec paramètres par défaut
function multiply(a: number, b: number = 1): number {
    return a * b;
}
console.log(`10 multiplié par le défaut (1): ${multiply(10)}`);
console.log(`6 multiplié par 5: ${multiply(6, 5)}`);