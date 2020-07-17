<template>
	<div>
		<router-link to="/products">Back to products</router-link>
		<h1>{{product.title}}</h1>
		<hr>
		<div class="alert alert-success">
			{{product.price}}
		</div>
		<button v-if="isInCart"
						class="btn btn-primary" 
						@click="add(id)">Add to cart</button>
		<button v-else
						class="btn btn-warning" 
						@click="remove(id)">Remove from cart</button>
	</div>
</template>

<script>
	import {
		mapActions,
		mapGetters
	} from 'vuex';
	export default {
		computed: {
			id() {
				return +this.$route.params.id
			},
			product(){
				return this.$store.getters['products/item'](this.id)
			},
			...mapGetters('cart', {
      	inCart: 'products'
			}),
			isInCart() {
				return this.inCart.indexOf(this.id) === -1;
			}
		},
		methods: {
			...mapActions('cart', {
				add: 'add', 
				remove: 'remove'
			})
		}

	}
</script>