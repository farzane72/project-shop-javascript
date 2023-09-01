import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";
import { Link } from "../../components/link/link";
import { Address } from "../../components/address/address";
import { Cart } from "../../components/cart/cart";
import { totalPrice } from "../myCart/cart";
import { GetLocalStorage } from "../../services/localstorage";

export const Checkout=(dataMycart)=>{
   
    let selectedAddress=GetLocalStorage("selectedAddress")
    let shippingPrice=GetLocalStorage("shipping")

    let promoPrice=0
    let total=totalPrice()
    //-------------------------------------------------------------------------
    return El({
        element:'div',
        className:'p-2 sm:container mx-auto bg-gray-50',
        child:[
            El({
                element:'div',
                className:'flex items-center justify-between',
                child:[ El({
                    element:'div',
                    className:'flex gap-2 items-center',
                    child:[
                        Link({
                            to:'/mycart',
                            child:El({
                                element:'span',
                                className:'',
                                innerHTML:svgs.ArrowLeftSvg
                            })
                        }),
                        El({
                            element:'span',
                            className:'font-bold text-lg',
                            child:'Checkout'
                        })
                        
                    ]
                }),
                El({
                    element:'span',
                    className:'',
                    innerHTML:svgs.MoreSvg
                        
                }),

                    
                ]
            }),
            El({
                element:'div',
                className:'py-4 border-b mx-2 border-gray-100',
                child:[
                    El({
                        element:'span',
                        className:' font-bold text-xl  ',
                        child:"Shipping Address"
                    }),
                    El({
                        element:'div',
                        className:'mt-3',
                        id:'selected-address',
                        child: Address({
                            type:'selectedAddress',
                            locationsName:selectedAddress.name,
                            location: selectedAddress.address
                        })
                    }),
                    
                ]
            }),
            // El({
            //     element:'div',
            //     id:'selected-address',
            //     child:Address({
            //         type:'selectedAddress',
            //         locationsName: dataUser[0].address[0].loName,
            //         location: dataUser[0].address[0].location
            //     })
            // })
            //,
            
            El({
                element:'div',
                className:'border-b mx-2 mt-2 border-gray-100 ',
                child:[
                    El({
                        element:'p',
                        className:'font-bold py-2  ',
                        child:"Order List"
                    }),
                    El({
                        element:'div',
                        className:'',
                        child:dataMycart.map((t)=>{
                            return Cart({
                                type:'checkout',
                                namePro:t.name,
                                src:t.images[0],
                                color:t.color[0],
                                size:t.size[0],
                                qty:t.countPro,
                                price:t.price,
                                id:t.id 
                            })
                        })
                            

                    }),
                ]
            }),
            El({
                element:'div',
                className:'py-4 border-b mx-2 border-gray-100',
                child:[
                    El({
                        element:'span',
                        className:' font-bold ',
                        child:"Choose Shipping"
                    }),
                    El({
                        element:'div',
                        className:'mt-3 bg-white rounded-2xl p-4 flex items-center justify-between',
                        child:[
                            El({
                                element:'div',
                                className:' flex items-center gap-4',
                                child:[
                                    El({
                                        element:'i',
                                        className:'fa fa-truck',
                                    }),
                                    El({
                                        element:'span',
                                        className:'text-sm font-bold',
                                        child:'Choose Shipping type'
                                    }),

                                ]
                            }),
                            Link({
                                to:'/chooseshipping',
                                child:El({
                                    element:'span',
                                    className:'',
                                    innerHTML:svgs.ChevronRight

                                }),
                            })
                            
                        ] 
                    }),
                    
                ]
            }),
            El({
                element:'div',
                className:'',
                child:[
                    El({
                        element:'p',
                        className:'font-bold',
                        child:"Promo Code"  
                    }),
                    El({
                        element:'div',
                        className:'flex items-center justify-between gap-4 my-4',
                        child:[
                            El({
                                element:'input',
                                id:'promo-code',
                                className:'bg-gray-100 rounded-xl p-2  placeholder:text-gray-400 placeholder:text-[10px] flex-1 ',
                                placeholder:"Enter Promo Code",   
                            }),
                            El({
                                element:'div',
                                className:'w-8 h-8 rounded-full bg-black relative',
                                onclick(){
                                    let promoInput=document.getElementById('promo-code')
                                    promoInput.value=''
                                    promoInput.classList.remove('bg-gray-100')
                                    promoInput.classList.add('bg-black','placeholder:text-white')
                                    promoInput.placeholder='Discount 30% off'
                                    let promoCode=document.getElementById('promoPrice')
                                    promoCode.innerHTML=''
                                    promoPrice=.30*total
                                    promoCode.innerHTML=`-$${promoPrice}`
                                    let totalPrices=document.getElementById('total-price')
                                    totalPrices.innerHTML=''
                                    totalPrices.innerHTML=`${total+shippingPrice.price-promoPrice}`


                                },
                                child:El({
                                    element:'span',
                                    className:'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold',
                                    innerHTML:svgs.PlusSvg2
                                })
                                    
                                
                            }),
                            
                        ]
                    }),
                    El({
                        element:'div',
                        className:'bg-white rounded-xl p-2',
                        child:[
                            El({
                                element:'div',
                                className:'flex items-center justify-between',
                                child:[
                                    El({
                                        element:'span',
                                        className:'text-sm  text-gray-400',
                                        child:'Amount'
                                    }),
                                    El({
                                        element:'div',
                                        className:'flex items-center',
                                        child:[
                                            El({
                                                element:'span',
                                                className:'',
                                                child:'$'

                                            }),
                                            El({
                                                element:'span',
                                                className:'',
                                                child:total
                                            }),
                                            
                                        ]
                                    }),
                                ]
                            }),
                            El({
                                element:'div',
                                className:'flex items-center justify-between my-2 pb-2',
                                child:[
                                    El({
                                        element:'span',
                                        className:'test-sm text-gray-400',
                                        child:'Shipping'
                                    }),
                                    El({
                                        element:'div',
                                        className:'flex items-center',
                                        child:[
                                            El({
                                                element:'span',
                                                className:'',
                                                child:shippingPrice.name?'$':''

                                            }),
                                            El({
                                                element:'span',
                                                className:'',
                                                child: shippingPrice.name?shippingPrice.price:'0'
                                            }),
                                            
                                        ]
                                    }),
                                ]
                            }),
                            El({
                                element:'div',
                                className:'flex items-center justify-between my-2 pb-2',
                                child:[
                                    El({
                                        element:'span',
                                        className:'text-sm text-gray-400',
                                        child:'Promo'
                                    }),
                                    El({
                                        element:'div',
                                        className:'flex items-center',
                                        child:[
                                            El({
                                                element:'span',
                                                className:'',
                                                child:(promoPrice==0)?"":'-$'

                                            }),
                                            El({
                                                element:'span',
                                                className:'',
                                                id:'promoPrice',
                                                child:promoPrice
                                            }),
                                            
                                        ]
                                    }),
                                ]
                            }),
                            El({
                                element:'div',
                                className:'flex items-center justify-between mt-2 border-t mx-2  pt-2',
                                child:[
                                    El({
                                        element:'span',
                                        className:'text-sm text-gray-400',
                                        child:'Total'
                                    }),
                                    El({
                                        element:'div',
                                        className:'flex items-center',
                                        child:[
                                            El({
                                                element:'span',
                                                className:'',
                                                child:'$'

                                            }),
                                            El({
                                                element:'span',
                                                className:'',
                                                id:'total-price',
                                                child:total+shippingPrice.price-promoPrice
                                            }),
                                            
                                        ]
                                    }),
                                ]
                            }),
                        ]
                    }),
                ]
            }),
            Link({
                to:'/paymentmethods',
                child: El({
                  element:'button',
                  className:'bg-black text-white  py-2 rounded-full shadow w-full mb-6',
                  child:El({
                      element:'div',
                      className:'flex gap-2 items-center justify-center',
                      child:[
                          El({
                              element:'span',
                              className:'text-[12px] ',
                              child:'Continue to Payment'
                          }),
                          El({
                              element:'span',
                              className:'',
                              innerHTML:svgs.ArrowRightSvg
      
                          }),
                          
                      ]

                  }),
              }),
              })

        ]
    })
}

// El({
            //     element:'div',
            //     className:'py-4 border-b mx-2 border-gray-100',
            //     child:[
            //         El({
            //             element:'span',
            //             className:' font-bold text-xl  ',
            //             child:"Shipping Address"
            //         }),
            //         El({
            //             element:'div',
            //             className:'mt-3',
            //             id:'selected-address',
            //             child:  El({
            //                     element:'div',
            //                     className:'bg-white p-4 flex justify-between items-center rounded-2xl',
            //                     child:[
            //                         El({
            //                             element:'div',
            //                             className:'flex items-center gap-2',
            //                             child:[
            //                                 El({
            //                                     element:'div',
            //                                     className:'w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center',
            //                                     child:El({
            //                                         element:'div',
            //                                         className:'w-8 h-8 bg-black rounded-full flex items-center justify-center',
            //                                         innerHTML:svgs.LocationSvg
            //                                     }),
            //                                 }),
            //                                 El({
            //                                     element:'div',
            //                                     className:'flex flex-col ',
            //                                     child:[
            //                                         El({
            //                                         element:'span',
            //                                         className:'font-bold ',
            //                                         child:'Home'
            //                                     }),
            //                                     El({
            //                                         element:'span',
            //                                         className:'text-gray-500 text-sm',
            //                                         child:'gaz Strret,12 Alley'
            //                                     })
            //                                 ]
            //                                 })
            //                             ]
            //                         }),
            //                         El({
            //                             element:'span',
            //                             className:'',
            //                             innerHTML:svgs.PenSvg
            //                         })
            //                     ]
            //                 })
            //         }),
                    
            //     ]
            // }),