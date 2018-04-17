pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.pipeline'
    }
  }
  stages {
    stage('All') { 
      steps {
        sh 'npm install' 
        sh 'npm test' 
        sh 'npm run build' 
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
