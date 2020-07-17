<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<div v-if="isEmpty" class="alert alert-warning">
			Your cart is empty
		</div>
		<template v-else>
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<th>Title</th>
						<th>Price</th>
					</tr>
				</thead>	
				<tbody>
					<tr v-for="item in products" :key="item.id_product">
						<td>{{item.title}}</td>
						<td>{{item.price}}</td>
					</tr>
				</tbody>	
			</table>
			<button 
			@click="onOrder"
			class="btn btn-success">
				Order Now
			</button>
			<button class="btn btn-danger" @click="clearCart">Clear Cart</button>
		</template>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
		methods: {
			onOrder() {
				this.$router.push('/checkout')
			},
			...mapActions('cart', {
				clearCart: 'clearCart'
			})
		},
		computed: {
			...mapGetters('cart', {
				productsInCart: 'products'
			}),
			...mapGetters('products', {
				productsAll: 'items'
			}),
			products() {
				return this.productsAll.filter((elem) => {
					return this.productsInCart.indexOf(elem.id_product) !== -1;
				})
			},
			isEmpty() {
				return this.products.length === 0;
			}
		}
	}
</script>