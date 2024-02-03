import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import route from "./route.js";

import InstantSearch from 'vue-instantsearch/vue3/es';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import BaseButton from "./components/ui/BaseButton.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import ProductCart from './components/cart/ProductCart.vue';

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);
app.component("product-cart", ProductCart);
// import { AisInstantSearch, AisSearchBox } from 'vue-instantsearch/vue3';

// Vue InstantSearch components
// app.component("instant-search", AisInstantSearch);
// app.component("search-box", AisSearchBox);

app.use(route);
app.use(store);
app.use(InstantSearch);

app.mount("#app");
