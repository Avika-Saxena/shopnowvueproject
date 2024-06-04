
<template>
    <HeaderComponent/>
    <CartPageMain/>
    <MainFooter/>    
</template>
<script>
    import CartPageMain from '@/components/CartPageMain.vue';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import MainFooter from '@/components/MainFooter.vue';
    import '/src/stylesheets/CartPageStyling.css'
    import '/src/stylesheets/ResponsiveCartOrderPageStyling.css';
    export default{
        name: "CartPage",
        components :{
            HeaderComponent,
            CartPageMain,
            MainFooter
        }
    }
</script>
<style>
</style>