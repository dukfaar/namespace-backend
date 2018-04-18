pipeline {
  parameters {
    string(defaultValue: 'https://registry.npmjs.org/', description: '', name: 'npmRegistry')
  }
  agent {
    dockerfile {
      filename 'Dockerfile.pipeline'
    }
  }
  stages {
    stage('Install') { 
      steps {
        sh 'npm install --registry ${npmRegistry}'
      }
    }

    stage('Test') { 
      steps {
        sh 'npm test' 
      }
    }

    stage('Build') { 
      steps {
        sh 'npm run build' 
      }
    }      

    stage('Build Docker Image') { 
      steps {
        script {
          docker.build('dukfaar/namespace-backend')
        }
      }
    }      
  }
}
