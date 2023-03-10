FROM cypress/browsers:node14.16.0-chrome89-ff86

WORKDIR /app
COPY . /app

# RUN npm install

# CMD [ "npx", "cypress", "run" ]