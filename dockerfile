FROM cypress/browsers:node14.7.0-chrome84

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install 