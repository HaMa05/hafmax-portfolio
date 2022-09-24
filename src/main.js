import { createApp } from 'vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoTwitter,
  IoSparklesSharp,
  IoKeypad,
  IoQrCode,
  IoColorPalette,
  IoHelpBuoy,
  IoArrowUp
} from 'oh-vue-icons/icons';

import './style.css';
import App from './App.vue';

const app = createApp(App);

addIcons(
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoTwitter,
  IoSparklesSharp,
  IoKeypad,
  IoQrCode,
  IoColorPalette,
  IoHelpBuoy,
  IoArrowUp
);

app.component('v-icon', OhVueIcon);

app.mount('#app');
