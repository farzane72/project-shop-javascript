import El from "../../utils/El";
import Button from "../button/button";
import { displaySlider } from "./startSlider";

let counter=0

export default function Slider({
  text = "",
  src = "",
  id="",
  classMore="",
  textBtn='',
  number=1
 
}) {
  return El({
    element: "div",
    id:id,
    className:classMore,
    child: [
      El({
        element: "img",
        id: " ",
        className: "w-full h-[70vh] ",
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
         
          Button({
            element: "button",
            className: "fixed bottom-6 right-4 left-4",
            child:textBtn,
            variant: "contained",
            onclick(e) {
              displaySlider(number)
            }
          }),
        ],
      }),
    ],
  });
}
