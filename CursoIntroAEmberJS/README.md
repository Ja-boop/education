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

# Agregar un route

mis-apps/MiApp> ember generate route programadores

Editar mis-apps/MiApp/app/templates/programadores.hbs

ir a http://localhost:4200/programadores

# Agregar modelo de datos al route

Editar mis-apps/MiApp/app/routes/programadores.js
Editar mis-apps/MiApp/app/templates/programadores.hbs

# Agregar un componente

mis-apps/MiApp> ember generate component lista

Editar mis-apps/MiApp/app/templates/components/lista.hbs
Editar mis-apps/MiApp/app/templates/programadores.hbs

# Agregar cuerpo a un componente

Editar mis-apps/MiApp/app/templates/components/lista.hbs
Editar mis-apps/MiApp/app/templates/programadores.hbs

# Agregar acciones a un componente

Editar mis-apps/MiApp/app/components/lista.js
Editar mis-apps/MiApp/app/templates/components/lista.hbs
