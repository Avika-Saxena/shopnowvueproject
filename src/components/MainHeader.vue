<template>
<header>
  
  <nav>
    
    <img src="/images/7ab973784d12483bc8a2f716401ec1ec-removebg-preview (1).png" class="logo">
    <ul class="menu-bar-side">
      <li><router-link to="/">Home</router-link></li>
      <li><a href = "#about">AboutUs</a></li>
      <li><a href = "#contact">ContactUs</a></li>
      <li><router-link to="/product/">Products</router-link></li>
    </ul>
    
    <i class="fa fa-bars"></i>
  </nav>

  
 <div class="content">
   
  <h2 class="heading">
    Start shopping from ShopNow!
  </h2>
  
  <h4>
    Discover amazing products for your shopping needs
  </h4>
  
  <button class="shopNow">
    shop now
  </button>
  <button class="findMore">
    find more
  </button>
  
</div>
<swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :loop = "true"
    :effect = "'fade'"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="/images/4780366788fa2d974dde49a6a5219140.png " /></swiper-slide>
    <swiper-slide><img src="/images/Screenshot 2024-05-30 184506.png" /></swiper-slide>
    <swiper-slide><img src="/images/Screenshot 2024-05-30 184555.png" /></swiper-slide>
    <swiper-slide><img src="/images/fc2b4e1a186939c34959ed3845dd985b.png" /></swiper-slide>
    <swiper-slide><img src="/images/Screenshot 2024-05-30 184532.png" /></swiper-slide>
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
  import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
  import AOS from 'aos';
export default {
  name: 'MainHeader',
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation, EffectFade],
      };
    },
  mounted() {
    window.onresize = () => {
      location.reload();
    };

    this.setupColorChangeHandlers();
    this.setupMenuBarHandlers();
  },
  methods: {
  disableAOS() {
  AOS.init({
    disable: true
  }); // Adjust delay as needed
}
,
    toggleNav() {
      const x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
    setupColorChangeHandlers() {
      let sheo = document.querySelector('#sheochange');
      const sheos = document.querySelectorAll(".sheos");
      window.sheoColorChange = (img, num) => {
        sheo.src = img;
        const current = document.getElementsByClassName('sheoActive');
        current[0].className = current[0].className.replace(" sheoActive", "");
        sheos[num].className += " sheoActive";
      };

      let bracelet = document.querySelector('#bracelet');
      const bracelets = document.querySelectorAll(".bracelets");
      window.braceletColorChange = (img, index) => {
        bracelet.src = img;
        const braceletActive = document.getElementsByClassName('braceletActive');
        braceletActive[0].className = braceletActive[0].className.replace("braceletActive", "");
        bracelets[index].className += " braceletActive";
      };

      let bag = document.querySelector('#bag');
      const bags = document.querySelectorAll(".bag");
      window.bagColorChange = (img, index) => {
        bag.src = img;
        const bagActive = document.getElementsByClassName('bagActive');
        bagActive[0].className = bagActive[0].className.replace("bagActive", "");
        bags[index].className += " bagActive";
      };
    },
    setupMenuBarHandlers() {
      let menu = document.querySelector('.fa-bars');
      let menubar = document.querySelector('.menu-bar');
      let a = true;
      menu.addEventListener("click", () => {
        if (a == true) {
          menubar.style.height = "180px";
          menu.classList.replace("fa-bars", "fa-remove");
          a = false;
        } else {
          menubar.style.height = "0px";
          menu.classList.replace("fa-remove", "fa-bars");
          a = true;
        }
      });

      let menubarside = document.querySelector('.menu-bar-side');
      let b = true;
      menubarside.addEventListener("click", () => {
        if (b == true) {
          menubarside.style.left = "0%";
          b = false;
        } else {
          menubarside.style.left = "-162px";
          b = true;
        }
      });
    }
  }
};
</script>

<style scoped>

header {
    background: url('/images/4780366788fa2d974dde49a6a5219140.png');
    background-size: 100% 100%;
    background-position: 100%;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    position: relative;
}

header:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
</style>