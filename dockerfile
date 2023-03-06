FROM cypress/browsers:node14.16.0-chrome89-ff86

# RUN mkdir /app
# WORKDIR /app

# COPY . .
# COPY ./package.json .
# COPY ./cypress.config.js .
# COPY ./cypress ./cypress 

# RUN npm install

# ENTRYPOINT [ "npx", "cypress", "run" ]
# CMD [""]

WORKDIR /app
COPY . /app
RUN npm install
CMD ["npx", "cypress", "run"]