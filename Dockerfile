FROM nginx:alpine 
RUN rm -rf /usr/share/nginx/html/*  
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM node:18-alpine AS builder
COPY package.json package-lock.json ./
RUN npm ci
WORKDIR /app
COPY . . 
RUN npm run build 
CMD ["npm", "run", "start"]