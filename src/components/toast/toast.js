import El from "../../utils/El";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const Toast=(text)=>{
    return Toastify({
        text: text,
        duration: 2000,
      //  destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "center", 
        stopOnFocus: false, 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
    // El({
    //     element:'div',
    //     className:'',
    //     child:'کاربر گرامی با موفقیت لاگین شدید:)'
    // })
}