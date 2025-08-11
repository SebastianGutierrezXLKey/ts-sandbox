// ===============================
// CLASSES PRACTICE - TS
// ===============================

// Structure d'une classe :
// > Classe
// > Constructeur
// > Méthode(s)

// le mots reservé export la rend accesible aux autres fichiers
export class User {
    name: string;
    age: number;
    isDev: boolean;

    // Constructeur pour initialiser les propriétés de la classe
    // Le constructeur est une méthode spéciale qui est appelée lors de la création d'une instance de la classe
    // Il prend des paramètres pour initialiser les propriétés de l'utilisateur
    // Ici, on initialise les propriétés name, age et isDev avec les valeurs passées
    // Le mot-clé this fait référence à l'instance actuelle de la classe
    // Par exemple, si on crée un nouvel utilisateur avec new   
    constructor(name: string, age: number, isDev: boolean) {
        this.name = name;
        this.age = age;
        this.isDev = isDev;
    }

    // Méthode pour saluer et présenter l'utilisateur
    greet(): string {
        return `Bonjour, je suis ${this.name} et j'ai ${this.age} ans.`;
    }
}

// Exemple d'utilisation de la classe User
// Ceci est juste un test, l'implémentation peut être séparée
//let person = new User("Sebastian", 33, true);
//console.log(person.greet());
