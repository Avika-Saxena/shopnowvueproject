<template>
  <div>
    <IndividualProductMainPage />
    <MainFooter/>
  </div>
</template>

<script>
import IndividualProductMainPage from '/src/components/IndivitualProductMainPage.vue';
import MainFooter from '@/components/MainFooter.vue';
import '/src/stylesheets/HomeHeaderStyling.css'
import '/src/stylesheets/ProductListHeaderStyling.css'
import '/src/stylesheets/HomeFooterStyling.css'
import '/src/stylesheets/ProductListMainStyling.css'
import '/src/stylesheets/IndividualProductPageStyling.css'
import '/src/stylesheets/ResponsiveIndividuaProductPageStyling.css'

export default {
  name: 'IndividualProductPage',
  components: {
    IndividualProductMainPage,
    MainFooter
  }
}
</script>