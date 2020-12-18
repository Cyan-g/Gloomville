import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
import PlayerBar from './components/UI/PlayerBar.vue'


const app = createApp(App);

app.component('base-button',BaseButton);
app.component('player-bar',PlayerBar);

app.mount('#app');

