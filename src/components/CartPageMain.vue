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
                    <li><h5>In Stock:</h5></li>
                   <li><h5>Primary Fiber:</h5> 100% Wool</li>
                   <li><h5>Specific Fiber:</h5> 100% Pure New Wool</li>
                   <li><h5>Physical Weight:</h5> 100g</li>
                   <li><h5>Description:</h5> The classic Cascade 220 Wool is the perfect combination of affordability, quality and versatility that can be used for a wide range of projects.
               </li>
                 </ul>
               <div class="deletecartbuttons">
                    <a disabled>Delete</a>
                    <a><router-link :to="`/transaction/${product.id}`">Place Order</router-link></a>
                    <a>Share</a>
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
   import {Swiper, SwiperSlide} from 'swiper/vue'
   import 'swiper/css'
   import 'swiper/css/pagination'
   import 'swiper/css/navigation'
   import {Autoplay, Navigation, Pagination} from 'swiper/modules';
   import axios from 'axios';

   export default{
      name : "CartMainPage",
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
        this.addtocart();
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
        addtocart(){
          const productid = this.$route.params.id;
          console.log("id is : ",productid);
          axios.get(`/api/products/${productid}`).then(response => {
          console.log("data is: ",response.data);
        this.product = response.data;
      }).catch(error => {
        console.log("Error in fetching product:", error);
      });
        }
      },
      watch: {
    '$route.params.id': 'addtocart'
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

.specs{
    padding:0px;
}

th {
    text-align: left;
    padding: 5px;
    color: #ffffff;
    background: #3498db;
    font-weight: normal;
}

tr:focus {
    margin: 9px;
    background: #bbb9b90f;
}

td {
    padding: 10px 30px;
    border: 1px solid #cacacabd;
}

td input {
    width: 40px;
    height: 30px;
    padding: 5px;
}

td a {
    color: #3498db;
    font-size: 12px;
}

td img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
}


td:last-child {
    text-align: right;
}

th:last-child {
    text-align: right;
}

td button {
    width: 100%;
    margin: 10px 0px;
    margin-right: 33px;
}

tr.noorder td {
    background-color: white;
    padding: 15px;
    border: none;
    text-align: end;
    color: gray;
}

.offer {
    background: radial-gradient(#fff, #ffd6d6);
    margin-top: 80px;
    padding: 30px 0;
}

.col-2 .offer-img {
    padding: 50px;
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