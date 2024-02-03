<template>
  <section>
    <h2>Your Cart</h2>
    <h3>Total Amount: <base-badge mode="elegant">{{ cartTotal }}.00 TL</base-badge></h3>
    <ul>
      <cart-item v-for="item in cartItems" :key="item.productId" :id="item.productId" :title="item.title"
        :image="item.image" :price="item.price" :qty="item.qty"></cart-item>
      <a :href="checkOut">Check Out</a>

    </ul>
  </section>
</template>
  
<script>
import CartItem from '../components/cart/CartItem.vue';

export default {
  data() {
    return {
      items: null
    }
  },
  components: {
    CartItem,
  },
  computed: {
    cartTotal() {
      return this.$store.getters['cart/totalSum'];
    },
    cartItems() {
      return this.$store.getters['cart/products'];
    },
    checkOut() {
      return this.$route.path + '/checkout'
    },
  },
  // mounted(){
  //   this.addToCart();
  // },
  // methods:{
  //   addToCart(){
  //     this.$store.dispatch("cart/addToCart");
  //   }
  // }
};
</script>
  
<style scoped>
a{
  font: inherit;
    border: 1px solid #8f0030;
    background-color: #8f0030;
    color: white !important;
    border-radius: 30px;
    cursor: pointer;
    padding: 0.5rem 1.5rem
}
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>