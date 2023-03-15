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
      steps {
        publishHTML (target : [allowMissing: false,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'cypress/results/',
        reportFiles: 'mochawesome.html',
        reportName: 'My Reports',
        reportTitles: 'The Report'])
      }
    }
  }
}