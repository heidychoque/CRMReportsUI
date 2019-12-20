import axios from 'axios'
import '@/interceptor.js'


  export default {

    getRequest(url){

    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => { 
          resolve(response) 
        })
        .catch(error =>
          {reject(error) 
        })
    })
    
  }

}