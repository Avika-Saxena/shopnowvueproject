<template>
    <header>
  
  <nav>
    
    <img src="/images/7ab973784d12483bc8a2f716401ec1ec-removebg-preview (1).png" class="logo">
    
    <ul class="menu-bar-side">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">AboutUs</router-link></li>
      <li><router-link to="/">ContactUs</router-link></li>
      <li><router-link to="/product/">Products</router-link></li>
      <li class="filter" data-v-dc8be3df="">Filter
        <div class="filter-div">
          <h5>Filter with price</h5>
          <a @click="sortByPrice('lowtoHigh')">Low to High</a>
          <a @click="sortByPrice('highToLow')">High To Low</a>
        </div>
      </li>
    </ul>
    <div class="search-box" role='search' id="search-box">
                <input type="search" name="searchbox" role="form" id="searchbox"
                    placeholder="Search Products and Brands" aria-labelledby="search-box">
                <img src="https://swagofindia.netlify.app/Images/magglass.png" alt="search-icon" role='icon' aria-label='magnifying glass icon'>
            </div>
    
    <i class="fa fa-bars"></i>
  </nav>
 
 <swiper
 :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: true,
    }"
    :loop = "true"
    :effect="'coverflow'"
    :modules="modules"
    class="mySwiper"
    
    :grabCursor="true"
    :slidesPerView="'auto'"
    
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
  >
    <swiper-slide><img src="/images/productlistimages/pant_saree-min-853x1024.jpg" /></swiper-slide>
    <swiper-slide><img src="/images/productlistimages/7113NX9ABhL._AC_UY1100_.jpg" /></swiper-slide>
    <swiper-slide><img src="/images/productlistimages/8448af80944eaca909874361f6009221.jpg" /></swiper-slide>
    <swiper-slide><img src="/images/productlistimages/Screenshot 2024-05-31 180543.png" /></swiper-slide>
    <swiper-slide><img src="/images/productlistimages/71whvJfW6gL._AC_UY1100_.jpg" /></swiper-slide>
  </swiper>
</header>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/effect-fade';
  import '/src/stylesheets/HomeHeaderStyling.css'
  import '/src/stylesheets/ProductListHeaderStyling.css'
  import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
export default {
  name: 'ProductListHeader',
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation, EffectCoverflow],
      };
    },
    methods:{
      sortByPrice(order) {
      this.$emit('sort-order-changed', order);
    }
    }
}
</script>

<style scoped>
    
    header nav{
        background: rgb(18 62 87);
    color: var(--white);
    display: flex;
    position: absolute;
    padding: 10px 30px;
    top: 0;
    width: 100%;
    z-index: 2;
    border-bottom: solid 4px #e4ff00;
    }
header {
    height:100vh;
    background: white;
}
.swiper {
    height: 80%;
    width: 80%;
    top: 20%;
}
.swiper img {
    position: relative;
    width: 80%;
    height: 90%;
}

header >>> .swiper-wrapper {
    position: relative;
    width: 30% !important;
    height: 80% !important;
}

.filter-div{
  position: absolute;
    width: 200px;
    background: white;
    color: black;
    box-shadow: 0px 0px 5px #979797;
    display:none;
}

.filter-div h5{
    border-bottom: solid 1px #e4e4e4;
    color: #a7a0a0;
    text-align: start;
    padding: 5px 27px;
    font-size: 17px;
    text-align: center;
    padding: 6px 27px;
    text-transform: capitalize;
    font-weight: 100;
}

.filter-div a{
  width: 73%;
  border-bottom: solid 1px #e4e4e4;
  color: #a7a0a0;
  text-align: start;
  padding: 5px 27px;
  font-size: 15px;
  text-transform:capitalize;
}

.filter-div a:hover{
  background: whitesmoke;
}

.filter:hover .filter-div{
  display:block;
}
</style>