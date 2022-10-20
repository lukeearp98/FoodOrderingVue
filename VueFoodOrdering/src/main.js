import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps";
import * as firebase from "firebase";

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDNFRkBeCc6lN3UULDV044cstJL84OVsS0",
    libraries: "places" // necessary for places input
  }
});


const configOptions = {
  apiKey: "AIzaSyB9FEvDVatsS7zxfM9tNpjSSofSf4hjyCo",
  authDomain: "pwavueapp-c8daf.firebaseapp.com",
  projectId: "pwavueapp-c8daf",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(configOptions);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')