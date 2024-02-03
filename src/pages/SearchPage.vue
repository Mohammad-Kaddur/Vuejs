<!-- search.vue -->

<template>
  <div>
    <h2>Search Results</h2>
    <ul v-if="arr.length > 0">
      <li v-for="result of arr" :key="result.id">
        <div>
          <strong>ID:</strong> {{ result.id }}
        </div>
        <div>
          <strong>Title:</strong> {{ result.title }}
        </div>
        <div>
          <strong>Price:</strong> {{ result.price }}
        </div>
        <!-- Add more attributes as needed -->
      </li>
    </ul>
    <h2>Category Data</h2>
    <ul v-if="categoryData.length > 0">
      <li v-for="category in categoryData" :key="category.id">
        <div>
          <strong>ID:</strong> {{ category.id }}
        </div>
        <div>
          <strong>Title:</strong> {{ category.attributes.title }}
        </div>
        <!-- Add more attributes as needed -->
      </li>
    </ul>
  </div>
</template>
  
<script>
// import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      arr: [],
      searchQuery: '',
    }
  },
  computed: {
    // products() {
    //   const searchTerm = this.searchQuery.toLowerCase();
    //   return this.$store.getters["product/getProducts"].filter((product) =>
    //     product.attributes.title.toLowerCase().includes(searchTerm)
    //   );
    // }
  },

  inject: ['search', 'categoryData'],
  created() {
    if (typeof this.search === 'function') {
      // Call the search function with any necessary parameters
      const searchResults = this.search();
      console.log('Search Results:', searchResults);

      // Log details of each item in the search results
      searchResults.forEach((result, index) => {
        console.log(`Product Result ${index}:`);
        console.log('Product ID:', result.id);
        console.log('Product Attributes:', result.attributes.title);
        this.arr.push(result.attributes);
      });
    }

    // Access other injected properties as needed
    console.log('Category Data:', this.categoryData);

    // Log details of each item in the category data
    this.categoryData.forEach((category, index) => {
      console.log(`Category ${index}:`);
      console.log('ID:', category.id);
      console.log('Attributes:', category.attributes);
    });
    this.loadProducts

  },

  methods: {
    async loadProducts() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("product/actionProducts");
      } catch (error) {
        this.error = error.message || "Product Not Found";
      }
      this.isLoading = false;
    },
  }
};
</script>
  