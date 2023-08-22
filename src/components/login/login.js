import El from "../../utils/El";
import { svgs } from "../svg/svg";
import AuthForm
 from "../authForm/authForm";
export const Login=()=>{
    return  El({
        element:'div',
        className:' relative  ',
        id:'p-2',
        child:[
            El({
                element:'div',
                className:'',
                id:'',
                innerHTML:svgs.ArrowLeftSvg 
            }),
            El({
                element:'div',
                className:'w-[50px] h-[80px] absolute left-1/2 -translate-x-1/2 top-24',
                child:El({
                    element:'img',
                    className:'w-full h-full   ',
                    id:'',
                    src:`../images/logo.png`,
                }),

            }),
            
            El({
                element:'div',
                className:'absolute left-1/2 -translate-x-1/2 top-60',
                id:'',
                child: AuthForm()
            }),
        ]

    })
}
