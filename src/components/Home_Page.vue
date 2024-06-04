<template>
  <div>
    <MainHeader @scroll-to="scrollToSection"/>
    <MainContent ref="contentComponent"/>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import MainContent from '@/components/MainContent.vue';
import '/src/stylesheets/ResponsiveHomePageStyling.css'

export default {
  name: 'Home_Page',
  components: {
    MainHeader,
    MainFooter,
    MainContent
  },
  methods: {
    scrollToSection(section) {
      this.$refs.contentComponent.scrollToSection(section);
    }
  }
}
</script>