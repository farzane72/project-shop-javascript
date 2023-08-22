import El from "../../utils/El";
import Test from "../../components/test";
import Loading from "../../components/loading/loading";
import { svgs } from "../../components/svg/svg";
//import Slider from "../sliderStart/slider";
//import Button from "../../components/button/button";
import AuthForm from "../../components/authForm/authForm";
import Header from "../../components/header/header";
import Brand from "../../components/brands/brand";
import Button from "../../components/button/button";
import { Product } from "../../components/product/product";
import { getData } from "../../services/api/getData";
import { Link } from "../../components/link/link";
export default function Home() {
  let test=""
  //if exist user retuen

  //else excute this function
  //Loading()
  //    if(true){
  //    return El({
  //     element:'div',
  //     className:'overflow-hidden',
  //     child:[
  //         El({
  //             element:'div',
  //             className:'sm:container mx-auto ',
  //             child:[
  //                 El({
  //                     element:'div',
  //                     className:'bg-white w-screen h-screen relative overflow-hidden hidden',
  //                     child:[
  //                         El({
  //                             element:'div',
  //                             className:'flex items-center gap-2 absolute top-64 left-1/2  -translate-x-1/2',
  //                             child:[
  //                                 El({
  //                                     element:'span',
  //                                     className:'font-bold text-4xl',
  //                                     child:'Shoea'
  //                                 }),
  //                                 El({
  //                                     element:'div',
  //                                     className:'w-10 h-10 bg-black rounded-full',
  //                                     child:El({
  //                                         element:'span',
  //                                         className:'flex items-center justify-center ',
  //                                         innerHTML:svgs.IconSvg
  //                                     }),
  //                                 })

  //                             ]
  //                         }),
  //                         El({
  //                             element:'div',
  //                             className:'absolute top-[90%] left-1/2  -translate-x-1/2',
  //                             innerHTML:svgs.SnniperSvg
  //                         })

  //                     ],
  //                 }),
  //                 El({
  //                     element:'div',
  //                     className:'w-screen h-screen relative hidden ',
  //                     child:[
  //                         El({
  //                             element:'img',
  //                             className:' w-full h-full',
  //                             src:'../public/images/Wallpaper1.png',
  //                         }),
  //                         El({
  //                             element:'div',
  //                             className:'absolute top-[70%] pl-4',
  //                             child:[
  //                                 El({
  //                                     element:'div',
  //                                     className:'flex gap-2 mb-2 ',
  //                                     child:[
  //                                         El({
  //                                             element:'p',
  //                                             className:'text-white text-xl font-bold',
  //                                             child:"Welcome to"
  //                                         }),
  //                                         El({
  //                                             element:'span',
  //                                             className:'w-2 h-2',
  //                                             innerHTML:svgs.HandSvg
  //                                         }),
  //                                     ]
  //                                 }),

  //                                 El({
  //                                     element:'p',
  //                                     className:'font-bold text-4xl text-white mb-2',
  //                                    child:"Shoea"

  //                                 }),
  //                                 El({
  //                                     element:'div',
  //                                     className:'text-sm text-white tracking-tight mb-2 ',
  //                                     child:"The best sneakers & shoes e-commerse app of the century for your fashion needs!"

  //                                 })

  //                             ]
  //                         }),

  //                     ],
  //                 }),

  //                 El({
  //                     element:'div',
  //                     className:'w-screen h-screen hidden ',
  //                     child:Slider({
  //                         text:'We provide high quality products just for you',
  //                         src:`../images/Wallpaper2.png`,
  //                         class1:'bg-slate-950',
  //                         class2:'bg-slate-600',
  //                         class3:'bg-slate-600',
  //                     })

  //                 }),
  //                 El({
  //                     element:'div',
  //                     className:'w-screen h-screen hidden',
  //                     child:Slider({
  //                         text:'Your satisfaction is our number one periority',
  //                         src:`../images/Wallpaper3.png`,
  //                         class1:'bg-slate-600',
  //                         class2:'bg-slate-950',
  //                         class3:'bg-slate-600',
  //                     })
  //                 }),
  //                 El({
  //                     element:'div',
  //                     className:'w-screen h-screen hidden',
  //                     child:Slider({
  //                         text:'Let’s fulfill your fashion needs with shoearight now!',
  //                         src:`../images/Wallpaper4.png`,
  //                         class1:'bg-slate-600',
  //                         class2:'bg-slate-600',
  //                         class3:'bg-slate-950',
  //                     })
  //                 }),
  //                 El({
  //                     element:'div',
  //                     className:'bg-white relative w-screen h-screen flex ',
  //                     id:'p-2',
  //                     child:[
  //                         El({
  //                             element:'div',
  //                             className:'',
  //                             id:'',
  //                             innerHTML:svgs.ArrowLeftSvg
  //                         }),
  //                         El({
  //                             element:'div',
  //                             className:'w-[50px] h-[80px] absolute left-1/2 -translate-x-1/2 top-24',
  //                             child:El({
  //                                 element:'img',
  //                                 className:'w-full h-full   ',
  //                                 id:'',
  //                                 src:`../images/logo.png`,
  //                             }),

  //                         }),

  //                         El({
  //                             element:'div',
  //                             className:'absolute left-1/2 -translate-x-1/2 top-60',
  //                             id:'',
  //                             child: AuthForm()
  //                         }),
  //                         // El({
  //                         //     element:'div',
  //                         //     className:'self-end w-full justify-self-center  mb-2 mr-4 ',
  //                         //     child: Button({
  //                         //         element:'button',
  //                         //         className:'w-full ',
  //                         //         id:'',
  //                         //         child:'Sing In'
  //                         //       //  onclick(){}bottom-4
  //                         //        })
  //                         // })

  //                     ]

  //                 })

  //             ],
  //         }),
  //         El({
  //             element:'div',
  //             className:'',
  //             child:[

  //             ],
  //         })
  //     ]

  // })
  //    }
  //    else{
  return El({
    element: "div",
    className: " h-full relative sm:container md:container mx-auto p-2 ",
  //  className: "relative w-[600px] ",
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
          // El({
          // element:'div',
          // className:'',
          ///child:Header()
          // }),
          Header(),
          El({
            element: "main",
            className: " p-2   ",
            child: [
              El({
                element: "div",
                className: " relative ",
                child: [
                  El({
                    element: "input",
                    className: "w-full bg-gray-100 rounded-sm pl-6 py-1",
                    placeholder: "Search",
                  }),
                  El({
                    element: "span",
                    className: "absolute left-0 top-2 pl-1 ",
                    innerHTML: svgs.SearchSvg,
                  }),
                ],
              }),
              // El({
              // element:'div',
              // className:'',
              //child:[
              El({
                element: "div",
                className: "mt-4 ",
                child: El({
                  element: "div",
                  className: "grid grid-cols-4 justify-items-center gap-4",
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
              //,]
              //  }),
              El({
                element: "div",
                className: "",
                child:[
                  El({
                    element: "div",
                    className: "flex justify-between mt-2",
                    child:[
                      El({
                        element: "p",
                        className: "font-bold text-xl",
                        child:'Most Popular' 
                      }),
                      El({
                        element: "p",
                        className: "",
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
                            className:'bg-slate-900 text-white ',
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
                              className:'',
                              variant:'outlined',
                              id:'',
                              child:'Nike',
                              onclick(e){
                                renderData({
                                  endPoint:'products',
                                  params:`brand=nike`
                                 })
                                
                              }
                              }),
                              Button({
                                element:'button',
                                className:'',
                                variant:'outlined',
                                id:'',
                                child:'Adidas',
                                onclick(e){
                                  renderData({
                                    endPoint:'products',
                                    params:`brand=adidas`
                                   })
                                  
                                }
                                }),
                                Button({
                                  element:'button',
                                  className:'',
                                  variant:'outlined',
                                  id:'',
                                  child:'Puma',
                                  onclick(e){
                                    renderData({
                                      endPoint:'products',
                                      params:`brand=puma`
                                     })
                                    
                                  }
                                  }),
                                  Button({
                                    element:'button',
                                    className:'',
                                    variant:'outlined',
                                    id:'',
                                    child:'Asics',
                                    onclick(e){
                                      renderData({
                                         endPoint:'products',
                                         params:`brand=asics`
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
                                      className:'',
                                      variant:'outlined',
                                      id:'',
                                      child:'Reebok',
                                      onclick(){
                                        renderData({
                                          endPoint:'products',
                                          params:`brand=reebok`
                                         })
                                      }
                                      }),
                                      Button({
                                        element:'button',
                                        className:'',
                                        variant:'outlined',
                                        id:'',
                                        child:'New Ba',
                                        onclick(){
                                          renderData({
                                            endPoint:'products',
                                            params:`brand=newba`
                                           })
                                        }
                                        }),
                                        Button({
                                          element:'button',
                                          className:'',
                                          variant:'outlined',
                                          id:'',
                                          child:'Converse',
                                          onclick(){
                                            renderData({
                                              endPoint:'products',
                                              params:`brand=converse`
                                             })
                                          }
                                          }),
                                          Button({
                                            element:'button',
                                            className:'',
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
                      //justify-items-center
                      
                      //[
                        // Product({
                        //   src:'../public/images/p-2.png',
                        //   title:'K-Swiss ista Train...',
                        //   price:'$ 85.00'
                        // }),
                        // Product({
                        //   src:'../public/images/p-3.png',
                        //   title:'K-Swiss ista Train...',
                        //   price:'$ 85.00'
                        // }),
                        // Product({
                        //   src:'../public/images/p-4.png',
                        //   title:'K-Swiss ista Train...',
                        //   price:'$ 85.00'
                        // }),
                        // Product({
                        //   src:'../public/images/p-10.png',
                        //   title:'K-Swiss ista Train...',
                        //   price:'$ 85.00'
                        // }),
                        // Product({
                        //   src:'../public/images/p-7.png',
                        //   title:'K-Swiss ista Train...',
                        //   price:'$ 85.00'
                        // }),
                        // Product({
                        //   src:'../public/images/p-8.png',
                        //   title:'K-Swiss ista Train...',
                        //   price:'$ 85.00'
                        // }),
                      

                      //]
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
         src:`${element.images[0]}`,
         title:element.name,
         price:element.price
       }))
       })
  } )


}