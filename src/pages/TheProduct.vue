<template>
  <base-dialog :show="!!error" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <div class="row">
    <h1>All Products</h1>
    <the-filter @filter-changed="filterChanged"></the-filter>
    <div class="col-9 d-flex flex-wrap gap-3">
      {{ error }}
      <base-spinner v-if="isLoading"></base-spinner>
      <product-cart v-else-if="products" v-for="prod in products" :key="prod.id" :id="prod.id"
        :title="prod.attributes.title" :brand="prod.attributes.brand.data.attributes.title" :price="prod.attributes.price"
        :image="prod.attributes.image.data"></product-cart>
      <div v-else>No Has Product</div>
    </div>
  </div>
</template>

<script>
import TheFilter from '@/components/TheFilter.vue';

export default {
  components: { TheFilter },
  data() {
    return {
      isLoading: false,
      error: null,
      categoryValue: null,
      activeFilter: {
        laptop: true,
        mobile: true,
      }
    };
  },
  computed: {
    products() {
      return this.$store.getters["product/getProducts"];
    }
        
  },

  mounted() {
    this.$store.dispatch("product/actionProducts");
  },
  methods: {
     loadProducts() {
      this.isLoading = true;
      try {
         this.$store.dispatch("product/actionProducts");
      } catch (error) {
        this.error = error.message || "Product Not Found";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    filterChanged(value) {
      this.activeFilter = value
      console.log(this.activeFilter)
    }
  },
};
</script>

<style></style>
