import El from "../../utils/El";
import { Link } from "../../components/link/link";
import { svgs } from "../../components/svg/svg";
import Button from "../../components/button/button";
import { getData } from "../../services/api/getData";
import { Product } from "../../components/product/product";

export const Popular=()=>{
    return El({
        element:'div',
        className:'p-2',
        id:'',
        child:[
            El({
                element:'div',
                className:'flex gap-2 items-center',
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
                        className:'text-large font-bold',
                        id:'',
                        child:'Most Popular'
                            
                    })
                    
                ]
            }),
            El({
                element:"div",
                className:"product-scroller",
                child:  El({
                  element: "div",
                  className: "scroller " ,
                  child:[
                    Button({
                        element:'button',
                        className:'focus:bg-slate-900 focus:text-white ',
                        variant:'outlined',
                        id:'',
                        child:'All',
                        onclick(e){
                          renderData({
                            endPoint:'products',
                            params:``
                           })
                        }
                        }),
                        Button({
                          element:'button',
                          className:'focus:bg-slate-900 focus:text-white',
                          variant:'outlined',
                          id:'',
                          child:'Nike',
                          onclick(e){
                            renderData({
                              endPoint:'products',
                              params:`?brand=nike`
                             })
                            
                          }
                          }),
                          Button({
                            element:'button',
                            className:'focus:bg-slate-900 focus:text-white',
                            variant:'outlined',
                            id:'',
                            child:'Adidas',
                            onclick(e){
                              renderData({
                                endPoint:'products',
                                params:`?brand=adidas`
                               })
                              
                            }
                            }),
                            Button({
                              element:'button',
                              className:'focus:bg-slate-900 focus:text-white',
                              variant:'outlined',
                              id:'',
                              child:'Puma',
                              onclick(e){
                                renderData({
                                  endPoint:'products',
                                  params:`?brand=puma`
                                 })
                                
                              }
                              }),
                              Button({
                                element:'button',
                                className:'focus:bg-slate-900 focus:text-white',
                                variant:'outlined',
                                id:'',
                                child:'Asics',
                                onclick(e){
                                  renderData({
                                     endPoint:'products',
                                     params:`?brand=asics`
                                    })
                                  
                                  
                                 }
                                }),
                                Button({
                                  element:'button',
                                  className:'focus:bg-slate-900 focus:text-white',
                                  variant:'outlined',
                                  id:'',
                                  child:'Reebok',
                                  onclick(){
                                    renderData({
                                      endPoint:'products',
                                      params:`?brand=reebok`
                                     })
                                  }
                                  }),
                                  Button({
                                    element:'button',
                                    className:'focus:bg-slate-900 focus:text-white',
                                    variant:'outlined',
                                    id:'',
                                    child:'New Ba',
                                    onclick(){
                                      renderData({
                                        endPoint:'products',
                                        params:`?brand=newba`
                                       })
                                    }
                                    }),
                                    Button({
                                      element:'button',
                                      className:'focus:bg-slate-900 focus:text-white',
                                      variant:'outlined',
                                      id:'',
                                      child:'Converse',
                                      onclick(){
                                        renderData({
                                          endPoint:'products',
                                          params:`?brand=converse`
                                         })
                                      }
                                      }),
                                      Button({
                                        element:'button',
                                        className:'focus:bg-slate-900 focus:text-white',
                                        variant:'outlined',
                                        id:'',
                                        child:'More',
                                        onclick(){
                                          // renderData({
                                          //   endPoint:'products',
                                          //   params:`brand=Converse`
                                          //  })
                                        }
                                        }),
                    
  
                  ]
                }),
              }),

              El({
                element: "div",
                className: " mt-4",
                child: El({
                  element: "div",
                  id:"sec-products",
                  className: "grid  grid-cols-2  md:grid-cols-4  ",
                  child:[
                    renderData({
                      endPoint:'products',
                      params:``
                     })
                  ]
                }),
              }),

        ]
    })
}

function renderData({endPoint, params}){
    getData({endPoint,params})
    .then((data)=>{
       let secProducts=document.getElementById('sec-products')
       secProducts.innerHTML=''
       data.forEach(element => {
         secProducts.appendChild(Product({
            id:element.id,
           src:`${element.images[0]}`,
           title:element.name,
           price:element.price
         }))
         })
    } )
  
  
  }

