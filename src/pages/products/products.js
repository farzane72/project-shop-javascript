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
                        className:'font-bold text-xl  capitalize',
                       // child:'hello brand' [ ج ذاذ]
                        child:data[0].brand
                            
                        
                    }),
                    
                ]
            }),
            El({
                element:'div',
                className:'grid grid-cols-2 my-4 p-2',
                id:'',
                child:data.map((element)=>{
                return  Product({
                            src:`${element.images[0]}`,
                            title:element.name,
                            price:element.price
                        })

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
