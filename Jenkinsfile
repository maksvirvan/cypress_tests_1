pipeline {
  agent any
  stages {
    stage('Build Docker Image') {
      steps {
        bat 'docker build -t my-cy-image .'
      }
    }
    stage('Docker Run'){
      steps {
        bat 'docker run -v "%cd%":/app -t my-cy-image'
      }
    }
  }
}