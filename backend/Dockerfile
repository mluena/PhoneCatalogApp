FROM node

COPY ./package.json .
RUN npm install
COPY ./server.js .
RUN ls -l
CMD node server.js