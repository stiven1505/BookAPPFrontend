# Dockerfile para el frontend
FROM node:20.18.0

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del package.json y package-lock.json
COPY package.json package-lock.json ./

# Elimina node_modules y package-lock.json antes de instalar
RUN npm i

# Copia el resto de la aplicación
COPY . .

# Comando para ejecutar el servidor
CMD ["npm", "run", "dev", "--", "--host"]

