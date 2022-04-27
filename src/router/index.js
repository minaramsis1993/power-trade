import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about-us",
		name: "About",
		component: () => import("../views/About.vue")
	},
	{
		path: "/contact-us",
		name: "Contact",
		component: () => import("../views/Contact.vue")
	},
	{
		path: "/products",
		name: "Products",
		component: () => import("../views/Products.vue")
	},
	{
		path: "/products/:id",
		name: "SingleProduct",
		component: () => import("../views/SingleProduct.vue")
	}
];

const router = new VueRouter({
	// mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
