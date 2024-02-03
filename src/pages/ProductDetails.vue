<template>
  <div class="d-flex flex-column m-2">
    <h2>Product Details</h2>
    <div v-for="img in image" :key="img.id">
      <img :src="`http://localhost:1337` + img.attributes.formats.thumbnail.url" alt="" />
    </div>
    <div v-if="products">the title {{ title }}</div>
    <div v-if="products">price {{ price }}</div>
    <button @click="addToCart">Add to Cart</button>
    <div>
      <router-link to="/cart">Go To Cart</router-link>
    </div>
  </div>
</template>

<script>
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
export default {
  components: {},
  data() {
    return {
      selectedProduct: null,
    };
  },
  props: ["id"],
  computed: {
    title() {
      return this.products ? this.products.attributes.title : "";
    },
    price() {
      return this.products ? this.products.attributes.price : "";
    },
    image() {
      return this.products
        ? this.products.attributes.image.data
        : "";
    },
    products() {
      // const id = this.$route.params.id;
      return this.$store.getters["product/getProducts"].find((data) => data.id == this.id);
    }
  },
  created() {
    // const id = this.$route.params.id;
    //  this.products
  },
  methods: {
    addToCart() {
      const notyf = new Notyf({
        position: {
          x: 'right',
          y: 'top',
        },
      });
      notyf.success('Added To Cart');
      this.$store.dispatch("cart/addToCart", {
        id: this.id,
      });
    },
  },

};
</script>
