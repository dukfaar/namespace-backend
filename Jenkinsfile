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
      }
    }

    stage('Test') { 
      steps {
        sh 'npm test' 
      }
    }

    stage('Build') { 
      steps {
	sh 'ls node_modules'
	sh 'ls node_modules/backend-utilities'
	cat 'ls node_modules/backend-utilities/package.json'
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
