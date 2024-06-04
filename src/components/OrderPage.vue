<template>
    <HeaderComponent/>
    <OrderPageMain/>
    <MainFooter/>
</template>
<script>
  import OrderPageMain from '@/components/OrderPageMain.vue'
  import MainFooter from '@/components/MainFooter.vue'
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import '/src/stylesheets/ResponsiveCartOrderPageStyling.css'
    export default{
        name:"OrderPage",
        components : {
        HeaderComponent,
          OrderPageMain,
          MainFooter
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700');
body {
    background: url('http://all4desktop.com/data_images/original/4236532-background-images.jpg');
    font-family: 'Roboto Condensed', sans-serif;
    color: #262626;
}
  .title {
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0, #5195A8), color-stop(100, #70EAFF));
    background: -moz-linear-gradient(top left, #5195A8 0%, #70EAFF 100%);
    background: -ms-linear-gradient(top left, #5195A8 0%, #70EAFF 100%);
    background: -o-linear-gradient(top left, #5195A8 0%, #70EAFF 100%);
    background: linear-gradient(to bottom right, #5195A8 0%, #70EAFF 100%);
    border-radius: 5px 5px 0 0;
    padding: 20px;
    color: #f6f6f6;
}
.container {
    width: 100%;
    padding: 0px 15px;
    margin: 80px auto;
    background:white;
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}

h2 {
    margin: 0;
    padding-left: 15px;
}

td {
    border-bottom: 1px solid #dadada;
    padding: 25px 25px 25px 0;
}

table {
    margin: 0;
    padding: 0;
}

th {
    border-bottom: 1px solid #dadada;
    padding: 10px 0;
}

tr>td:nth-child(1) {
    text-align: left;
    color: #2d2d2a;
}

tr>td:nth-child(2) {
    text-align: right;
    color: #52ad9c;
}

p {
    display: block;
    color: #888;
    margin: 0;
    padding-left: 25px;
}


button {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 30px;
    background: #52ad9c;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
}

button:hover {
    cursor: pointer;
    background: #428a7d;
}
</style>