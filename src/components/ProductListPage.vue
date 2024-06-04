<template>
  <div>
    <ProductPageHeader />
    <ProductPageMain/>
    <MainFooter/>
  </div>
</template>

<script>
import ProductPageHeader from '@/components/ProductListHeader.vue';
import ProductPageMain from '@/components/ProductListMain.vue';
import MainFooter from '@/components/MainFooter.vue';
import '/src/stylesheets/ResponsiveHomePageStyling.css'
import '/src/stylesheets/ResponsiveProductPageStyling.css'


export default {
  name: 'Home_Page',
  components: {
    ProductPageHeader,
    ProductPageMain,
    MainFooter
  }
}
</script>