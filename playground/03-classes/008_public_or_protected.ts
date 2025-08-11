// ===============================
// PUBLIC/PRIVATE AND PROTECTED PRACTICE - TS
// ===============================

// Private, public, protected
//  - private: accessible uniquement dans la classe
//  - public: accessible partout (par défaut)
//  - protected: accessible dans la classe et les sous-

// 1. Exemple dans une classe
class Fruit {
    // Propriété privée
    private name: string; // Seulement dans la classe
    // Propriété protégée
    protected color: string; // 
    // Propriété publique
    public taste: string; // Accesible partout

    constructor(name: string, color: string, taste: string) {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }

    // Méthode pour afficher les détails du fruit
    public getDetails(): string {
        return `Fruit: ${this.name}, Color: ${this.color}, Taste: ${this.taste}`;
    }
    // Utilisation d'une methode protected
    protected getFruitColor(): string {
        return this.color
    }
}
// Utilisation
let Papaya = new Fruit("Papaya","Verte","Mauvais")
console.log(Papaya.getDetails())

// 2. Exemple d'héritage avec protected 
class Citrus extends Fruit { 
    // Propriété spécifique à Citrus
    public acidity: number;
    // Constructeur pour initialiser les propriétés de Citrus
    // Il appelle le constructeur de la classe parent (Fruit) avec super()
    // super() permet d'accéder aux propriétés et méthodes de la classe parent
    // Ici, on initialise la propriété acidity en plus des propriétés de Fruit
    // On utilise super pour appeler le constructeur de la classe parent
    // Cela permet de réutiliser le code du constructeur de la classe parent
    // et d'initialiser les propriétés de la classe parent
    constructor(name: string, color: string, taste: string, acidity: number) {
        super(name, color, taste);
        this.acidity = acidity;
    }

    // Méthode pour afficher la couleur du fruit
    public showColor(): string {
        // Accès à la propriété protégée de la classe parent
        return `La couleur du fruit est ${this.getFruitColor()}`;
    }

    public getAcidity(): string {
        return `L'acidité du fruit est ${this.acidity}`;
    }
}

// Utilisation de la classe Citrus
let lemon = new Citrus("Citron", "Jaune", "Acide", 3);
console.log(lemon.getDetails()); // Accès à la méthode publique de la classe parent
console.log(lemon.showColor()); // Accès à la méthode publique de la classe Citrus
console.log(lemon.getAcidity()); // Accès à la méthode publique de la classe Citrus