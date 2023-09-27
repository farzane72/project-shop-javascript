import El from "../../utils/El";
//import Loading from "../../components/loading/loading";
import { svgs } from "../../components/svg/svg";
import Header from "../../components/header/header";
import Brand from "../../components/brands/brand";
import Button from "../../components/button/button";
import { Product } from "../../components/product/product";
import { getData } from "../../services/api/getData";
import { Link } from "../../components/link/link";
import { SearchHome } from "../search/searchHome";

export default function Home() {
  let test=""
  
  return El({
    element: "div",
    className: "h-full relative sm:container md:container mx-auto p-2 ",
  
    child: [
      El({
        element: "div",
        className: "",
      //  child: Test(Loading),
      }),
      El({
        element: "div",
        className: "",
        child: [
          
          Header(),
          El({
            element: "main",
            className: " px-2 py-3   ",
            child: [
              El({
                element: "div",
                className: " relative ",
                child: [
                  El({
                    element: "input",
                    id:'searchsInputHome',
                    className: "w-full bg-gray-100 rounded-md pl-6 py-2",
                    placeholder: "Search",
                    type:'search',
                    
                    onchange(){
                      let searchsInputHome=document.getElementById('searchsInputHome')
                      let searchsTitle=searchsInputHome.value.trim()
                      let titlesResult=document.getElementById('result-title')
                      let closeIcon=document.getElementById('close-icon')
                      
                      searchsTitle?
                          getData({
                            endPoint: "products",
                            params: `?name_like=${searchsTitle}`,
                          }).then((data) => {
                              //  if(data.length>0){
                                  titlesResult.innerHTML=''
                                  titlesResult.classList.remove('hidden')
                                  closeIcon.classList.remove('hidden')
                                  data.forEach(element => {
                                  //titlesResult.innerHTML +=`\n ${element.name}   \n  `;
                                  titlesResult.appendChild(SearchHome({
                                    id:element.id,
                                    title:element.name,
                                    
                                })) 
                              })

                           // }
                            // else{
                            //   titlesResult.appendChild(SearchHome({
                                
                            //     title:"Not Found",
                                
                            // })) 

                            // }
                            
                            
                     
                      })
                      :
                      titlesResult.classList.add('hidden')

                    }
                  }),
                  El({
                    element: "span",
                    className: "absolute left-0 top-3 pl-1 ",
                    innerHTML: svgs.SearchSvg,
                  }),
                  El({
                    element: "span",
                    className: "absolute left-0 top-8 right-0  bg-gray-100  flex flex-col mb-2 hidden z-[1000] ",
                    id:'result-title',
                    child:''
                  }),
                  El({
                    element: "span",
                    className: "absolute  top-8 right-4 hidden  z-[10000]",
                    id:'close-icon',
                    innerHTML:svgs.CloseSvg,
                    onclick(){
                      let closeIcon=document.getElementById('close-icon')
                      let searchsInputHome=document.getElementById('searchsInputHome')
                      //let searchsTitle=searchsInputHome.value.trim()
                      let titlesResult=document.getElementById('result-title')
                      titlesResult.classList.add('hidden')
                      closeIcon.classList.add('hidden')
                      searchsInputHome.value=''

                    }
                  }),
                  
                ],
              }),
              El({
                element: "div",
                className: "mt-6 ",
                child: El({
                  element: "div",
                  className: "grid grid-cols-4 justify-items-center gap-6",
                  child: [
                    Brand({
                      src: "../public/images/b-nike.png",
                      brandsName: "nike",
                    }),
                    Brand({
                      src: "../public/images/b-adidas.png",
                      brandsName: "adidas",
                    }),
                    Brand({
                      src: "../public/images/b-puma.png",
                      brandsName: "puma",
                    }),
                    Brand({
                      src: "../public/images/b-asics.png",
                      brandsName: "asics",
                    }),
                    Brand({
                      src: "../public/images/b-reebok.png",
                      brandsName: "reebok",
                    }),
                    Brand({
                      src: "../public/images/b-Newba.png",
                      brandsName: "newba",
                    }),
                    Brand({
                      src: "../public/images/b-converse.png",
                      brandsName: "converse",
                    }),
                    Brand({
                      src: "../public/images/more.png",
                      brandsName: "More...",
                    }),
                  ],
                }),
              }),
              El({
                element: "div",
                className: "",
                child:[
                  El({
                    element: "div",
                    className: "flex justify-between mt-6",
                    child:[
                      Link({
                        to:'/popular',
                        child: El({
                          element: "p",
                          className: "font-bold text-xl cursor-pointer",
                          child:'Most Popular' 
                        })
                      }),
                      El({
                        element: "p",
                        className: "cursor-pointer",
                        child:'See All'
                      }),
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
                            className:' focus:bg-slate-900 focus:text-white',
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
                                      
                                    //   setTimeout(() => {
                                    //     let secProducts=document.getElementById('sec-products')
                                    //     secProducts.innerHTML=''
                                    //     test.forEach(element => {
                                    //      // console.log(element.images);
                                    //       secProducts.appendChild(Product({
                                    //         src:`${element.images[0]}`,
                                    //         title:element.name,
                                    //         price:element.price
                                    //       }))
                                    //       })
                                       
                                    //   }
                                    //   ,1000)
                                      
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
                    className: " mt-6 mb-10",
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
              }),
            ],
          }),
        ],
      }),
    ],
  });
  // }
}
// function test(loading){
//     loading()
//     let active=document.getElementById('active')
//     console.log(active)

// }
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