import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import  firebase  from "firebase";
import  './db/conection.js'

Vue.config.productionTip = false


// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
 let app = null
  firebase.auth().onAuthStateChanged(() => {
    if (!app) {
    
      app = new Vue({
        router,
        vuetify,
        render: h => h(App)
      }).$mount('#app')
       
    }
  });
  console.log('main');