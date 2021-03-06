# Pre-requisitos / Node JS

## Windows
Bajar y correr .msi de https://nodejs.org/en/download/

## Ubuntu
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt-get install -y nodejs

## Debian, como root
curl -sL https://deb.nodesource.com/setup_12.x | bash -

apt-get install -y nodejs

## otros
https://nodejs.org/es/download/package-manager

# Pre-requisitos / EmberJS client

## Windows
consola> npm install -g ember-cli

## Linux
consola> sudo npm install -g ember-cli

# Crear una aplicacion EmberJS

mis-apps> ember new MiApp

      Si les da error, prueben des-instalar nodejs y npm y re-instalarlo siguiendo las indicaciones de arriba

mis-apps> cd MiApp

mis-apps/MiApp> ember serve

   Serving on http://localhost:4200/

# Modificar el template de la aplicacion

Editar mis-apps/MiApp/app/templates/application.hbs

https://github.com/PiraSoftware/education/commit/0e89fd5e1a2b3aae16bbf159c76ac3c7625456f7

# Agregar un route

mis-apps/MiApp> ember generate route programadores

Editar mis-apps/MiApp/app/templates/programadores.hbs

ir a http://localhost:4200/programadores

https://github.com/PiraSoftware/education/commit/cc004a11f44b83e942bd5cd0e611573fce1aace3

# Agregar modelo de datos al route

Editar mis-apps/MiApp/app/routes/programadores.js
Editar mis-apps/MiApp/app/templates/programadores.hbs

https://github.com/PiraSoftware/education/commit/7414c10b69fe66c0b09a59ab570665394f6e5b33

# Agregar un componente

mis-apps/MiApp> ember generate component lista

Editar mis-apps/MiApp/app/templates/components/lista.hbs
Editar mis-apps/MiApp/app/templates/programadores.hbs

https://github.com/PiraSoftware/education/commit/7642aecb7a19f5fbc16f3a5f93c77671eb41e62e

# Agregar cuerpo a un componente

Editar mis-apps/MiApp/app/templates/components/lista.hbs
Editar mis-apps/MiApp/app/templates/programadores.hbs

https://github.com/PiraSoftware/education/commit/373b70ac2b63691da7c2794b6d0029de017fecfc

# Agregar acciones a un componente

Editar mis-apps/MiApp/app/components/lista.js
Editar mis-apps/MiApp/app/templates/components/lista.hbs

https://github.com/PiraSoftware/education/commit/77729fd37161d104d246c0f2c64305ea42c8f130

# Agregar controladores

mis-apps/MiApp> ember generate controller programadores

Editar mis-apps/MiApp/app/controllers/programadores.js
Editar mis-apps/MiApp/app/templates/programadores.hbs

ir a http://localhost:4200/programadores?pais=Argentina

https://github.com/PiraSoftware/education/commit/55cde54b4c642a6aef59395a3c4be9b13f00d9a1

# Agregar un servicio

mis-apps/MiApp> ember generate service programadores

Editar mis-apps/MiApp/app/services/programadores.js

https://github.com/PiraSoftware/education/commit/c0862832ca6a4945d65be1c23a2de354295bdb1e

# Agregar estilos CSS a la aplicacion

Editar mis-apps/MiApp/app/styles/app.css

https://github.com/PiraSoftware/education/commit/093a2e6c0082adc71b553d225740cdee6909bb34

# Actualizando el modelo de datos mediante acciones

Editar mis-apps/MiApp/app/services/programadores.js (agregar método al servicio)

Editar mis-apps/MiApp/app/controllers/programadores.js (agregar acción conectada el servicio)

Editar mis-apps/MiApp/app/templates/programadores.hbs (mapear la acción al componente)

Editar mis-apps/MiApp/app/components/lista.js (crear acción que llama a la acción mapeada)

Editar mis-apps/MiApp/app/templates/components/lista.hbs (conectar la acción del componente)

https://github.com/PiraSoftware/education/commit/3b6a5f7d3c51d99562021ac5f7b8931d9411b2e3

# Crear un falso backend de prueba y conectar el modelo

https://github.com/PiraSoftware/education/commit/3a6462fc9cc068a0470c167fced6b3d871ba5281

## generar mock del backend para programadores

mis-apps/MiApp> ember generate http-mock programadors
mis-apps/MiApp> npm install --save-dev body-parser

Editar mis-apps/MiApp/server/mocks/programadors.js

## conectar al backend

mis-apps/MiApp> ember g adapter application

Editar mis-apps/MiApp/app/adapters/application.js

## crear el modelo de datos para programadores

mis-apps/MiApp> ember g model programador

Editar mis-apps/MiApp/app/model/programador.js

## interactuar con los datos usando el controlador

Editar mis-apps/MiApp/app/routes/programadores.js
Editar mis-apps/MiApp/app/controllers/programadores.js

## arrancar el backend

El backend arranca automaticamente cuando se arranca servidor de ember con:

mis-apps/MiApp> ember serve
