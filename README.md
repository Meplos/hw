# Test technique hello world

## Pré-requis
```
node v22.6.0
npm v10.8.0

```

## Lancement du projet
```
$ chmod +x ./start.sh
$ ./start.sh

================= lancement des tests ================
cd ./app/ && npm run test
cd ./server/ && npm run test
```
L'application est disponible à l'adresse: http://localhost:3000/public


## Technologies utilisé

Pour la partie frontend (./app)
- vite
- React (18) / Typescript
- tailwindcss
- vitest

Pour la partie backend (./server/)
- Koa (et tout l'écosysteme koa-mount, koa-router, koa-cors etc...)
- Typescript
- jest-ts

## Documentation
Il y a pas ou peu de documentation dans le code car pour moi le code vise a s'auto-documenter par le naming et les tests. Si certaines chose ne sont pas claire, n'hésitez pas a me contacter pour qu'on en discute.

## Et après? 
On peut imaginer plusieurs amélioration sur se logiciel: 
- A commencer par le design qui reste très basique
- La gestion de la pagination en permettant de choisir le nombre d'items ou se rendre a une page particulière
- On pourait gérer l'internaltionalization
- Rafraichir automatiquement le token de jobi-joba quand celui-ci expire
