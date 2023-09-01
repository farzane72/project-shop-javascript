
import { Link } from "../../components/link/link";
import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";
//import { Address } from "../../components/address/address";
import Button from "../../components/button/button";
//import { SetLocalStorage } from "../../services/localstorage";
import { Peyment } from "../../components/payment/peyment";
import { setData } from "../../services/api/setData";
import { GetLocalStorage, SetLocalStorage } from "../../services/localstorage";
import { getData } from "../../services/api/getData";

export const PeymentMethods=()=>{
      return El({
        element: "div",
        className: "p-2 bg-gray-50 relative h-screen",
        id:'page-payment',
        child: [
          El({
            element: "div",
            className: "flex items-center justify-between",
            child: [
              El({
                element: "div",
                className: "flex gap-2 items-center",
                child: [
                  Link({
                    to: "/checkout",
                    child: El({
                      element: "span",
                      className: "",
                      innerHTML: svgs.ArrowLeftSvg,
                    }),
                  }),
                  El({
                    element: "span",
                    className: "font-bold text-lg",
                    child: "Payment Methods ",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "p",
            className: "text-sm text-gray-500",
            child: "select the payment method you want to use",
          }),
          El({
            element: "div",
            className: "",
            child:[
                Peyment({
                    type:'payment',
                    peymentsName:'My Wallet',
                    price:'$9.379',
                    src:'../public/images/wallet.jpg'
                  }),
                  Peyment({
                    type:'payment',
                    peymentsName:'payPal',
                    price:'',
                    src:'../public/images/paypal.png'
                  }),
                  Peyment({
                    type:'payment',
                    peymentsName:'Google Pay',
                    src:'../public/images/google.png'
                  }),
                  Peyment({
                    type:'payment',
                    peymentsName:'Apple Pay',
                    price:'',
                    src:'../public/images/applepay.png'
                  }),
                  Peyment({
                    type:'payment',
                    peymentsName:'*****4679',
                    price:'',
                    src:'../public/images/master.jpg'
                  }),

            ] 
              
           
          }),
          El({
            element:'div',
            id:'bg-gray',
            className:'absolute bg-gray-700 top-0 left-0 bottom-0 right-0 z-10 opacity-30 hidden'
          }),
          Link({
            to:'/',
            child:El({
              element:'div',
              id:'modal-success',
              className:'bg-white p-2  rounded-3xl flex items-center justify-center w-[280px] h-[400px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden',
              child: El({
                  element:'img',
                  id:'',
                  className:'',
                  src:"../images/successful-page.png"
                }),
                onclick(){
                  let modal=document.getElementById('modal-success')
                  let bgGray=document.getElementById('bg-gray')
                  modal.classList.add('hidden')
                  bgGray.classList.add('hidden')
                }
            })
          })
          ,
            Button({
                child:'Confirm Payment',
                className:'flex flex-1 fixed bottom-6 left-4 right-4 justify-center',
                onclick(){
                  //------------------------ui-------------------------------------------
                    let bgGray=document.getElementById('bg-gray')
                    let modal=document.getElementById('modal-success')
                    bgGray.classList.remove('hidden')
                    modal.classList.remove('hidden')
                    //---------------------------------------------------------------------------------------------------
                     //get products local storage
                     let products=GetLocalStorage("myCart")
                    //-----------------------------------add to db orders--------------------------------
                    //get email user
                    let usersId=0
                    let emailsUser=GetLocalStorage("usersEmail")
                    //--------------------------------------------
                    getData({ endPoint:'users', params:`?email=${emailsUser}` })
                        .then((data)=>{
                          usersId=data[0].id
                          localStorage.setItem("usersId", usersId);
                          //---------------------------------add to db orders----------------------------------------------------------
                          let newData={
                            usersId:usersId,
                            products:products,
                            status:false

                          }
                          setData({
                            endPoint:'orders',
                            data:newData
                        })
                      
                      })
                   
                    //------------------------------DELETE from local storage---------------------------------------
                    localStorage.removeItem("myCart");

              }
            })
          
        ],
      });
    
    

}