FROM node:17-alpine
WORKDIR /backend
COPY package.json package-lock.json ./
RUN npm install nodemon && npm install 
COPY src ./src
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
