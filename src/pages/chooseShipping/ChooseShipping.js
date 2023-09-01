import { Link } from "../../components/link/link";
import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";
//import { Address } from "../../components/address/address";
import Button from "../../components/button/button";
//import { SetLocalStorage } from "../../services/localstorage";
import { Peyment } from "../../components/payment/peyment";

export const ChooseShipping=(data)=>{
   
    
      return El({
        element: "div",
        className: "p-2 bg-gray-50 relative",
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
                    child: "Choose Shipping ",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "",
            child: data.map((t) => {
              return Peyment({
                type:'shipping',
                peymentsName:t.shippingsname,
                price:t.price,
                des:t.des,
                src:t.src
              });
            }),
          }),
          
          Link({
            to:'/checkout',
            child:Button({
                child:'Apply',
                className:'flex flex-1 fixed bottom-6 left-4 right-4 justify-center',
                onclick(){
                    const radioButtons = document.querySelectorAll('input[name="shipping"]');
                    console.log( radioButtons);
                    let selectedshipping;
                    for (const radioButton of radioButtons) {
                        if (radioButton.checked) {
                            selectedshipping = radioButton.value;
                            break;
                        }
                    }
                 console.log(selectedshipping);
                 let selectedNamesshipping=  selectedshipping
                 let shippingsPrice=''
                   data.find((t)=>{
                    if(t.shippingsname=== selectedNamesshipping)
                    shippingsPrice=t.price
                   })
                   localStorage.setItem("shipping", JSON.stringify({name: selectedNamesshipping, price: shippingsPrice}));
               
              }
            })
          })
          
        ],
      });
    
    

}