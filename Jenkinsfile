pipeline {
  agent {
      dockerfile {
        filename 'Dockerfile.pipeline'
      }
  }
  stages {
    stage('Install') { 
      steps {
        sh 'npm install' 
        sh 'ls node_modules'
      }
    }

    stage('Test') { 
      steps {
        sh 'ls node_modules'
        sh 'npm test' 
      }
    }

    stage('Build') { 
      steps {
        sh 'ls node_modules'
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
