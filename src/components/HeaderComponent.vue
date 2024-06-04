<template>
<header>
   <nav>
    <img src="/images/7ab973784d12483bc8a2f716401ec1ec-removebg-preview (1).png" class="logo">
    <ul class="menu-bar-side">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">AboutUs</router-link></li>
      <li><router-link to="/">ContactUs</router-link></li>
      <li><router-link to="/product/">Products</router-link></li>
    </ul>
      <div class="search-box" role='search' id="search-box">
         <input type="search" name="searchbox" role="form" id="searchbox"
             placeholder="Search Products and Brands" aria-labelledby="search-box">
         <img src="https://swagofindia.netlify.app/Images/magglass.png" alt="search-icon" role='icon' aria-label='magnifying glass icon'>
      </div>
      <div class="breadcrambs">
         <div class="breadcrambscontent">
            <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">AboutUs</router-link></li>
      <li><router-link to="/">ContactUs</router-link></li>
      <li><router-link to="/product/">Products</router-link></li>
         </div>
         </div>
  </nav>
</header>
</template>
<script>
   export default{
      name : "HeaderComponent",
   }
</script>

<style scoped>
    header{
    height:14vh;
    background : transparent;
    position:relative;
    top:0;
    }
    header nav{
    background:rgb(37 93 126);;
    }
    .breadcrambs{
      width:130px;
      height:60px;
      background-image: url("/269dd16fa1f5ff51accd09e7e1602267-removebg-preview.png");
      background-size: 100% 100%;
          right: 50px;
    top: 36px;
    display:none;
    }
    .breadcrambscontent{
          width: 200px;
    padding: 10px;
    background: white;
    position: relative;
    top: 34px;
    right: 106px;
    box-shadow: 0 0 6px gray;
    display:none;
    }

    .breadcrambs:hover .breadcrambscontent{
      display:block;
    }
    
@media (max-width:1010) {
    .breadcrambs {
        display: block;
    }
    .breadcrambscontent {
        width: 200px;
        padding: 10px;
        background: white;
        position: relative;
        top: 34px;
        right: 106px;
    }
}
</style>