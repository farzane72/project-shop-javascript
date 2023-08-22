import El from "../../utils/El";
import { svgs } from "../svg/svg";

export const Welcome=()=>{
    return El({
        element:'div',
        className:'w-screen h-screen relative ',
        child:[
            El({
                element:'img',
                className:' w-full h-full',
                src:'../public/images/Wallpaper1.png',
            }),
            El({
                element:'div',
                className:'absolute top-[70%] pl-4',
                child:[
                    El({
                        element:'div',
                        className:'flex gap-2 mb-2 ',
                        child:[
                            El({
                                element:'p',
                                className:'text-white text-xl font-bold',
                                child:"Welcome to"
                            }),
                            El({
                                element:'span',
                                className:'w-2 h-2',
                                innerHTML:svgs.HandSvg
                            }),
                        ]
                    }),
                    
                    El({
                        element:'p',
                        className:'font-bold text-4xl text-white mb-2',
                       child:"Shoea"
                            
                    }),
                    El({
                        element:'div',
                        className:'text-sm text-white tracking-tight mb-2 ',
                        child:"The best sneakers & shoes e-commerse app of the century for your fashion needs!"
                            
                    })
                   
                ]
            }),
            
        ],
    })
}


