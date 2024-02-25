import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/lib/util/colors";

import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./firebase";

import "./assets/main.css";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
        },
      },
    },
  },
});

app.use(vuetify);

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

app.use(router);

app.mount("#app");
