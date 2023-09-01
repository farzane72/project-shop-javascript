import El from "../../utils/El";
import { Cart } from "../cart/cart";
import { DeleteLocalStorage } from "../../services/localstorage";

export const ModalDelete=({src,namePro,color,size,qty,price,id})=>{
    return El({
        element:'div',
        className:'fixed bottom-0 left-0 right-0 rounded-t-3xl  p-2  bg-white z-50',
        id:'modal-delete',
        child:[
            El({
                element:'p',
                className:'font-bold border-b border-gray-100/70 py-3 text-center',
                child:'Remove From Cart?'
              }),
              El({
                element:'div',
                className:'my-2 border-b border-gray-100/70 mx-2',
                child:Cart({
                     type:'delete',
                     src:src,
                     namePro:namePro,
                     color:color,
                     size:size,
                     qty:qty,
                     price:price ,
                     id:id
               })
              }),
              El({
                element:'div',
                className:'flex justify-center gap-2 items-center mb-6 pt-2',
                child:[
                    El({
                        element:'button',
                        className:'bg-gray-100 rounded-full py-1  w-1/2 text-center',
                        child:'Cancel',
                        onclick(){
                            let modal=document.getElementById("modal-delete")
                            modal.classList.add('hidden')
                            let bgModal=document.getElementById('bg-modaDelete')
                            bgModal.classList.add('hidden')

                        }
                      }),
                      El({
                        element:'button',
                        className:'bg-black rounded-full text-white py-1  w-1/2 text-center',
                        child:'Yes,Remove',
                        onclick(){

                            DeleteLocalStorage({nameLocalStorage:'myCart',id:id})
                            //let modal=document.getElementById("modal-delete")
                            //modal.classList.add('hidden')
                        }
                      })
                ]
              })
        ]
      })
}