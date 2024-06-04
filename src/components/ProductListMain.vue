<template>

<section class="productmainsection">
<div class="Products">
    <div class="products-in" >
    <li v-for="product in sortedProducts" :key="product.id"><a @click="productdetail(product.id)">
    <div class="product-in-image"> 
      <img :src="product.image" />
    </div>
      <div class="overview">
        <h3>{{product.title}}</h3>
        <h3>{{product.price}}</h3>
        <h3>{{product.price}}</h3>
      </div>
    </a></li>
  </div>
</div>
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
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="product in products" :key="product.id"><a @click="productdetail(product.id)"><img :src="product.image" /></a></swiper-slide>
  </swiper>
</div>
<div class="Products">
    <div class="products-in">
    <li v-for="product in sortedProducts" :key="product.id"><a @click="productdetail(product.id)">
    <div class="product-in-image"> 
      <img :src="product.image" />
    </div>
      <div class="overview">
        <h3>{{product.title}}</h3>
        <h3>{{product.price}}</h3>
        <h3>{{product.price}}</h3>
      </div>
    </a></li>
  </div>
</div>
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
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="product in products" :key="product.id"><router-link :to="`/product/${product.id}`">
            <img :src="product.image" />
          </router-link></swiper-slide>
  </swiper>
</div>
<div class="Products">
    <div class="products-in">
    <li v-for="product in sortedProducts" :key="product.id"><a @click="productdetail(product.id)">
    <div class="product-in-image"> 
      <img :src="product.image" />
    </div>
      <div class="overview">
        <h3>{{product.title}}</h3>
        <h3>{{product.price}}</h3>
        <h3>{{product.price}}</h3>
      </div>
    </a></li>
  </div>
</div>
<div class="Products">
    <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :autoplay="{
      delay:2000
    }"
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
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="product in products" :key="product.id"><router-link :to="`/product/${product.id}`">
            <img :src="product.image" />
          </router-link></swiper-slide>
  </swiper>
</div>
<div class="Products">
    <div class="products-in">
    <li v-for="product in sortedProducts" :key="product.id"><a @click="productdetail(product.id)">
    <div class="product-in-image"> 
      <img :src="product.image" />
    </div>
      <div class="overview">
        <h3>{{product.title}}</h3>
        <h3>{{product.price}}</h3>
        <h3>{{product.price}}</h3>
      </div>
    </a></li>
  </div>
</div>
</section>
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
    import axios from 'axios';
    import {Swiper, SwiperSlide} from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import {Navigation} from 'swiper/modules';
    import '/src/stylesheets/HomeMainStyling.css'
    import '/src/stylesheets/ProductListMainStyling.css';
    
    export default{
        name : "ProductListMain",
        components:{
            Swiper,SwiperSlide
        },
        setup(){
            return{
                modules:[Navigation]
            }
        },
      data(){
        return{
          products : [],
          selectedSort : 'lowToHigh'
        }
      },
      computed: {
        sortedProducts() {
          if (this.selectedSort === 'lowToHigh') {
            return [...this.products].sort((a, b) => a.price - b.price);
          } else if (this.selectedSort === 'highToLow') {
            return [...this.products].sort((a, b) => b.price - a.price);
          }
          return this.products;
        }},
        mounted(){
        this.fetchProducts();
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
        productdetail(id){
          try {
            this.$router.push({ name: 'IndividualProduct', params: { id } });
          } catch (error) {
            console.error('Error during navigation:', error);
          }
        },
        updateSortOrder(order) {
          this.selectedSort = order;
        }
      }
    }
</script>

<style scoped>
    h4 {
    position: absolute;
    text-align: center;
    top: 8%;
    left: 12%;
    font-size: 18px;
    font-weight: 300;
}

.products-in{
      width: 100%;
    display: flex;
    height: 100%;
    justify-content:space-around;
}

.products-in li{
      width: 20%;
    height: 100%;
    display:flex;
    flex-direction:column;
}

.products-in li a{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition:0.5s ease-in-out
}

.products-in li a:hover{
  box-shadow: 0 0 8px #dedede;
    background: transparent;
    cursor:pointer;
}

.products-in li img{
      width: 50%;
}

.overview{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.product-in-image{
  width:95%;
  height:50%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

.overview h3{
  margin:0px;
}

@media(max-width : 1080px){
  .swiper[data-v-dc8be3df] {
    height: 70%;
    width: 90%;}
    .overview h1, .overview h2, .overview h3 {
        padding: 0;
        margin: 0;
        font-size: 13px;
    }
}

@media (max-width : 1030px){
  .productmainsection {
    background: #f0f0f0;
    width: 83.8%;
}
.swiper img {
    width: 80%;
    height: 80%;
}
}
@media (max-width : 880px){
  .productmainsection {
    background: #f0f0f0;
    width: 81.8%;
    }
}

@media (max-width : 700px){
  .productmainsection {
    background: #f0f0f0;
    width: 100%;
    }
  .products{
    margin: 20px 0px;
  }

  header .swiper img{
    width:80%;
    height:70%;
  }
}
</style>