//import El from "../utils/El"
import Navigo from "navigo";
import Search from "../pages/search/search";
import Orders from "../pages/orders/orders";
import Master from "../pages/Master/master";
import Home from "../pages/home/home";
import { StartPage } from "../pages/startPage/startPage";
import Cookies from "js-cookie";
//import { Login } from "../components/login/login"
import { Products } from "../pages/products/products";
import { SingleProduct } from "../pages/product/singleProduct";
import { getData } from "../services/api/getData";
import { Popular } from "../pages/popular/popular";
import { GetLocalStorage } from "../services/localstorage";
import { MyCart } from "../pages/myCart/cart";
import { Checkout } from "../pages/checkout/checkout";
import { ChooseShipping } from "../pages/chooseShipping/ChooseShipping";
import { ShippingAddress } from "../pages/shippingAddress/ShippingAddress";
import { PeymentMethods } from "../pages/payment/peymentMethods";
//import axios from "axios";

export const applyRouting = (child) => {
  const routEl = document.getElementById("app");
  routEl.innerHTML = "";

  Cookies.get("token")
    ? routEl.appendChild(child)
    : routEl.appendChild(StartPage());
};

// export const applyRouting=function (child=''){
//     const routEl=document.getElementById('app')
//     //
//     routEl.innerHTML=''
//     routEl.append(child)
// }
let usersData = "";
const router = new Navigo("/");

export const Routes = () => {
  //const routEl=document.getElementById('app')
  //
  router
    .on("/", function (match) {
      applyRouting(Master(Home()));
    })
    .resolve();

  router
    .on("/orders", async function (match) {
      await getData({ endPoint:'orders', params:`?status=false `})
      .then((data)=>{
        let array=[]
              data.forEach(e=>{
                  e.products.forEach(e1=>{
                          array.push(e1);
                      });
                  }) 
                  applyRouting(Master(Orders(array)));
      })
     
    })
    .resolve();

  router
    .on("/search", function (match) {
      applyRouting(Search());
    })
    .resolve();
  router
    .on("/products/:id", async function (match) {
      console.log(typeof match.data.id);
      await getData({
        endPoint: "products",
        params: `?brand=${match.data.id}`,
      }).then((data) => {
        applyRouting(Products(data));
      });
    })
    .resolve();

  router
    .on("/products/singleproduct/:id", function (match) {
      getData({
        endPoint: "products/",
        params: `${match.data.id}`,
      }).then((data) => {
        applyRouting(SingleProduct(data));
      });
    })
    .resolve();
  router
    .on("/popular", async function () {
      await getData({
        endPoint: "products",
        params: `?popular=true`,
      }).then((data) => {
        applyRouting(Popular(data));
      });
    })
    .resolve();
  router
    .on("/mycart", function () {
      let data = GetLocalStorage("myCart");
      //.then((data) => {
      applyRouting(MyCart(data));
      // });
    })
    .resolve();
  router
    .on("/checkout", function () {
      let data = GetLocalStorage("myCart");
      applyRouting(Checkout(data));
    })
    .resolve();

  router
    .on("/shippingaddress", async function () {
      let email = GetLocalStorage("usersEmail");
      console.log(email);
      await getData({
        endPoint: "users",
        params: `?email=${email}`,
      }).then((data) => {
         console.log(data);
        applyRouting(ShippingAddress(data));
      });
    })
    .resolve();
  router
    .on("/chooseshipping", async function () {
      await getData({
        endPoint: "shippings/",
        params: ``,
      }).then((data) => {
        applyRouting(ChooseShipping(data));
      });
    })
    .resolve();
  router
    .on("/paymentmethods", function () {
      applyRouting(PeymentMethods());
    })
    .resolve();

  // router.on('/products/:id', async function(match){
  //     if(typeof(match.data.id)==String){
  //         await getData({
  //                     endPoint:'products',
  //                     params:`?brand=${match.data.id}`
  //                    }).then(data =>{
  //                     applyRouting(Products(data))
  //                 })
  //     }
  //     if(typeof(match.data.id)==Number){
  //         getData({
  //                     endPoint:'products/',
  //                     params:`${match.data.id}`
  //                    }).then(data =>{
  //                    applyRouting(SingleProduct(data))
  //                })

  //     }
  //     if(typeof(match.data.id)===Boolean){
  //         await getData({
  //                      endPoint:'products',
  //                      params:`?popular=true`
  //                     }).then(data =>{
  //                      applyRouting(Popular(data))
  //                  })

  //     }

  // }).resolve()

  return router;
};

// export const Routes = () => {
//     const routesEl = document.getElementById('routes') || El({element: 'div'})
//     routesEl.innerHTML = ''
//    // console.log(routesEl)
//     switch (location.pathname) {
//         case '/':
//             return routesEl.appendChild(Master(Home()))
//         case '/startpage':
//             return routesEl.appendChild(StartPage())
//         case '/search':
//             return routesEl.appendChild(Search())
//         case '/order':
//                 return routesEl.appendChild(Master(Order()))
//         //case '/support':
//            // return routesEl.appendChild(SupportPage())
//           // return routesEl.appendChild(SupportPage())
//         //default:
//            // return routesEl.appendChild(NotFound())
//     }
// }
// const isPrivate =(routesEl,child)=>{
//     cookies.get('token')
//     ?routesEl.appendChild(child())
//     :routesEl.appendChild(StartPage())
// }
