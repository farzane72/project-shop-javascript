import El from "../../utils/El";
import Button from "../button/button";
const variants = {
  color1 : "w-5 h-1  rounded bg-slate-950",
  color2 : "w-5 h-1  rounded bg-slate-600",
  //link : "bg-transparent"
}


export default function Slider({
  text = "",
  src = "",
  id="",
  classMore="",
  class1 = "",
  class2 = "",
  class3 = "",
  textBtn=''
}) {
  return El({
    element: "div",
    id:id,
    className:classMore,
    child: [
      El({
        element: "img",
        id: " ",
        className: "w-full h-[75vh] ",
        src,
      }),
      El({
        element: "div",
        className: "p-4 flex flex-col gap-8 justify-center ",
        child: [
          El({
            element: "p",
            id: " ",
            className: "font-bold text-xl text-center mb-4 h-[1rem]",
            child: text,
          }),
          El({
            element: "div",
            id: "",
            className: "flex gap-1 justify-center ",
            onclick(e){
console.log(e.target);
            },
            child: [
              El({
                element: "div",
                id: "",
                className: `w-5 h-1  rounded ${class1}`,
                
              }),
              El({
                element: "div",
                id: "",
                className: `w-5 h-1  rounded ${class2}`,
               
              }),
              El({
                element: "div",
                id: "",
                className: `w-5 h-1  rounded ${class3}`,
              }),
            ],
          }),
          Button({
            element: "button",
            className: "mb-6",
            child:textBtn,
            variant: "contained",
            onclick(e) {
            //   console.log(e.target)
            //  console.log(e.target.parentElement)
            //  console.log(e.target.parentElement.parentElement)
             
             // console.log(e.target.parentElement.parentElement)
              let slider=e.target.parentElement.parentElement
              let nextSlider= slider.nextElementSibling
              //console.log(nextSlider)
              let prevSlider= slider.previousElementSibling
             // console.log(slider.parentElement.nextElementSibling)
              // console.log(e.target.parentElement.children)
              // console.log([e.target.parentElement.children.length])
             
              
              
              slider.classList.remove('active')
              slider.classList.add('hidden')
             // console.log(nextSlider)
              nextSlider.classList.remove('hidden')
              nextSlider.classList.add('active')
            //   if(Slider && Slider.classList.contains('active'))
            //     prevSlider.classList.remove('active')
            }
          }),
        ],
      }),
    ],
  });
}
