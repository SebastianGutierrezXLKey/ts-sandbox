// ===============================
// ADDITIONAL DATA COLLECTION PRACTICE - TS
// ===============================

// 1. Liste de chaînes de caractères
let allNames: string[] = ["Sebastian","Alice", "Bob", "Charlie","Marc"];
console.log("Noms: ", allNames)

let allAges: number[] = [33, 25, 30, 28, 40];
console.log("Âges: ", allAges)

let allMix: any[] = ["Sebastian", 33, true, "Alice", 25, false];
console.log("Mix: ", allMix)



// 2. Collecte de données utilisateur (Type interface)
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

// Utilise le type User pour le retour de la fonction
function collectUserData(name: string, age: number, isActive: boolean): User {
  return { name, age, isActive };
}

// Tableau pour stocker les utilisateurs
let users: User[] = [];

// Exemple d'ajout d'utilisateurs
users.push(collectUserData("Sebastian", 33, true));
users.push(collectUserData("Bob", 30, false));

// Afficher les utilisateurs
console.log("Utilisateurs:", users);

// 3. Tuple pour stocker des données (Pas modifiable après création)
let userTuple: [string, number, boolean][] = [];
userTuple.push(["Alice", 25, true]);
//console.log("Tuple Utilisateur:", userTuple);

// 4. Cycle for pour parcourir les utilisateurs (dans une tuple)
userTuple.forEach((user) => {
    console.log("User ", user);

    let name: string = user[0];
    let age: number = user[1];
    let isActive: boolean = user[2];    

    console.log(`Nom: ${name}`);
    console.log(`Âge: ${age}`);
    console.log(`Status Dev: ${isActive}`);

})

// 5. Enum pour les rôles d'utilisateur
enum JoursDeLaSemaine {
  Lundi = "Lundi",
  Mardi = "Mardi",
  Mercredi = "Mercredi",
  Jeudi = "Jeudi",
  Vendredi = "Vendredi",
  Samedi = "Samedi",
  Dimanche = "Dimanche"
}

let today: JoursDeLaSemaine = JoursDeLaSemaine.Mardi;
console.log("Aujourd'hui est :", today);

