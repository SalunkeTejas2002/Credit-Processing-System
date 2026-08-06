pipeline {
    agent any

    tools {
        jdk 'JDK21'
        maven 'Maven3'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/SalunkeTejas2002/Credit-Processing-System.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker compose down || true
                    docker compose up -d --build
                '''
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                    echo "Waiting for application..."
                    sleep 20
                    curl http://localhost:8081/actuator/health
                '''
            }
        }
    }

    post {

        success {
            echo "Application deployed successfully."
        }

        failure {
            echo "Deployment Failed."
        }

        always {
            sh 'docker ps'
        }
    }
}