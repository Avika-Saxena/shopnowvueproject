
   <!--<link rel="stylesheet" href="../stylesheets/profilestyle.css">
<link rel="stylesheet" href="../stylesheets/cartpagestyling.css">
    <script>
        function calc(v, productid) {
            var element = document.getElementsByClassName('quantity-input');
            var index = Array.prototype.indexOf.call(element, v);
            var quantity = document.getElementsByName("quantity")[index].value;
            var priceelement = document.getElementsByClassName("ticket_price")[index];
            var price = priceelement.innerText;
            var total = quantity * price;
            document.getElementsByClassName("totalprice")[index].innerText = total;
            updateQuantity(productid, quantity);
        }

        function updateQuantity(productid, quantity) {
            var xhr = new XMLHttpRequest();
            console.log(quantity);
            xhr.open("POST", `/updateQuantity/${productid}`, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log("Quantity updated successfully");
                }
            };
            var data = JSON.stringify({
                quantity: quantity
            });
            xhr.send(data);
        }
    </script>-->
<template>
    <div class="nav">
        <input type="checkbox" id="nav-check">
        <div class="nav-header">
            <div class="nav-title">
                shopNow
            </div>
        </div>
        <div class="nav-btn">
            <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
            <a href="/homepage" target="_blank">Home</a>
            <a href="/profile">MyProfile</a>
            <a href="/productcollection" target="_blank">Dashboard</a>
            <a href="/cartpage" target="_blank">My-Cart</a>
            <a href="/orderpage" target="_blank">My-Orders</a>
            <form class="logout-form" action="/logout" method="post">
                <button>Logout</button>
            </form>
        </div>
    </div>
    <!--<% if (messages.success) {   -->
        <div class="alert alert-warning" role="alert" style="    width: 23%;
        text-align: center;
        background: #8ed38ecf;
        border: solid 1px green;
        margin-left: 40%;
        margin-top: 3%;
        position: absolute;
        padding: 6px 19px;
        color: green;
        border-radius: 9px;">
        </div>

            <div class="small-container cart-page">
                <table>
                    <tr>
                        <th>ProductID</th>
                        <th>Productimage</th>
                        <th>Productname</th>
                        <th>Productdesc</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>TraceOrder</th>
                        <th>CancelOrder</th>
                    </tr>
                        <tr class="noorder">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>"No Order placed "</td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                            <tr>
                                <td>
                                    products.product_id
                                </td>
                                <td>
                                    <div class="cart-info">
                                        <img src="/images/products.productimage" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <h4>
                                          products.productname   
                                    </h4>
                                </td>
                                <td>
                                    <p>
                                          products.productdesc   
                                    </p>
                                </td>
                                <td>
                                    <p>
                                          orderItems[index].quantity   
                                    </p>
                                </td>
                                <td>
                                    <small class="ticket_price">  orders[index].total_amount   </small>
                                </td>
                                <td>
                                    <small class="ticket_price">  orders[index].status   </small>
                                </td>
                                <td class="cancelbutton"><button onclick="cancelorder('  orders[index].order_id   ')">Cancel</button></td>

                            </tr>
                </table>
            </div>

            <!-- Footer -->
            <div class="footer ">
                <div class="container ">
                    <div class="row ">
                        <div class="footer-col-1 ">
                            <h3>Download Our App</h3>
                            <p>Download App for Android and iso mobile phone.</p>
                            <div class="app-logo ">
                                <img src="https://i.ibb.co/KbPTYYQ/play-store.png " alt=" " />
                                <img src="https://i.ibb.co/hVM4X2p/app-store.png " alt=" " />
                            </div>
                        </div>

                        <div class="footer-col-2 ">
                            <p>
                                Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.
                            </p>
                        </div>

                        <div class="footer-col-3 ">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>

                        <div class="footer-col-4 ">
                            <h3>Follow us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>YouTube</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p class="copyright ">Copyright &copy; 2021 - Red Store</p>
                </div>
            </div>
        </template>
            <!--<script>
                var MenuItems = document.getElementById('MenuItems');
                MenuItems.style.maxHeight = '0px';

                function menutoggle() {
                    if (MenuItems.style.maxHeight == '0px') {
                        MenuItems.style.maxHeight = '200px';
                    } else {
                        MenuItems.style.maxHeight = '0px';
                    }
                }
            </script>
            <script src="/javascripts/js2.js"></script>-->