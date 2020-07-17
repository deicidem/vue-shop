import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './modules/cart';
import products from './modules/products';
import menu from './modules/menu';
import form from './modules/form';

export const store = new Vuex.Store({
	modules: {
		menu,
		products,
		cart,
		form
	},
	strict: process.env.NODE_ENV !== 'production'
});