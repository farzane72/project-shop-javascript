import { Link } from "../../components/link/link";
import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";
import { Address } from "../../components/address/address";
import Button from "../../components/button/button";
import { SetLocalStorage } from "../../services/localstorage";

export const ShippingAddress = (data) => {
  //console.log(data);
  console.log(data[0].address);
  // let addressData=dpasswordata.map((t)=>{
  //     t.name
  // })
  //-use map
  let addressArray = data[0].address;
  console.log(addressArray);
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
                child: "Shipping Address",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "",
        child: addressArray.map((t) => {
          // console.log(t.home);
          return Address({
            locationsName: t.loName,
            location: t.location,
          });
        }),
      }),
      El({
        element: "button",
        className: "w-full bg-gray-200 rounded-full text-center py-2 mt-4 ",
        child: 'Add New Address',
      }),
      Link({
        to:'/checkout',
        child:Button({
            child:'Apply',
            className:'flex flex-1 fixed bottom-6 left-4 right-4 justify-center',
            onclick(){
                const radioButtons = document.querySelectorAll('input[name="address"]');
                let selectedAddress;
                let selectedAddress2;
                for (const radioButton of radioButtons) {
                    if (radioButton.checked) {
                        selectedAddress = radioButton.value;
                        selectedAddress2 = radioButton.valueaddress;
                       // console.log(radioButton.dataset.valueaddress);
                        break;
                    }
                }
             
             let selectedNamesAddress= selectedAddress
             let address=''
               addressArray.find((t)=>{
                if(t.loName===selectedNamesAddress)
                address=t.location
               })
               localStorage.setItem("selectedAddress", JSON.stringify({name:selectedNamesAddress,address:address}));
           
          }
        })
      })
      
    ],
  });
};
