FROM node:lts-alpine

WORKDIR /app

# Copiamos dependencias
COPY package*.json ./
RUN npm install

# Copiamos el código fuente
COPY . .

# Construimos el sitio (genera carpeta /dist)
RUN npm run build

# Exponemos el puerto por defecto de Astro (4321)
EXPOSE 4321

# Usamos 'preview' para servir la carpeta dist
# --host es VITAL para que Docker escuche fuera de localhost
CMD ["npm", "run", "preview", "--", "--host"]