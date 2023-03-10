pipeline {
  agent {
    docker {
      image 'docker:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }
  stages {
    stage('Build Docker Image') {
      steps {
        bat 'cd C:\\cy\\roz_cy_tests && docker build -t my-cy-image .'
      }
    }
  }
}