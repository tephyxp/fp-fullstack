import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";


library.add(faCoffee)

createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')




