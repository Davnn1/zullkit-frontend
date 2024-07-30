import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ProductView from "@/views/ProductView.vue";
import PricingView from "@/views/PricingView.vue";
import SuccessView from "@/views/SuccessView.vue";
import CategoriesView from "@/views/CategoriesView.vue";
import CategoryItems from "@/views/CategoryItems.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView
		},
		{
			path: '/register',
			name: 'register',
			component: RegisterView
		},
		{
			path: '/product/:id',
			name: 'product',
			component: ProductView
		},
		{
			path: '/pricing',
			name: 'pricing',
			component: PricingView
		},
		{
			path: '/success',
			name: 'success',
			component: SuccessView
		},
		{
			path: '/categories',
			name: 'categories',
			component: CategoriesView
		},
		{
			path: '/categories/:id',
			name: 'category-items',
			component: CategoryItems
		}
	]
})

router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0)
	next()
});

export default router