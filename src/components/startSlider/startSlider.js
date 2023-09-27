import El from "../../utils/El"
import Slider from "./slider"
import { Login } from "../login/login"

export const StartSlider=()=>{

    return   El({
                element:'div',
                className:'relative',
                id:'start-slider',
                child:[
                    Slider({
                        text:'We provide high quality products just for you',
                        id:'',
                        src:`../images/Wallpaper2.png`,
                        classMore:'slider',
                        textBtn:'Next',
                        number:1
                        
                    }),
                    Slider({
                        text:'Your satisfaction is our number one periority',
                        src:`../images/Wallpaper3.png`,
                        classMore:'hidden slider',
                        textBtn:'Next',
                        number:2
                    }),
                    Slider({
                        text:'Let’s fulfill your fashion needs with shoearight now!',
                        src:`../images/Wallpaper4.png`,
                        classMore:'hidden slider',
                        textBtn:'Get Started',
                        number:3
                        
                    }),
                   
                    // Login(),
                    El({
                        element: "div",
                        id: "dots",
                        className: "flex gap-1 justify-center absolute -bottom-8 left-1/2 -translate-x-1/2 ",
                        
                        child: [
                          El({
                            element: "div",
                            id: "",
                            className: `w-5 h-1  rounded bg-slate-900 cursor-pointer dot`,
                            onclick(){
                              displaySlider(0)

                            }
                            
                          }),
                          El({
                            element: "div",
                            id: "",
                            className: `w-5 h-1  rounded bg-slate-600 cursor-pointer dot`,
                            onclick(){
                              displaySlider(1)
                            }
                           
                          }),
                          El({
                            element: "div",
                            id: "",
                            className: `w-5 h-1  rounded bg-slate-600 cursor-pointer dot`,
                            onclick(){
                              displaySlider(2)
                              
                            }
                          }),
                        ],
                      }),
                ],
            })
}

export function displaySlider(number=1){

  if(number===3){
    let startSlider=document.getElementById('start-slider')
    startSlider.innerHTML=''
    startSlider.appendChild(Login())
  

  }


  let sliders=document.querySelectorAll('.slider')
  let dots=document.querySelectorAll('.dot')
  
  for(let i=0;i<sliders.length;i++){
    sliders[i].classList.add('hidden')
   
  }
  for(let i=0;i<dots.length;i++){
    dots[i].classList.remove("bg-slate-900")
    dots[i].classList.add("bg-slate-600")
  }
  sliders[number].classList.remove('hidden')
  dots[number].classList.remove('bg-slate-600')
  dots[number].classList.add('bg-slate-900')
console.log(sliders);
}