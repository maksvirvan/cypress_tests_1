FROM cypress/included:10.1.0

WORKDIR /app
COPY . /app

RUN npm install

CMD [ "npx", "cypress", "run" ]
#CMD [ "npm", "run", "%script%" ]