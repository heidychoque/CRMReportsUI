import axios from 'axios'



       
        axios.interceptors.request.use(function (config) {
            debugger
            const token = localStorage.getItem('token');
            if(token) {
                config.headers.Authorization = `Bearer ${token}`;
                return config;
              }
              else{
                location.replace('http://localhost:8080')
                
                return config;
              }
       
        }, function (error) {
            
       
        debugger
            console.log('request error')
        return Promise.reject(error);
        });

        axios.interceptors.response.use(function (response) {
            debugger
            
           
            return response;
            }, function (error) {
                debugger
                switch(error.response.status)
                {
                    case 408: console.log('Request timeout')
                    break
                    case 401: location.replace('http://localhost:8080')
                    break
                    case 403: console.log('You dont have permissions')
                    break
                    case 500: console.log('Some error occured')
                }
            return Promise.reject(error);
        });
