pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.pipeline'
    }
  }
  stages {
    stage('Install') { 
      steps {
        sh 'npm install --registry https://npm-registry.dukfaar.com'
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
