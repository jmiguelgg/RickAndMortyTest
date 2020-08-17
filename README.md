# Proyecto prueba de Rick and Morty

Este proyecto esta hecho utilizando las tecnologías de React como framework de desarrollo. Se utilizó React, react-router-dom, tailwindcss, postcss y apollo para comunicarse con el API.

Dentro de este proyecto existen dos ramas, la master que contiene el código con cnsultas al API cn GraphQL, su rama correspondiente con el códig de GraphQL y la rama que contiene el código que hace consultas con API REST.

Actualmente el proyect se encuentra corriend con la rama master en el sitio [`Rick and Morty`](https://rick-and-morty-test.vercel.app/)

La estructura del proyecto es la siguiente:

````
├── README.md
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── iconRickAndMorty.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── card.jsx
│   │   ├── error.jsx
│   │   ├── layout.jsx
│   │   ├── loading.jsx
│   │   ├── navBar.jsx
│   │   └── pageCards.jsx
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── NotFound.jsx
│   │   ├── about.jsx
│   │   ├── character.jsx
│   │   └── home.jsx
│   ├── serviceWorker.js
│   └── styles
│       └── index.css
├── tailwind.config.js
└── yarn.lock
````

Para correr el proyecto, es necesario instalar las dependencias con el siguiente comando:
````
$ npm install
````

Posteriormente se puede compilar el proyecto para generar los archivos de deploy o se puede correr como desarrollador:

Desarrollador debuging:
````
$ npm start
````

Generar el build del proyecto
````
$ npm build
````
Este comando genera una carpeta en la raíz del proyecto llamada dist donde se encontrarán los archivos para ser deployados en un servidor.