<template>
<header>
   <nav>
    
    <img src="/images/7ab973784d12483bc8a2f716401ec1ec-removebg-preview (1).png" class="logo">
    <ul class="menu-bar-side">
     <li>Home</li>
      <li>About us</li>
      <li>Contact us</li>
      <li>&#36;0.00</li>
    </ul>
      <div class="search-box" role='search' id="search-box">
         <input type="search" name="searchbox" role="form" id="searchbox"
             placeholder="Search Products and Brands" aria-labelledby="search-box">
         <img src="https://swagofindia.netlify.app/Images/magglass.png" alt="search-icon" role='icon' aria-label='magnifying glass icon'>
      </div>
    <i class="fa fa-bars"></i>
  </nav>
</header>
   <div class="bodyWrap">    
        <div class="productStage">   
         <div class="botBorder clearFix">
            <div class="productImage" v-if="product">
              <img :src="product.image">
                <ul class="imageList">
                  <li><a href="#"><img src="http://placehold.it/92x92"></a></li>
                  <li><a href="#"><img src="http://placehold.it/92x92"></a></li>
                  <li><a href="#"><img src="http://placehold.it/92x92"></a></li>
                </ul>
                    <span><a href="#"><b>View More</b></a></span>
            </div>
            <div class="overview" v-if="product">
              <h1>{{product.title}}</h1>
              <h2>2401 - Maroon</h2>
              <span class="rating">
                <img src="http://www.jimmybeanswool.com/secure-html/onlineec/images/stars/4_5StarBlue09.gif">
              </span>
              <h3>{{product.price}}</h3>
              <span>{{product.popularity}}</span>
              <span class="description">{{product.description}}</span>
              <div class="buttons">
                  <div class="button add"><router-link :to="`/cart/${product.id}`">Add to Cart</router-link></div>
                  <div class="button wish"><router-link :to="`/order/${product.id}`">Place Order</router-link></div>
              </div>
              <div class="productinfo">
                 <h3>Product Information</h3>
                 <ul class="specs">
                   <li><h5>Weight:</h5> Worsted</li>
                   <li><h5>Gauge (sts. / inch):</h5> 4.5</li>
                   <li><h5>US Needle:</h5> 8</li>
                   <li><h5>Yardage:</h5> 220</li>
                   <li><h5>Primary Fiber:</h5> 100% Wool</li>
                   <li><h5>Specific Fiber:</h5> 100% Pure New Wool</li>
                   <li><h5>Physical Weight:</h5> 100g</li>
                   <li><h5>Washing Instructions:</h5> Hand Wash</li>
                   <li><h5>Description:</h5>{{product.description}}</li>
                 </ul>
            </div>
            </div> 
         </div>
          <div class="info">
              <h3>More Items</h3>
              <div class="Products">
    <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :navigation="{
      clickable: true,
    }" 
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }"
    :loop= "true"
    :autoplay= "{
      delay: 3000,
      disableOnInteraction: false
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="product in products" :key="product.id"><a><img :src="product.image" /></a></swiper-slide>
  </swiper>
  </div>
               <div class="reviewbuttons">
                  <div class="button bd submit right">Read More Reviews</div>
                  <div class="button submit blueSubmit left">Write a Review</div> 
               </div>                       
         </div>  
         </div>
        </div> 
          
        <div class="sidebar slim">
          <div class="folderTab sub clearFix">
            <h3>Similar Items(We can get latest informations here )</h3>
          </div>
          <div class="botBorder">
            <div class="product vtop slim">
                <a href="#">
                   <div class="smallBox"><img src="http://placehold.it/92x92"></div>
                   <span class="manuName">Product Group</span>
                   <span class="prodName">Product Name</span>
                </a>
            </div>
              <div class="product vtop slim">
                <a href="#">
                   <div class="smallBox"><img src="http://placehold.it/92x92"></div>
                   <span class="manuName">Product Group</span>
                   <span class="prodName">Product Name</span>
                </a>
            </div>
            <div class="product vtop slim">
                <a href="#">
                   <div class="smallBox"><img src="http://placehold.it/92x92"></div>
                   <span class="manuName">Product Group</span>
                   <span class="prodName">Product Name</span>
                </a>
            </div>
            <div class="product vtop slim">
                <a href="#">
                   <div class="smallBox"><img src="http://placehold.it/92x92"></div>
                   <span class="manuName">Product Group</span>
                   <span class="prodName">Product Name</span>
                </a>
            </div>
          </div>
        </div>
</template>
<script>
   import axios from 'axios'
   import {Swiper, SwiperSlide} from 'swiper/vue'
   import 'swiper/css'
   import 'swiper/css/pagination'
   import 'swiper/css/navigation'
   import {Autoplay, Navigation, Pagination} from 'swiper/modules';
   export default{
      name : "IndividualProductMainPage",
      components:{
         Swiper,
         SwiperSlide
      },
      setup(){
         return{
            modules : [Autoplay,Navigation, Pagination]
         }
      },
      data(){
        return{
          product:null,
          products : []
        }
      },
      mounted(){
        this.fetchProducts();
  this.showProduct();
},
      methods:{
        fetchProducts(){
          axios.get(import.meta.env.VITE_API_ENDPOINT).
          then(response => {
            this.products = response.data.data;
          }).catch(error => {
            console.log("Error in fetching data : ",error);
          });
        },
        showProduct() {
    const id = this.$route.params.id;
    axios.get(`/api/products/${id}`)
      .then(response => {
        this.product = response.data;
      }).catch(error => {
        console.log("Error in fetching product:", error);
      });
  }
        },
      watch: {
    '$route.params.id': 'showProduct'
  }}
</script>

<style scoped>
   .content {
    overflow: hidden;
    background: #fff;
}

.content p {
    padding: 0 0 0 10px;
}

.main,
.content {
    float: left;
    background: #fff;
}

.product {
    width: 150px;
    padding: 10px 0 0 10px;
    display: inline-block;
    text-align: center;
    font-size: 11px;
    line-height: 14px;
    text-decoration: none;
    margin-bottom: 20px;
    overflow: hidden;
}

.product a {
    text-decoration: none;
}

.product a:hover {
    text-decoration: underline;
}

.productImage{
  height:75vh;
}

footer{
width:90%;
}

.info h3,
.productinfo h3 {
    background: #22697F;
    line-height: 36px;
    padding: 5px 0 5px 20px;
    letter-spacing: 1px;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    font: 10pt Verdana;
    text-transform: uppercase;
}
.botBorder.clearFix{
      display: flex;
    align-items: center;
}

@media (max-width:155px){
  footer{
    width:90%;
  }
}
@media (max-width:1100px) {
    footer{
      width:88%;
      padding:50px;
    }
}
@media (max-width:700px){
  .productImage{
    height:auto;
    width:100%;
    margin-right : 0px
  }
}
</style>