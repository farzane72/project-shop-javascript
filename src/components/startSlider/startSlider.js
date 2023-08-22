import El from "../../utils/El"
import Slider from "./slider"
import { Login } from "../login/login"

export const StartSlider=()=>{
let flag=0
    return   El({
    //  El({
    //     element:'div',
    //     className:'',
    //     child:[
          
                element:'div',
                className:'',
                child:[
                    Slider({
                        text:'We provide high quality products just for you',
                        id:'active',
                        src:`../images/Wallpaper2.png`,
                        classMore:'active',
                        class1:'bg-slate-950',
                        class2:'bg-slate-600',
                        class3:'bg-slate-600',
                        textBtn:'next'
                    }),
                    Slider({
                        text:'Your satisfaction is our number one periority',
                        src:`../images/Wallpaper3.png`,
                        classMore:'hidden',
                        class1:'bg-slate-600',
                        class2:'bg-slate-950',
                        class3:'bg-slate-600',
                        textBtn:'next'
                    }),Slider({
                        text:'Let’s fulfill your fashion needs with shoearight now!',
                        src:`../images/Wallpaper4.png`,
                        classMore:'hidden',
                        class1:'bg-slate-600',
                        class2:'bg-slate-600',
                        class3:'bg-slate-950',
                        textBtn:'Get Started'
                    }),
                 
                    // El({
                    //     element:'div',
                    //     className:' ',
                    //     child:Slider({
                    //         text:'We provide high quality products just for you',
                    //         id:'active',
                    //         src:`../images/Wallpaper2.png`,
                    //         class1:'bg-slate-950',
                    //         class2:'bg-slate-600',
                    //         class3:'bg-slate-600',
                    //         textBtn:'next'
                    //     })
                            
                    // }),
                    // El({
                    //     element:'div',
                    //     className:'hidden',
                    //     child:Slider({
                    //         text:'Your satisfaction is our number one periority',
                    //         src:`../images/Wallpaper3.png`,
                    //         class1:'bg-slate-600',
                    //         class2:'bg-slate-950',
                    //         class3:'bg-slate-600',
                    //         textBtn:'next'
                    //     })
                    // }),
                    // El({
                    //     element:'div',
                    //     className:'hidden',
                    //     child:Slider({
                    //         text:'Let’s fulfill your fashion needs with shoearight now!',
                    //         src:`../images/Wallpaper4.png`,
                    //         class1:'bg-slate-600',
                    //         class2:'bg-slate-600',
                    //         class3:'bg-slate-950',
                    //         textBtn:'Get Started'
                    //     })
                    // }),
                    Login()
                ],
            })
    //     ]
    
    // })    
}