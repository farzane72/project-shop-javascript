import El from "../../utils/El";
import { svgs } from "../svg/svg";
import { EditQtyLocalStorage } from "../../services/localstorage";
import { totalPrice } from "../../pages/myCart/cart";
import { ModalDelete } from "../modal/modalDelete";

//import { Link } from "../link/link";

export const Cart = ({ type, src,namePro,color,size,qty,price,id,text1='',text2=''}) => {
   
    let bgColor=''
    if(color==='red') bgColor='bg-red-500'
    else if(color==='blue')bgColor='bg-blue-500'
    else if(color==='silver')bgColor='bg-gray-500'
    else  bgColor='bg-black'

  return El({
    element:'div',
    className:' mb-4 bg-white rounded-3xl p-4 ',
    child: El({
        element: "div",
        className: "flex  gap-8  ",
        child: [
          El({
            element: "div",
            className: "rounded-2xl p-2 bg-gray-100 min-w-[100] h-[100px] flex items-center justify-center ",
            child: El({
              element: "img",
              className: "w-full  ",
              src: src,
            }),
          }),
          El({
            element: "div",
            className: "flex flex-col gap-2 w-full",
            child: [
              El({
                element: "div",
                className: "flex justify-between items-center ",
                child: [
                  El({
                    element: "span",
                    className: "font-bold",
                    child: namePro,
                  }),
                  type === "cart"
                    ? El({
                        element: "span",
                        className: "cursor-pointer",
                        innerHTML: svgs.TrashSvg,
                        onclick(){
                          let myCart=document.getElementById('page-mycart')
                         // modal.classList.remove('hidden')
                         myCart.appendChild(ModalDelete({src,namePro,color,size,qty,price,id}))
                         let bgModal=document.getElementById('bg-modaDelete')
                         bgModal.classList.remove('hidden')
                        }
                      })
                    : "",
                ],
              }),
              El({
                element: "div",
                className: "flex gap-1 items-center",
                child: [
                  El({
                    element: "div",
                    className: `w-3 h-3 rounded-full ${bgColor} `,
                    // child:
                  }),
                  El({
                    element: "span",
                    className: "text-[12px]  capitalize text-slate-500",
                     child:`${color}`
                  }),
                  El({
                    element: "div",
                    className: "w-[2px] h-3 bg-gray-300 ",
                    //child:
                  }),
                  El({
                    element: "span",
                    className: "text-[12px]  capitalize text-slate-500",
                    child:'Size='
                  }),
                  El({
                    element: "span",
                    className: "text-[12px] text-slate-500",
                     child:`${size}`
                  }),
                  (type==='order')?
                    El({
                      element: "div",
                      className: "w-[2px] h-3 bg-gray-300 ",
                      //child:
                    }):'',
                  (type==='order')?
                  
                    El({
                      element: "span",
                      className: "text-[12px]  capitalize text-slate-500",
                      child:'Qty='
                    }):"",
                    
                    (type==='order')?
                    El({
                      element: "span",
                      className: "text-[12px] text-slate-500",
                       child:qty
                    })
                  
                  :""
                ],
              }),
              type === "order"?
              El({
                Element:'span',
                className:'bg-gray-100 text-black rounded-md px-4 py-1 text-[10px] w-[80px]',
                child:text1

              }):"",
              El({
                element: "div",
                className: "flex items-center justify-between",
                 child:[
                    El({
                        element:'div',
                        className:'flex',
                        child:[
                            El({
                                element: "span",
                                className: "",
                                child:`$`
                              }),
                              El({
                                element: "span",
                                className: "",
                                id:'count-total',
                                child: price*qty
                              }),
    
                        ]
                    }),
                    (type==='cart' || type==='delete')?
                    
                      El({
                        element: "div",
                        className: "flex bg-gray-100 rounded-full items-center p-1  gap-1",
                         child: [
                            El({
                              element: "span",
                              className: "cursor-pointer ",
                              id: "",
                              onclick(e) {
                                e.preventDefault()
                                clickQuantity(e,"minus",price,id);
                              },
                              innerHTML: svgs.MinusSvg,
                            }),
                            El({
                              element: "input",
                              className: "cursor-pointer bg-gray-100 w-6 outline-none",
                              id: "quantity-pro",
                              value:qty,
                              onchange(e) {
                                
                                e.preventDefault()
                                clickQuantity(e,'',price,id)
                              },
                            }),
                            El({
                              element: "span",
                              className: "cursor-pointer ",
                              onclick(e) {
                                e.preventDefault()
                                clickQuantity(e,"plus",price,id);
                               // countTotalPrice(data.price);
                              },
                              innerHTML: svgs.PlusSvg,
                            }),
                          ],
                      })
                      :
                      (type==='checkout')?
                      El({
                        Element:'div',
                        className:'w-8 h-8 rounded-full bg-gray-100 relative ',
                        child:El({
                          Element:'div',
                          className:' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[10px]',
                          child:qty
  
                        })

                      })
                      :
                      El({
                        Element:'div',
                        className:'bg-black text-white rounded-full px-4 py-1 text-sm',
                        child:text2

                      })
                 ]
              })
            ],
          }),
        ],
      })
      
  })
  
};

function clickQuantity(e,input,price,id) {
   
   let quantityPro,countPro,total=''
   
   let target=e.target
    if (input === "minus"){
       quantityPro=target.parentElement.nextElementSibling
        total=target.parentElement.parentElement.previousElementSibling.lastElementChild
        countPro = +quantityPro.value;
      countPro--;
    } 
    else if(input === "plus"){
      quantityPro=target.parentElement.previousElementSibling
       total=target.parentElement.parentElement.previousElementSibling.lastElementChild
       countPro = +quantityPro.value;
     // console.log(quantityPro);
     // console.log(total);
     // console.log( countPro);
      countPro++;
    } 
    else{
       total=target.parentElement.previousElementSibling.lastElementChild
       quantityPro=target
       countPro = +quantityPro.value;
    }
   
    //--------update qty local storage-------
    EditQtyLocalStorage({
      nameLocalStorage:'myCart',
      id:id,
      qty:countPro
    })
    //--------------------------------------
    quantityPro.value = "";
    quantityPro.value = countPro;
    total.innerHTML = "";
    total.innerHTML = countPro * price;
    
    let sumPrices=totalPrice()
    console.log(sumPrices);
    let mainPrices=document.getElementById('main-total')
    mainPrices.innerHTML=''
    mainPrices.innerHTML= sumPrices
  }