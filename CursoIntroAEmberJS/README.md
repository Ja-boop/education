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

mis-apps> cd MiApp

mis-apps/MiApp> ember serve

Livereload server on http://localhost:7020
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
