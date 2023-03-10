pipeline {
    agent any
    stages {
        stage("verify tooling") {
            steps {
                sh 'docker build -t my-cy-image .'
                
                // bat '''
                //     docker info
                //     docker version
                //     docker compose version
                // '''
            }
        }
    }
}