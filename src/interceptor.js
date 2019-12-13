import axios from 'axios'
import router from '@/router'


        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            debugger
            const auth_token = localStorage.getItem('auth_token');
            if(auth_token) {
            config.headers.Authorization = `Bearer ${auth_token}`;
            }
            //console.log('requets ok')
        return config;
        }, function (error) {
        // Do something with request error
        debugger
            console.log('requesr error')
        return Promise.reject(error);
        });

        axios.interceptors.response.use(function (response) {
            debugger
            console.log('response ok')
            return response;
            }, function (error) {
                debugger
                //console.log(error.response.status)
                switch(error.response.status)
                {
                    case 408: console.log('Request timeout')
                    break
                    case 401: router.push('login') //location.replace('http://www.google.com')
                    break
                    case 403: console.log('You dont have permissions')
                    break
                }
                console.log('response error')
            return Promise.reject(error);
        });
