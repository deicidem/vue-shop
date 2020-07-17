export default {
  namespaced: true,
  state: {
    products: []
  },
  getters: {
    products(state) {
      return state.products;
    }
  },
  mutations: {
    add(state, id_product) {
      if (state.products.indexOf(id_product) === -1) {
        state.products.push(id_product);
      }
    },
    remove(state, id_product) {
      let pos = state.products.indexOf(id_product);

      if (pos !== -1) {
        state.products.splice(pos, 1);
      }
    },
    clear(state) {
      state.products.splice(0, state.products.length);
    }
  },
  actions: {
    add(store, id_product) {
      store.commit('add', id_product);
    },
    remove(store, id_product) {
      store.commit('remove', id_product);
    },
    clearCart(store) {
      store.commit('clear');
    }
  }
};
