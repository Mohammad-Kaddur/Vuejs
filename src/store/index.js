import { createStore } from "vuex";
import cartData from "./modules/cart.js";
import productData from "./modules/product.js";
import search from "./modules/search.js";
import category from "./modules/category.js";
import filterModule from "./modules/filter.js";
import authModule from "./modules/auth.js";
import order from "./modules/order.js";
const store = createStore({
  modules: {
    cart: cartData,
    product: productData,
    search: search,
    category: category,
    filter: filterModule,
    auth: authModule,
    order: order,
  },
  state() {
    return {
      data: {},
    };
  },
  getters: {},
  mutations: {},
  actions: {},
});
export default store;
