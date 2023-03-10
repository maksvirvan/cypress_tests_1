pipeline {
    agent any
    stages {
        stage("verify tooling") {
            env.PATH = env.PATH + "C:/Windows/System32"
            steps {
                bat '''
                    docker info
                    docker version
                    docker compose version
                '''
            }
        }
    }
}