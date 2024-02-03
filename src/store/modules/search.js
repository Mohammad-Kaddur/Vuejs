// search.js

export default {
  namespaced: true,
  state: () => ({
    searchQuery: "",
    searchResults: [],
  }),
  mutations: {
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_SEARCH_RESULTS(state, results) {
      state.searchResults = results;
    },
    // other mutations if needed
  },
  actions: {
    updateSearchQuery(context, query) {
      context.commit("SET_SEARCH_QUERY", query);
    },
    performSearch(context, payload) {
      const products = context.rootGetters["product/getProducts"];
      console.log("search", products);
      console.log("payload", payload);
      console.log("context", context);
      const searchTerm = payload.searchQuery.toLowerCase();
      const results = products.filter((product) =>
        product.attributes.title.toLowerCase().includes(searchTerm)
      );
      context.commit("SET_SEARCH_RESULTS", results);
    },
    // other actions if needed
  },
  getters: {
    getSearchQuery(state) {
      return state.searchQuery;
    },
    getSearchResults: (state) => state.searchResults,
    // other getters if needed
  },
};
