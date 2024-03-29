FROM node:lts-alpine AS build

WORKDIR /app

COPY . /app/

RUN npm install && npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

