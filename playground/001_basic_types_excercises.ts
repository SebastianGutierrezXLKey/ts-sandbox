// ===============================
// BASIC TYPES - Exercices TS
// ===============================

// 1. Variables avec types explicites
let username: string = "Sebastian";
let userAge: number = 32;
let isActive: boolean = true;

// 2. Tableaux
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["pomme", "banane"];

// 3. Tuple
let userTuple: [string, number] = ["Alice", 25];

// 4. Enum
enum Direction {
  North,
  South,
  East,
  West
}
let myDirection: Direction = Direction.South;

// 5. Fonction avec retour "void"
// Cette fonction affiche un message dans la console et ne retourne rien.
// Utilisée pour des effets de bord, comme afficher des logs ou modifier l'état.
function greet(name: string): void {
  console.log(`Salut ${name}`);
}

// 6. Fonction qui retourne "never"
// Cette fonction ne retourne jamais de valeur, elle lance une erreur
// et ne termine pas son exécution normalement.
// Utilisée pour signaler des erreurs ou des situations exceptionnelles.
function throwError(message: string): never {
  throw new Error(message);
}

// 7. unknown vs any
let something: unknown = "Hello";
let anything: any = 42;

// 8. Exemples de "unknown"
let variableUnknown: unknown;

variableUnknown = "Bonjour"; // Peut être une chaîne de caractères
//variableUnknown = 100; // Peut être un nombre
//variableUnknown = true; // Peut être un booléen

if (typeof variableUnknown === "string") {
  console.log(variableUnknown.toUpperCase()); // Fonctionne car on a vérifié le type
} else {
  console.log("Ce n'est pas une chaîne de caractères");

// 8. Inférence de type
let city = "Montréal"; // TypeScript devine string
// city = 100; // ❌ Erreur

// -------------------------------
// Exercices : Complète le code
// -------------------------------

// EX 1 : Crée une variable "temperature" de type number avec la valeur 22
let temperature: number = 22;

// EX 2 : Crée un tableau "colors" qui contient 3 strings
let colors: string[] = ["rouge", "vert", "bleu"];

// EX 3 : Crée une fonction "add" qui prend deux nombres et retourne leur somme
function add(a: number, b: number): number {
  return a + b;
}

// EX 4 : Crée un tuple "car" contenant [marque: string, année: number]
let car: [string, number] = ["Toyota", 2020];

// EX 5 : Déclare un enum "Status" avec les valeurs Pending, InProgress, Done
// et une variable "myStatus" initialisée à Done
enum Status {
  Pending,
  InProgress,
  Done
}
let myStatus: Status = Status.Done;

// EX 6 : Crée un message de type string et retourne void
console.log(`It works !`);
