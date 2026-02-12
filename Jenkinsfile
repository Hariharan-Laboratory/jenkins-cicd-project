pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Hariharan-Laboratory/jenkins-cicd-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jenkins-demo .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f jenkins-demo-container || true'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3001:3000 --name jenkins-demo-container jenkins-demo'
            }
        }
    }
}
