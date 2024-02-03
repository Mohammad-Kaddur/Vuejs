import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      data: [],
    };
  },
  mutations: {
    setDataFrom(state, payload) {
      state.data = payload;
    },
    setPostForm(state, payload) {
      state.data = payload.fullName;
      state.data = payload.phoneNumber;
      state.data = payload.email;
      state.data = payload.address;
    },
  },
  actions: {
    async getDataForm(context) {
      try {
        const response = await axios.get(
          process.env.VUE_APP_API + "/order?populate=*",
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

        context.commit("setDataFrom", attriProduct);
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
          console.log("Error", error.message);
          throw new Error(error.message || "Error setting up the request");
        }
      }
    },

    async postDataForm(context, payload) {
      try {
        const response = await axios.post(
          process.env.VUE_APP_API + "/order",
          {
            fullName: payload.fullName,
            phoneNumber: payload.phoneNumber,
            email: payload.email,
            address: payload.address,
          },
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

        context.commit("setPostForm", attriProduct);
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
          console.log("Error", error.message);
          throw new Error(error.message || "Error setting up the request");
        }
      }
    },
    // async signup(context, payload) {
    //   return context.dispatch("auth", {
    //     ...payload,
    //     mode: "signup",
    //   });
    // },
    // async auth(context, payload) {
    //   const mode = payload.mode;
    //   let url =
    //     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvOcmh_Avvu08bFdUHdmJzA06c6vV4h0E";

    //   if (mode === "signup") {
    //     url =
    //       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvOcmh_Avvu08bFdUHdmJzA06c6vV4h0E";
    //   }
    //   const response = await fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: payload.email,
    //       password: payload.password,
    //       returnSecureToken: true,
    //     }),
    //   });

    //   const responseData = await response.json();

    //   if (!response.ok) {
    //     const error = new Error(
    //       responseData.message ||
    //         "Failed to authenticate. Check your login data."
    //     );
    //     throw error;
    //   }
    //   const expiresIn = +responseData.expiresIn * 1000;
    //   //   const expiresIn = 5000;
    //   const expirationDate = new Date().getTime() + expiresIn;

    //   localStorage.setItem("token", responseData.idToken);
    //   localStorage.setItem("userId", responseData.localId);
    //   localStorage.setItem("tokenExpiration", expirationDate);

    //   context.commit("setUser", {
    //     token: responseData.idToken,
    //     userId: responseData.localId,
    //   });
    // },
    // tryLogin(context) {
    //   const token = localStorage.getItem("token");
    //   const userId = localStorage.getItem("userId");
    //   const tokenExpiration = localStorage.getItem("tokenExpiration");

    //   const expiresIn = +tokenExpiration - new Date().getTime();

    //   if (expiresIn < 0) {
    //     return;
    //   }

    //   if (token && userId) {
    //     context.commit("setUser", {
    //       token: token,
    //       userId: userId,
    //     });
    //   }
    // },
    // logout(context) {
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("userId");
    //   localStorage.removeItem("tokenExpiration");

    //   context.commit("setUser", {
    //     token: null,
    //     userId: null,
    //   });
    // },
    // autoLogout(context) {
    //   context.dispatch("logout");
    //   context.commit("setAutoLogout");
    // },
  },
  getters: {
    gettersDataForm(state) {
      return state.data;
    },
  },
};
