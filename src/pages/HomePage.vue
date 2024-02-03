<template>
  <div>
    Home page
    <div>
   
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
    getCategoryData() {
      return this.$store.getters['category/getProducts']
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
