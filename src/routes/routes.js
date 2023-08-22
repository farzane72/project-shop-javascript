//import El from "../utils/El"
import Navigo from "navigo"
import Search from "../pages/search/search"
import Order from "../pages/orders/order"
import Master from "../pages/Master/master"
import Home from "../pages/home/home"
import { StartPage } from "../pages/startPage/startPage"
import Cookies from "js-cookie"
//import { Login } from "../components/login/login"
import { Products } from "../pages/products/products"
import { SingleProduct } from "../pages/product/singleProduct"
import { getData } from "../services/api/getData"
import axios from "axios";


export const applyRouting =(child)=>{
    const routEl=document.getElementById('app') 
    routEl.innerHTML=''

    Cookies.get('token')
    ?routEl.appendChild(child)
    :routEl.appendChild(StartPage())
}

// export const applyRouting=function (child=''){
//     const routEl=document.getElementById('app') 
//     //
//     routEl.innerHTML=''
//     routEl.append(child)
// }

 const router =new Navigo('/')
    
export const Routes=()=>{
    //const routEl=document.getElementById('app') 
    //
    router.on('/',function(match){
        applyRouting(Master(Home())) 

    }).resolve()

    // router.on('/startpage',function(match){
    //     applyRouting(StartPage()) 

    // }).resolve()

    router.on('/order',function(match){
        applyRouting(Master(Order())) 

    }).resolve()

    router.on('/search',function(match){
        applyRouting(Search()) 

    }).resolve()


//     router.on('/products/:id',function(match){
//         fetch(`http://localhost:3000/products/${match.data.id}`)
//         .then(data =>{
//             applyRouting(Products(data))
//         })
//    }).resolve()



   router.on('/products/:id', async function(match){
   await getData({
        endPoint:'products',
        params:`brand=${match.data.id}`
       }).then(data =>{
        applyRouting(Products(data))
    })
}).resolve()

router.on('/products/singleproduct/:id',function(match){
    //axios(`http://localhost:3000/products/${match.data.id}`)
    getData({
        endPoint:'products/',
        params:`${match.data.id}`
       }).then(data =>{
       applyRouting(SingleProduct(data))
   })
}).resolve()

// axios(`http://localhost:3000/products?brand=${match.data.id}`)
    // router.on('/products/:id',function(match){
    //     applyRouting(singleProduct())

    // }).resolve()

    return router
}



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