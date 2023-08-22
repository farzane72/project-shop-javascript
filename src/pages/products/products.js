import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";
import { Product } from "../../components/product/product";
import { Link } from "../../components/link/link";


//Link({ to: `/products/${brandsName}`, child:brandsName}),


export const Products=(data)=>{
    console.log(data);
    return El({
        element:'div',
        className:'',
        child:[
            El({
                element:'div',
                className:'flex gap-2',
                child:[
                    Link({ to: `/`,
                     child: El({
                        element:'span',
                        className:'cursor-pointer',
                        innerHTML:svgs.ArrowLeftSvg,
                       
                               
                    })
                    }),
                    El({
                        element:'span',
                        className:'font-bold text-xl',
                       // child:'hello brand' [ ج ذاذ]
                        child:data[0].brand
                            
                        
                    }),
                    
                ]
            }),
            El({
                element:'div',
                id:'pro-brand',
                className:'grid grid-cols-2 mt-4 p-2',
                child:El({
                    element:'div',
                    className:'',
                    id:'',
                    
                   child:renderData(data)
                    // Product({
                    //          src:`${data[0].images[0]}`,
                    //          title:data[0].name,
                    //          price:data[0].price
                    //        })
                    //       })



                   // data.forEach(element => {
                       // console.log(element);
                            // Product({
                            //      src:`${element.images[0]}`,
                            //      title:element.name,
                            //      price:element.price
                            //    })
                             //  })
                    

                       // renderData(data)
                      
                    
                })
            })
        ]
    })
}


function renderData(data){
   console.log(data)
      // let brandsProducts=document.getElementById('pro-brand')
      // console.log(brandsProducts)
      // brandsProducts.innerHTML=''
      //setTimeout(()=>{

       // let brandsProducts=document.getElementById('pro-brand')
       // brandsProducts.innerHTML=''
        data.forEach(element => {
            // brandsProducts.appendChild(
                  Product({
                 src:`${element.images[0]}`,
                 title:element.name,
                 price:element.price
               })
           // )
        })
     // } , 100)
        
       //console.log(brandsProducts) 
    } 
