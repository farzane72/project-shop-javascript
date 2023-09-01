import El from "../../utils/El";
import { Link } from "../../components/link/link";
import { svgs } from "../../components/svg/svg";
import { DeleteLoSRecentsSearch } from "../../services/localstorage";
export const SearchHome=({type,title,id})=>{
    return El({
        element:'div',
        className:'flex flex-col',
        child:[
                    El({
                        element:'div',
                        className:'flex items-center justify-between',
                        child:[
                            Link({
                                to:`/products/singleproduct/${id}`,
                                child: El({
                                    element:'p',
                                    className:'mb-2 cursor-pointer  capitalize font-bold',
                                    child:title
                                     
                                })
                            }),
                           
                            (type==='pageSearch')?
                            El({
                                element:'span',
                                className:'cursor-pointer',
                                innerHTML:svgs.CloseSvg,
                                onclick(e){
                                    e.preventDefault()
                                    DeleteLoSRecentsSearch({
                                        nameLocalStorage:"recentsSearch",
                                        id:id
                                    })
                                }
                                 
                            }):
                            ""

                        ]
                         
                    })
        ]  
    })

}