<template>
   <div class="bodyWrap">    
        <div class="productStage">   
         <div class="botBorder clearFix">
            <div class="productImage" v-if="product">
              <img :src="product.image">
            </div>
            <div class="overview" v-if="product">
              <h2>{{product.title}}</h2>
                 <ul class="specs">
                    <li><h5>Price:</h5>{{product.price}}</li>
                    <li><h5>In Stock:</h5>{{product.popularity}}</li>
                   <li><h5>Primary Fiber:</h5> 100% Wool</li>
                   <li><h5>Specific Fiber:</h5> 100% Pure New Wool</li>
                   <li><h5>Physical Weight:</h5> 100g</li>
                   <li><h5>Description:</h5> {{product.description}}
               </li>
                 </ul>
               <div class="deletecartbuttons">
                    <a>TraceOrder</a>
                    <a>CancelOrder</a>
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
</template>
<script>
  import axios from 'axios';
   import {Swiper, SwiperSlide} from 'swiper/vue'
   import 'swiper/css'
   import 'swiper/css/pagination'
   import 'swiper/css/navigation'
   import {Autoplay, Navigation, Pagination} from 'swiper/modules';
   export default{
      name : "OrderMainPage",
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
          product : null,
          products : []
        }
      },
      mounted(){
        this.fetchProducts();
        this.orderproduct();
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
        orderproduct(){
          const id = this.$route.params.id;
          console.log(id)
          axios.get(`/api/products/${id}`).then(response =>{
            this.product = response.data;
          }).catch(error => {
            console.log("Found Error : ",error);
          })
        }
      },
      watch:{
      '$route.params.id' : 'orderproduct'
      }
   }
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

.info h3,
.productinfo h3 {
    background: #22697F;
    line-height: 36px;
    padding: 5px 0 5px 20px;
    border-radius: 4px;
    letter-spacing: 1px;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    font: 10pt Verdana;
    text-transform: uppercase;
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

.botBorder {
    padding: 25px;
}

.botBorder.clearFix{
    border-bottom: solid 1px #e6e6e6;
    display:flex;
}

.productStage{
    width:97.5%;
    margin:25px;
}

.sidebar{
    height:100vh;
}

.deletecartbuttons{
    display:flex;
    gap:30px;
}

.productImage img{
    width:50%;
}

.productImage{
    margin: 5px;
}

@media (max-width:1555px){
    .info{
     width:100%;
    }
}
@media (max-width:950px){
    .productStage{
        width:100%;
        margin: 0px;
    }
}
</style>