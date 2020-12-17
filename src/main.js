import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
//import Saves from './Saves.js'

const app = createApp(App);

app.component('base-button',BaseButton);

app.mount('#app');