pipeline {
    agent any

    tools {
        nodejs "node20"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Vishvajeet011/ecommerce-cypress-automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Archive Test Artifacts') {
            steps {
                archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
                archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo "Pipeline execution completed."
        }
    }
}
