<template>
  <div class="mb-4 d-flex align-item-center">
    <router-link to="/">Home</router-link>
    <!-- <the-category v-for="category in getCategoryData" :key="category.id" :id="category.id"
      :title="category.attributes.title"></the-category> -->
    <router-link to="/product">Product</router-link>
    <router-link to="/cart">cart <span>{{ cartQuantity }}</span></router-link>
  </div>
</template>
<script>
// import TheCategory from '../TheCategoryCart.vue'

export default {
  components: {
    // TheCategory
  },
  data() {
    return {
      qty: 0,
    };
  },
  props: ['id', ''],

  computed: {
    cartQuantity() {
      return this.$store.getters["cart/quantity"];
    },
    stateItmes() {
      return this.$store.state.cart.items;
    },
    getCategoryData() {
      return this.$store.getters['category/getCategoreis'];
    },
  },
  created() {
    this.loadCategoreis()
  },
  methods: {
    async loadCategoreis() {
      try {
        await this.$store.dispatch("category/actionProducts");
      } catch (error) {
        this.error = error.message || "Product Not Found";
      }
    },
  }
};
</script>

<style scoped>
div {
  align-items: center;
  justify-content: center;
}
</style>