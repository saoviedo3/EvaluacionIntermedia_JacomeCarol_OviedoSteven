# Aplicación de asignacion de evaluaciones

## Tomado y modificado del codigo original de "statick88":

![App en Funcionamiento](https://github.com/statick88/AdopcionMascotas/blob/main/img/image.png)

Esta aplicación te permite gestionar un sistema de asignacion de evaluaciones. Puedes agregar nuevas evaluaciones, agregar nuevos estudiantes y realizar asignaciones. 

La aplicación sigue un diseño de arquitectura de 3 capas, que es un patrón comúnmente utilizado en el desarrollo web. Este diseño divide la aplicación en tres partes:

1. **Capa de Presentación (Interfaz de usuario):** Esta es la capa que los usuarios ven e interactúan. En nuestra aplicación, esta capa está implementada con React. Los componentes de React se utilizan para crear la interfaz de usuario, que incluye formularios para agregar nuevos estudiantes y evaluaciones, y una lista de asignaciones.

2. **Capa de Lógica de Negocio (Procesamiento de Datos):** Esta capa maneja la lógica de la aplicación, como agregar nuevos estudiantes y evaluciones, y realizar asignaciones. En nuestra aplicación, esta lógica se maneja en el frontend con React y en el backend con Express.

3. **Capa de Acceso a Datos (Interacción con la Base de Datos):** Esta capa se encarga de interactuar con la base de datos para almacenar y recuperar datos. En nuestra aplicación, esta interacción se simula con archivos JSON.

Cada capa tiene una responsabilidad específica, lo que hace que la aplicación sea más fácil de mantener y escalar. Además, al separar la lógica de la aplicación en diferentes capas, cada capa puede desarrollarse y probarse de forma independiente.

## Requisitos Previos

Para ejecutar esta aplicación, necesitarás tener instalado lo siguiente en tu sistema:

1. **Node.js:** Node.js es un entorno de ejecución para JavaScript construido en el motor de JavaScript V8 de Chrome. Se utiliza para construir aplicaciones de red rápidas y escalables. Puedes descargarlo desde [la página oficial de Node.js](https://nodejs.org/).

2. **npm (Node Package Manager):** npm es el sistema de gestión de paquetes por defecto para Node.js. Se instala junto con Node.js, por lo que si ya tienes Node.js instalado, probablemente ya tengas npm.

3. **Git:** Git es un sistema de control de versiones distribuido gratuito y de código abierto diseñado para manejar todo, desde proyectos pequeños hasta muy grandes, con velocidad y eficiencia. Puedes descargarlo desde [la página oficial de Git](https://git-scm.com/).

Una vez que hayas instalado estos requisitos previos, puedes clonar el repositorio y ejecutar `npm install` para instalar todas las dependencias necesarias para la aplicación.

## Estructura del Proyecto

El proyecto sigue la estructura de una aplicación de 3 capas:

``` markdown
adopcion-mascotas/
|-- frontend/
|   |-- node_modules/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |   |-- AddAdopterForm.jsx
|   |   |   |-- AddDogForm.jsx
|   |   |   |-- AdoptionForm.jsx
|   |   |   |-- AdoptionList.jsx
|   |   |   |-- AvailableList.jsx
|   |   |-- App.jsx
|   |   |-- index.js
|   |-- package.json
|-- backend/
|   |-- node_modules/
|   |-- routes/
|   |-- database/
|   |-- server.js
|   |-- package.json
|-- README.md
```

- **frontend/**: Esta carpeta contiene todos los archivos relacionados con la interfaz de usuario de la aplicación, incluyendo los componentes de React y el punto de entrada de la aplicación (`index.js`).

- **backend/**: Esta carpeta contiene todos los archivos relacionados con el servidor de la aplicación, incluyendo las rutas, la interacción con la base de datos y el archivo del servidor (`server.js`).

- **database/**: Esta carpeta contiene los archivos que simulan la base de datos de la aplicación. Aquí se almacenan los datos de los perros, adoptantes y adopciones en archivos JSON. Esta capa se encarga de interactuar con estos archivos para almacenar y recuperar datos, simulando la interacción con una base de datos real.

## Implementación Paso a Paso

### 1. Clona el Repositorio

Primero, necesitas clonar el repositorio en tu máquina local. Puedes hacerlo con el siguiente comando:

```bash
git clone https://github.com/statick88/adopcion-mascotas.git
cd adopcion-mascotas
```

### 2. Instala las Dependencias

Una vez que hayas clonado el repositorio, necesitas instalar las dependencias necesarias para la aplicación. Esto se puede hacer con el comando `npm install` en ambas carpetas, `frontend` y `backend`:

```bash
cd frontend
npm install
cd ../backend
npm install
```

### 3. Ejecuta la Aplicación

Finalmente, puedes ejecutar la aplicación. Necesitarás ejecutar el servidor backend y la aplicación frontend en terminales separados:

```bash
# Terminal 1
cd backend
npm start

# Terminal 2
cd frontend
npm run dev
```

Ahora, deberías poder ver la aplicación en tu navegador en `http://localhost:3000`.

## Conclusión

¡Felicidades! Ahora tienes una aplicación de adopción de mascotas en funcionamiento. Este proyecto es un excelente punto de partida para aprender más sobre `React`, `Express` y la `arquitectura de 3 capas`. No dudes en explorar el código y experimentar con él. 

## Tomado y modificado del codigo original en:

![App en Funcionamiento](https://github.com/statick88/AdopcionMascotas/blob/main/img/image.png)
