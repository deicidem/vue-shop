<template>
<div>
  <h1>Products</h1>
  <div class="row">
    <div v-for="(item, index) in products" :key="index" class="col col-sm-4">
      <router-link tag="h3" :to="'/products/' + item.id_product">
        <a>{{ item.title }}</a>
      </router-link>
      <div>{{ item.price }}</div>
      <button v-if="isInCart(item.id_product)" class="btn btn-primary" @click="addToCart(item.id_product)">
        Add to cart
      </button>
      <button v-else class="btn btn-warning" @click="removeFromCart(item.id_product)">
        Remove to cart
      </button>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex';

export default {
  computed: {
    ...mapGetters('products', {
      products: 'items'
    }),
    ...mapGetters('cart', {
      inCart: 'products'
    }),
    
  },
  methods: {
    ...mapActions('cart', {
      addToCart: 'add',
      removeFromCart: 'remove'
    }),
    isInCart(id) {
      return this.inCart.indexOf(id) === -1;
    }
  }

}
</script>

<style scoped>
.row {
  padding-left: 15px;
}
</style>
