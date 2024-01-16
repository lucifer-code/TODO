FROM node:21-alpine
COPY ./backend/ ./
RUN npm install

CMD ["npm","i"]

CMD ["npm", "start"]