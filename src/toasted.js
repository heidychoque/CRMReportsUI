import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted)

export default {
  showAlert(message){
    Vue.toasted.error(message,{
     position: 'bottom-center',
     icon : 'error_outline',
     theme: 'bubble',
     duration: 1500
  })
  },
  showSuccess(message){
    Vue.toasted.success(message,{
     position: 'bottom-center',
     icon: 'check_circle_outline',
     theme: 'bubble',
     duration: 1500
  })
  }

}