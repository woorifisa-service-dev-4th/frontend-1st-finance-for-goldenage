FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tailwind.config.js ./tailwind.config.js
COPY public/src/input.css ./public/src/input.css
RUN npx tailwindcss -i ./public/src/input.css -o ./public/src/output.css --minify

COPY . .

EXPOSE 3000

CMD ["npm", "start"]