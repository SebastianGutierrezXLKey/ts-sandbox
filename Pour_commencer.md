# 📚 Guide d'installation et d'utilisation - TypeScript Learning

## 1. Objectif
Créer un environnement **TypeScript** propre et séparé du projet professionnel,  
avec **hot-reload** et une structure organisée pour apprendre et tester du code.

---

## 2. Création du projet
```bash
# Créer un dossier pour l'apprentissage
mkdir typescript-learning
cd typescript-learning

# Initialiser le projet Node
npm init -y
```

## 3. Installation des dépendences
```bash
# Dépendances pour TypeScript
npm install typescript ts-node @types/node --save-dev

# Hot-reload
npm install ts-node-dev --save-dev
```
Quand je veux que npm soit une outil générale, je fois faire
```bash
npm install -g ts-node typescript
```
 
### Faut-il installer TypeScript via le gestionnaire de paquets système ?

Il n'est généralement **pas nécessaire** d'installer TypeScript avec :
```bash
sudo apt install node-typescript
tsc -v
```
Cette méthode installe une version globale, qui peut être différente de celle utilisée dans ton projet.  
Il est recommandé d'utiliser `npm install typescript` (localement ou globalement avec `-g`) pour garantir la cohérence des versions et faciliter la gestion des dépendances.

**En résumé :**  
Privilégie l'installation via `npm` pour éviter les conflits et profiter des mises à jour du projet.

## 4. Configuration TypeScript
```bash
npx tsc --init
```

Dans `tsconfig.json` (remplacer le contenu par) :
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```


## 5. Structure de dossier
```bash
typescript-learning/
│
├── src/
│   ├── playground/         
│   │   └── basic_types_exercises.ts    # Tests rapides et concepts
│   └── index.ts                        # Point d'entrée principal
│
├── package.json
├── tsconfig.json
└── Pour_commencer.md
```
## 6. Script `dev` avec hot-reload
Dans `package.json` :
```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
}
```
## 7. Lancer le projet
```bash
npm run dev
```
💡 Hot-reload : dès que tu sauvegardes un fichier `.ts`, la console se met à jour automatiquement.

## 8. Exécuter un fichier précis

# Option 1
— Modifier le script `dev` dans `package.json` :
```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/playground/basic_types_exercises.ts"
}
```

# Option 2
— Utiliser `npx` :
```bash
npx ts-node src/playground/basic_types_exercises.ts
```
```bash
npx tsc src/playground/basic_types_exercises.ts --outDir dist
node dist/basic_types_exercises.ts
```
