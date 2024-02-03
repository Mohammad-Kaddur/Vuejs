import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      data: JSON.parse(sessionStorage.getItem("productData")) || [],
    };
  },
  mutations: {
    mutationProducts(state, payload) {
      state.data = payload;
      sessionStorage.setItem("productData", JSON.stringify(payload));
    },
  },
  actions: {
    async actionProducts(context) {
      try {
        const response = await axios.get(
          process.env.VUE_APP_API + "/products?populate=*&filters[category][id][$eq]=",
          {
            headers: {
              Authorization: "Bearer " + process.env.VUE_APP_TOKEN,
            },
          }
        );
        const responseData = response.data.data;
        const attriProduct = [];
        for (const key in responseData) {
          const productData = responseData[key];
          const attri = {
            id: productData.id,
            attributes: productData.attributes,
          };
          attriProduct.push(attri);
        }
        context.commit("mutationProducts", attriProduct);
      } catch (error) {
        // Handle errors here
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          throw new Error(error.response.data.message || "Network error");
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          throw new Error("No response received");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          throw new Error(error.message || "Error setting up the request");
        }
      }
    },
  },
  getters: {
    getFilters(state) {
      return state.data;
    },
  },
};
