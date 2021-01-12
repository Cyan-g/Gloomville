import { createApp } from 'vue';
import App from './App.vue';

import store from './store/index.js';

import BaseBadge from './components/UI/BaseBadge.vue';
import PlayerBar from './components/UI/PlayerBar.vue';
import BaseButton from './components/UI/BaseButton.vue';


const app = createApp(App);

app.use(store);
app.component('base-button',BaseButton);
app.component('base-badge',BaseBadge);
app.component('player-bar',PlayerBar);

app.mount('#app');

