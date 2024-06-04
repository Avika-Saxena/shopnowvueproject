import { createRouter, createWebHistory } from 'vue-router';
import ProductListPage from '/src/components/ProductListPage.vue'
import IndividualProductPage from '/src/components/IndivitualProductPage.vue'
import OrderPage from '/src/components/OrderPage.vue';
import CartPage from '/src/components/CartPage.vue'
import HomePage from '/src/components/Home_Page.vue';
import TransactionPage from '/src/components/TransactionPage.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/product',
        name: 'ProductList',
        component: ProductListPage
    },
    {
        path: '/product/:id',
        name: 'IndividualProduct',
        component: IndividualProductPage
    },
    {
        path: '/cart/:id',
        name: 'CartProduct',
        component: CartPage
    },
    {
        path: '/order/:id',
        name: 'OrderProduct',
        component: OrderPage
    }, {
        path: '/transaction/:id',
        name: 'Payment',
        component: TransactionPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;