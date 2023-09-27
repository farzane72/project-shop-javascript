import El from "../../utils/El";
import { svgs } from "../svg/svg";
import AuthForm from "../authForm/authForm";
import { StartSlider } from "../startSlider/startSlider";

export const Login=()=>{
    return El({
        element:'div',
        className:'p-2',
        id:'',
        child:[
            El({
                element:'div',
                className:'p-4',
                id:'',
                innerHTML:svgs.ArrowLeftSvg ,
                onclick(){
                    let startSlider=document.getElementById('start-slider')
                    startSlider.innerHTML=''
                    startSlider.appendChild(StartSlider())
                   
                }
            }),
            El({
                element:'div',
                className:'w-[50px] h-[80px] absolute left-1/2 -translate-x-1/2 top-24 ',
                child:El({
                    element:'img',
                    className:'w-full h-full   ',
                    id:'',
                    src:`../images/logo.png`,
                }),

            }),
            
            El({
                element:'div',
                className:'absolute left-1/2 -translate-x-1/2 top-60  ',
                id:'',
                child: AuthForm()
            }),
        ]

    })
}
