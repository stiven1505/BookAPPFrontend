# React + Vite

Este proyecto es el frontend de la aplicación. Utiliza **React** con **Vite** como herramienta de desarrollo y construcción.

## Estructura de la carpeta

client/ │ ├── public/ # Archivos públicos que no pasan por el proceso de bundling ├── src/ # Código fuente de la aplicación ├── package.json # Dependencias y scripts ├── vite.config.js # Configuración de Vite └── Dockerfile # Dockerfile para producción

## Configuración del entorno

### Variables de entorno

Asegúrate de crear un archivo `.env` en el directorio raíz del proyecto con las variables necesarias, por ejemplo:

```bash
VITE_API_URL=http://localhost:8000/api

1 Iniciar en modo desarrollo
git clone https://github.com/tu-usuario/nombre-repositorio.git
cd client

2 Instala las dependencias del proyecto:
npm install

3.Inicia el servidor de desarrollo:
npm run dev

4Accede a la aplicación en http://localhost:5173/.

Ejecutar en Docker (Producción)
1.Construye la imagen Docker:
docker build -t nombre-frontend .

2.Ejecuta el contenedor:
docker run -p 80:80 nombre-frontend

La aplicación estará disponible en http://localhost.
