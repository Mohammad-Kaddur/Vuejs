import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import UserCart from "./pages/UserCart.vue";
import TheProduct from "./pages/TheProduct.vue";
import ProductDetails from "./pages/ProductDetails.vue";
import HomePage from "./pages/HomePage.vue";
import CheckOut from "./pages/CheckOut.vue";
import SearchPage from "./pages/SearchPage.vue";
// import ProductInfo from "./pages/ProductInfo.vue";
// import TheProducts from "./pages/TheProducts.vue";
// import TheCategory from "./pages/TheCategory.vue";

const UserAuth = defineAsyncComponent(() =>
  import("./pages/auth/UserAuth.vue")
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/cart",
      component: UserCart,
    },
    {
      path: "/product",
      name: "product",
      component: TheProduct,
    },
    {
      path: "/product/:id",
      name: "product-details",
      props: true,
      component: ProductDetails,
    },
    {
      path: "/cart/checkout",
      component: CheckOut,
    },
    {
      path: "/search",
      component: SearchPage,
      // props:true,
    },
    // {
    //   path: "/productinfo/:id",
    //   component: ProductInfo,
    // },
    // {
    //   path: "/products",
    //   component: TheProducts,
    // },
    {
      path: "/auth",
      component: UserAuth,
    },
    // {
    //   path: "/category/:title",
    //   name: "category",
    //   component: TheProducts,
    //   props: true,
    // },
    // {
    //   path: "/category",
    //   name:'category',
    //   component: TheCategory,
    // },
  ],
});

export default router;
