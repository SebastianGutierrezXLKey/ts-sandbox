// ===============================
// INTERFACE PRACTICE - TS
// ===============================

// 1. Définition d'une interface pour les utilisateurs
// Cette interface définit les propriétés d'un utilisateur
// C'est comme si on créait une classe, mais sans implémentation
interface User {
    name: string;
    age: number;
    isDev: boolean;
}

// 2. Fonction pour créer un utilisateur
let user1 : User = {
    name: "Sebastian",
    age: 33,
    isDev: true
};

console.log("Utilisateur 1:", user1);

// 3 Array d'utilisateurs
let users: User[] = [];
users.push(user1);
users.push({
    name: "Alice",
    age: 25,
    isDev: false
});
users.push({
    name: "Bob",
    age: 30,
    isDev: true
});

console.log("Liste des utilisateurs:", users);

// 4. Interface avec méthode
// Une interface peut aussi définir des méthodes
interface UserWithMethod {
    name: string;
    age: number;
    isDev: boolean;
    greet(): string; // Méthode pour saluer
} 
// Implémentation de l'interface avec une méthode
let user2: UserWithMethod = {
    name: "Charlie",
    age: 28,
    isDev: true,
    greet: function() {
        return `Bonjour, je suis ${this.name} et j'ai ${this.age} ans.`;
    }
};  
console.log("Utilisateur 2:", user2);
console.log(user2.greet()); 

// Avantages des interfaces:
// - Elles permettent de définir des contrats pour les objets.
// - Elles aident à structurer le code et à le rendre plus lisible.
// - Elles facilitent la maintenance et l'évolution du code.

// 5. Interface avec propriétés optionnelles
interface Adress {
    street: string;
    city: string;
    country?: string;
}
// Exemple d'utilisation de l'interface Adress
let address1: Adress = {
    street: "123 Main St",
    city: "St-Hyacinthe",
    country: "Canada" // Le pays est optionnel
};
console.log("Adresse 1:", address1);

// Deuxieme exemple sans le pays
let address2: Adress = {
    street: "456 Elm St",
    city: "Québec"
};
console.log("Adresse 2:", address2);

// 6. Proprietes readonly (Propriétés en lecture seule)
interface ReadonlyUser {
    readonly id: number; // Propriété en lecture seule
    readonly name: string;
    readonly age: number;
    isDev: boolean;
}
// Exemple d'utilisation de l'interface ReadonlyUser
let user3: ReadonlyUser = {
    id: 1,
    name: "Marc",
    age: 40,
    isDev: false
};
console.log("Utilisateur 3:", user3);

// user3.id = 2; // Erreur: id est en lecture seule
// user3.name = "Marc Dupont"; // Erreur: name est en lecture seule
// user3.age = 41; // Erreur: age est en lecture seule
user3.isDev = true; // OK: isDev peut être modifié
console.log("Utilisateur 3 après modification:", user3);

// 7. Interface avec extends (héritage)
interface AdminUser extends User {
    readonly adminLevel: number; // Propriété spécifique aux administrateurs
}
// Exemple d'utilisation de l'interface AdminUser
let adminUser: AdminUser = {
    name: "Tony Boss",
    age: 35,
    isDev: true,
    adminLevel: 1 // Niveau d'administration
};
console.log("Administrateur:", adminUser);

// 8. Interface avec index signature
interface StringArray {
    [index: number]: string; // Permet d'accéder aux éléments par index
}
// Exemple d'utilisation de l'interface StringArray
let stringArray: StringArray = ["Alice", "Bob", "Charlie"];
console.log("Tableau de chaînes:", stringArray);
console.log("Premier élément:", stringArray[0]); // Accès par index
