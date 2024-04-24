FROM node:latest AS build
WORKDIR /foryou-frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g env-cmd
RUN env-cmd -f .env.test npm run build
FROM nginx:latest
COPY --from=build /foryou-frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]