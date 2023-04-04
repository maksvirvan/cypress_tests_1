FROM cypress/browsers:node14.7.0-chrome84

WORKDIR /app
COPY . .

RUN npm install 

