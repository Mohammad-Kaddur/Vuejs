export default {
  namespaced: true,
  state() {
    const cartData = JSON.parse(sessionStorage.getItem("cart")) || [];
    return {
      items: cartData,
      total: cartData.reduce((sum, item) => sum + item.price * item.qty, 0),
      qty: cartData.reduce((sum, item) => sum + item.qty, 0),
    };
  },

  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId == productData.id
      );
      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.attributes.title,
          image: productData.attributes.image,
          price: productData.attributes.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.attributes.price;
      sessionStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeProductFromCart(state, payload) {
      const prodId = payload.productId;
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId == prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
      sessionStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
  actions: {
    addToCart(context, payload) {
      const prodId = payload.id;
      const products = context.rootGetters["product/getProducts"];
      console.log("products", products);
      const product = products.find((prod) => prod.id == prodId);
      context.commit("addProductToCart", product);
    },
    removeFromCart(context, payload) {
      context.commit("removeProductFromCart", payload);
    },
  },
  getters: {
    products(state) {
      console.log(state.items);
      return state.items;
    },
    totalSum(state) {
      return state.total;
    },
    quantity(state) {
      return state.qty;
    },
  },
};
