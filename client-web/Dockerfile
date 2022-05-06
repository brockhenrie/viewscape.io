FROM node:16-alpine as builder
WORKDIR /app
USER client-web
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000 80 443
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/app/ /usr/share/nginx/html
##check dist folder for path after build
