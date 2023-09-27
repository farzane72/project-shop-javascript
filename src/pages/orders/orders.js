import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";
import { Link } from "../../components/link/link";
import { getData } from "../../services/api/getData";
import { GetLocalStorage } from "../../services/localstorage";
import { Cart } from "../../components/cart/cart";
import { NotFound } from "../../components/notFound/notFound";
let array=[]

export default function Orders(data){
  //  renderOrdersProducts({status:false,text2:'Track Order',text1:'In Delivery'})
   //data()
    return El({
        element:"div",
        className:'p-4',
        child:[
            El({
                element:'div',
                className:'flex items-center justify-between',
                child:[
                    El({
                        element:'div',
                        className:'flex gap-4 items-center',
                        child:[
                            El({
                                element:'span',
                                className:'',
                                innerHTML:svgs.LogoSvg2
                            }),
                            El({
                                element:'span',
                                className:'font-bold text-xl',
                                innerHTML:'My Orders'
                            })
                            
                        ]
                
                    }),
                    Link({
                        to:'/search',
                        child:El({
                            element:'span',
                            className:'',
                            innerHTML:svgs.SearchSvg2
                            
                    
                        })
                    })  
                ]
        
            }),
            El({
                element:'div',
                className:' flex justify-center ',
                child:[
                    El({
                        element:'div',
                        className:'text-center text-black  border-b-2   border-black w-1/2 pb-2  cursor-pointer font-bold mb-2',
                        id:'active',
                        child:'Active',
                        onclick(){
                           // renderOrdersProducts({status:false,text2:'Track Order',text1:'In Delivery'})
                           let resultClick=document.getElementById('result-click')
                           resultClick.innerHTML=''
                           data.map(d=>{
                            resultClick.appendChild( Cart({
                                type:'order',
                                 src:d.images[0],
                                 namePro:d.namePro,
                                 color:d.selectedColor,
                                 size:d.selectedSize,
                                //  color:d.color[0],
                                //  size:d.size[0],
                                 qty:d.countPro,
                                 price:d.price,
                                 text1:'In Delivery',
                                 text2:'Track Order',
                             }))
                        })
                            let active=document.getElementById('active')
                            let complete=document.getElementById('complete') 
                            complete.classList.add('text-gray-400','border-gray-400')
                            complete.classList.remove('text-black','border-black')
                            active.classList.add('text-black','border-black')
                            active.classList.remove('text-gray-400','border-gray-400')
                            
                        }
                    }),
                    El({
                        element:'div',
                        className:' text-center text-gray-400  border-b-2 border-gray-400  w-1/2 pb-2 cursor-pointer font-bold mb-2',
                        id:'complete',
                        child:'Complete',
                        onclick(){
                            renderOrdersProducts({status:true,text2:'Leave Review',text1:'Completed'})
                            let active=document.getElementById('active')
                            let complete=document.getElementById('complete')
                            complete.classList.remove('text-gray-400','border-gray-400')
                            complete.classList.add('text-black','border-black')
                            active.classList.remove('text-black','border-black')
                            active.classList.add('text-gray-400','border-gray-400')
                        }
                    }),
                ]
            }),
            El({
                element:'div',
                className:'relative',
                id:'result-click',
                child:data.map(d=>{
                    return Cart({
                        type:'order',
                         src:d.images[0],
                         namePro:d.namePro,
                         color:d.color[0],
                         size:d.size[0],
                         qty:d.countPro,
                         price:d.price,
                         text1:'In Delivery',
                         text2:'Track Order',
                     })
                }) 
            }),
            
        ]
    })
}

function renderOrdersProducts({status,text1,text2}){
    let usersId=GetLocalStorage("usersId")
    let resultClick=document.getElementById('result-click')
    resultClick.innerHTML=''
    console.log( usersId);
    getData({ endPoint:'orders', params:`?status=${status} `})
    .then((data)=>{
        if(data.length>=1){
            let newArray=[]
            data.forEach(e=>{
                e.products.forEach(e1=>{
                        newArray.push(e1);
                    });
                })
                console.log(newArray);
                newArray.forEach(e => {
                    resultClick.appendChild(Cart({
                       type:'order',
                        src:e.images[0],
                        namePro:e.namePro,
                        color:e.color[0],
                        size:e.size[0],
                        qty:e.countPro,
                        price:e.price,
                        text1:text1,
                        text2:text2,
                    }))
                }) 

        }
        else{
            resultClick.appendChild(NotFound({
                title:`You don't have an order yet`,
                des:`You don't have any orders this time`
            }))

        }
        

    })
    

}
// function data(){
   
//     getData({ endPoint:'orders', params:`?status=false `})
//     .then((data)=>{
//             data.forEach(e=>{
//                 e.products.forEach(e1=>{
//                         array.push(e1);
//                     });
//                 })
//                return array 
//     })
    

// }