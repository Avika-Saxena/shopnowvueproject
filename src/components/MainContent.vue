<template>
<section>
<div class="section0" id="sections" data-aos="fade-up-right" data-aos-duration=1000>
        <div class="card banner">
            <h1 class="title">Our Featured Services</h1>
            <h5 class="sub-title">Discover Our Top Services for Your Business</h5>
        </div>

        <div class="card inline-photo show-on-scroll">
            <i class="fa fa-thumbs-up"></i>
            <h3>User-Friendly Navigation</h3>
        </div>
        <div class="card inline-photo show-on-scroll">
            <i class="fa fa-line-chart"></i>
            <h3>Home Delivery Services</h3>
        </div>
        <div class="card inline-photo show-on-scroll">
            <i class="fa fa-users"></i>
            <h3>Order Placement</h3>
        </div>
        <div class="card inline-photo show-on-scroll">
            <i class="fa fa-phone"></i>
            <h3>Order Tracking</h3>
        </div>
    </div>


    <!--CONTAINER-->
    <div class="container" id="about" ref="aboutsection" data-aos="fade-down-left" data-aos-duration=1000>
        <table>
            <tr>
                <td class="tdimg">
                    <img src="/images/img5-removebg-preview.png" class="inline-photo show-on-scroll" alt="About Us">
                </td>
                <td class="tdcontent">
                    <h1 class="sub-title">About ShopNow</h1>
                    <h4 class="title">Your Ultimate Destination for Online Shopping</h4>
                    <p>Welcome to our ecommerce platform, where you can explore a wide range of products from the comfort of your home. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Start browsing now and discover a world of convenience and choice. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#moreaboutus" class="btn2">Discover More</a>
                </td>
            </tr>
        </table>
    </div>



    <div class="slick" id="moreaboutus" data-aos="fade-up-right" data-aos-duration=1000>
        <div class="banner">
            <h1 class="title">How You Can Benifit </h1>
            <h5 class="sub-title">Bringing New IT Business solutions and ideas</h5>
        </div>
        <table>
            <tr>
                <td>
                    <ul>
                        <li>
                            <h3>Wide Product Discovery</h3>
                            <p>Explore a vast range of products tailored to your preferences and needs.</p>
                        </li>
                        <li>
                            <h3>Efficient Shopping Experience</h3>
                            <p>Enjoy a seamless shopping journey with intuitive navigation and easy checkout.</p>
                        </li>
                        <li>
                            <h3>Secure Payment Processing</h3>
                            <p>Shop with confidence knowing that your transactions are secure and protected.</p>
                        </li>
                    </ul>
                </td>
                <td>
                    <div class="card inline-photo show-on-scroll">
                        <div class="card_part card_part-one">
                        </div>

                        <div class="card_part card_part-two">
                        </div>

                        <div class="card_part card_part-three">
                        </div>

                        <div class="card_part card_part-four">
                        </div>
                    </div>
                </td>
                <td>
                    <ul>
                        <li>
                            <h3>Responsive Customer Support</h3>
                            <p>Get assistance from our dedicated support team whenever you need help.</p>
                        </li>
                        <li>
                            <h3>Regular Updates and Promotions</h3>
                            <p>Stay informed about the latest products, deals, and promotions through regular updates.</p>
                        </li>
                        <li>
                            <h3>Convenient Delivery Options</h3>
                            <p>Choose from various delivery options to get your purchases delivered at your convenience.</p>
                        </li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>


<div class="featured-Products" data-aos="fade-down-left" data-aos-duration=1000>
  
  <h2>Featured Products</h2>
  
  <div class="product" v-for="product in products" :key="product.id">
    <img :src="product.image" class="product-photo">
    
    <i class="fa fa-shopping-basket basket"></i>
    
    <p class="sale">Sale!</p>
    
    <div class="product-content">
      <p class="name">
        {{product.title}}
      </p>
      <p class="category">
        {{product.description}}
      </p>
      <p class="price">
        {{product.price}}/-
      </p>
      <p class="stars">
        <i class="fa fa-star-o"></i>
        <i class="fa fa-star-o"></i>
        <i class="fa fa-star-o"></i>
        <i class="fa fa-star-o"></i>
        <i class="fa fa-star-o"></i>
        <i class="fa fa-star-o"></i>
      </p>
     </div>
   </div>
</div>
<!---featured products ----->


<div id="contact" ref="contactsection" class="limited-Offer" data-aos-duration=3000>
  <div class="offer-content">
    <div class="content-box">
    <p class="offer">
      Feel free to ask any quesries
    </p>
    <h3>
      Contact Us
    </h3>
    <p class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </p>
    <p class="offer">
      Send query through an email
    </p>
    <form >
    <textarea></textarea>
    <input type="submit">
</form>
  </div>
 </div>
</div>
<!---- limited offer---->


<div class="info" data-aos-duration=1000>
  
<div class="info-section">
    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png">
    
    <h3>Worldwide Shipping</h3>
    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    
  </div>
<div class="info-section">
    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png">
    
    <h3>Best Quality</h3>
    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    
  </div>
<div class="info-section">
    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png">
    
    <h3>Best Offers</h3>
    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    
  </div>
<div class="info-section">
    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png">
    
    <h3>Secure Payments</h3>
    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    
  </div>
  
</div>
  
</section>
</template> 

<script>
    import '/src/stylesheets/HomeMainStyling.css'
    import axios from 'axios';
    export default{
        name : "MainContent",
        data(){
          return{
            products:[]  
          };
        },
        mounted(){
          this.fetchProducts();
        },
        methods:{
          fetchProducts(){
            axios.get(import.meta.env.VITE_API_ENDPOINT).then(response => {
              this.products = response.data.data;
            }).catch(error => {
              console.log("Unable to fetch because of this error : ",error);
            })
          }
        }
      };
    
</script>
<style>
  html {
  scroll-behavior: smooth;
}
</style>