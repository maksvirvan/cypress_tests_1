pipeline {
    agent any
    stages {
        stage("verify tooling") {
            steps {
                bat 'docker build -t my-cy-image .'
                
                // bat '''
                //     docker info
                //     docker version
                //     docker compose version
                // '''
            }
        }
    }
}