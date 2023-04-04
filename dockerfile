FROM cypress/browsers:node14.7.0-chrome84

WORKDIR /
COPY . .

RUN npm install 