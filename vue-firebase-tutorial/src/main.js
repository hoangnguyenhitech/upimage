import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDRWorI1BQs-8nsCw5KyOR1lbREHWIKXZo",
  authDomain: "vue-firebase-tutorial-b225d.firebaseapp.com",
  databaseURL:
    "https://vue-firebase-tutorial-b225d-default-rtdb.firebaseio.com",
  projectId: "vue-firebase-tutorial-b225d",
  storageBucket: "vue-firebase-tutorial-b225d.appspot.com",
  messagingSenderId: "209846317747",
  appId: "1:209846317747:web:762063b9369cff230cf6c6",
  measurementId: "G-HP822N4S75",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
