node {
    scm checkout
    
    docker.image('node:alpine').inside {
        sh 'apk add --update git'
        sh 'npm set registry https://npm-registry.dukfaar.com'
        
        stage('Install') {
            sh 'npm install'
        }
        
        stage('Test') {
            sh 'npm test'
        }
        
        stage('Build') {
            sh 'npm run build'
        }
    }
    
    stage('Docker Build') {
        docker.build('dukfaar/namespace-backend')
    }
}
