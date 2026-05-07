# Stage 1: Build React app
FROM node:24-alpine as build
WORKDIR /app
ARG REACT_APP_DESCOPE_PROJECT_ID
ENV REACT_APP_DESCOPE_PROJECT_ID=$REACT_APP_DESCOPE_PROJECT_ID

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]