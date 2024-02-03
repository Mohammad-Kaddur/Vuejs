<template>
  <div>
    <transition-group>
      <the-header></the-header>
    </transition-group>
    <!-- <ais-instant-search
    :search-client="searchClient"
    index-name="YourIndexName"
  >
  </ais-instant-search> -->


    <div>
      <form @submit.prevent="searchForm">
        <input type="text" v-model="searchQuery" @input="changeKeyWord" />
        <button type="submit">Search</button>
      </form>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>



import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      insights: {
        insightsInitParams: {
          useCookie: false,
        }
      },
      // customSearchClient,
    };
  },
  provide() {
    return {
      search: this.changeKeyWord,
      categoryData: this.categoryData
    }
  },
  components: {
    TheHeader,
  },
  computed: {
    // categoryData() {
    //   const searchTerm = this.searchQuery.toLowerCase();
    //   return this.$store.getters["product/getProducts"].filter((product) =>
    //     product.attributes.title.toLowerCase().includes(searchTerm)
    //   );
    // }
  },
  created() {
    this.loadCategoreis()
  },

  methods: {
    searchForm() {
      // Update the route with the search query
      this.$router.push({ path: '/search', query: { search: this.searchQuery } });
    },
    // changeKeyWord() {
    //   const searchTerm = this.searchQuery.toLowerCase();
    //   const allProducts = this.$store.getters["product/getProducts"];
    //   return allProducts.filter((product) =>
    //     product.attributes.title.toLowerCase().includes(searchTerm)
    //   );
    // },
    // changeKeyWord() {
    //   this.$store.dispatch("search/updateSearchQuery", this.searchQuery);
    // },
    async loadCategoreis() {
      try {
        await this.$store.dispatch("product/actionProducts");
      } catch (error) {
        this.error = error.message || "Product Not Found";
      }
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center !important;
  color: #2c3e50 !important;
  margin-top: 60px !important;
}

li {
  list-style: none !important;
}

a {
  color: #000 !important;
  text-decoration: none !important;
  margin: 5px !important;
  padding: 5px 10px !important;
}

.showData li {
  background-color: #eee;
  padding: 5px;

}
</style>
