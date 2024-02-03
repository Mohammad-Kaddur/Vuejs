<!-- <template>
  <div>
    <h2>Category</h2>
    <div>
      <the-category v-for="category in getCategoryData" :key="category.id" :id="category.id"
        :title="category.attributes.title"></the-category>
    </div>
  </div>
</template>
  
<script>

import TheCategory from '../components/TheCategoryCart.vue'

export default {
  components: {
    TheCategory
  },
  computed: {
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
   -->