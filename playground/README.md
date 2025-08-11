# 🎯 TypeScript Learning - Structure des Exercices

## 📁 Organisation par Thèmes

### **01-types/** - Types de Base
- `001_basic_types_excercises.ts` - Types primitifs et de base
- `002_additional_types_practice.ts` - Types avancés et unions
- `003_data_collection.ts` - Collections de données (arrays, tuples)

### **02-interfaces/** - Interfaces et Méthodes
- `004_methods.ts` - Méthodes et fonctions
- `005_interface_excercises.ts` - Définition et utilisation d'interfaces

### **03-classes/** - Classes et POO
- `006_classes.ts` - Création de classes basiques
- `007_implementation_classes.ts` - Implémentation d'interfaces
- `008_public_or_protected.ts` - Modificateurs d'accès

### **04-generics/** - Génériques
- `009_generics.ts` - Types génériques et réutilisables

## 🚀 Comment Tester les Exercices

### **Exécution Rapide (sans hot-reload)**
```bash
# Types de base
npm run types                    # 001_basic_types_excercises.ts
npm run types-advanced          # 002_additional_types_practice.ts
npm run data-collection         # 003_data_collection.ts

# Interfaces
npm run interfaces              # 004_methods.ts
npm run interfaces-advanced     # 005_interface_excercises.ts

# Classes
npm run classes                 # 006_classes.ts
npm run classes-impl            # 007_implementation_classes.ts
npm run classes-access          # 008_public_or_protected.ts

# Génériques
npm run generics                # 009_generics.ts
```

### **Développement avec Hot-Reload**
```bash
# Par thème (recharge automatique)
npm run dev-types              # Types avec hot-reload
npm run dev-interfaces         # Interfaces avec hot-reload
npm run dev-classes            # Classes avec hot-reload
npm run dev-generics           # Génériques avec hot-reload

# Exercice spécifique avec hot-reload
npm run dev                    # 001_basic_types_excercises.ts
```

### **Compilation TypeScript**
```bash
npm run build                  # Compilation unique
npm run build:watch            # Compilation en continu
```

## 🌟 **Autres Projets TypeScript**

### **DOM/** - Manipulation du DOM
- **Objectif** : Apprendre à manipuler le DOM avec TypeScript
- **Compilation** : `npm run build:dom`
- **Développement** : `npm run dev:dom`

### **Web/** - Applications Web
- **Objectif** : Créer des applications web avec TypeScript
- **Compilation** : `npm run build:web`
- **Développement** : `npm run dev:web`

### **React/** - React + TypeScript
- **Objectif** : Développer avec React et TypeScript
- **Développement** : `npm run dev:react`
- **Construction** : `npm run build:react`

## 💡 Conseils d'Utilisation

1. **Commencez par les types** : `npm run types`
2. **Passez aux interfaces** : `npm run interfaces`
3. **Explorez les classes** : `npm run classes`
4. **Découvrez les génériques** : `npm run generics`
5. **Pratiquez le DOM** : `npm run build:dom`
6. **Créez des apps web** : `npm run build:web`
7. **Développez avec React** : `npm run dev:react`

## 🔧 Personnalisation

Pour tester un exercice spécifique, modifiez le script `dev` dans `package.json` :
```json
"dev": "ts-node-dev --respawn --transpile-only playground/chemin/vers/votre/exercice.ts"
```

## 📚 Progression Recommandée

1. **Types de base** → Comprendre les fondamentaux
2. **Interfaces** → Structurer les données
3. **Classes** → Programmation orientée objet
4. **Génériques** → Code réutilisable et flexible
5. **DOM** → Manipulation du navigateur
6. **Web** → Applications web complètes
7. **React** → Frameworks modernes

---

*Bonne exploration TypeScript ! 🎉* 