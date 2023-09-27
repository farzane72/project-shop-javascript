import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";

export default function LoadingPage() {

  return El({
    element: "div",
    className: "",
    child: El({
        element: "div",
        className:
          "bg-white w-screen h-screen relative overflow-hidden  ",
        child: [
          El({
            element: "div",
            className:
              "flex items-center gap-2 absolute top-64 left-1/2  -translate-x-1/2",
            child: [
              El({
                element: "span",
                className: "font-bold text-4xl",
                child: "Shoea",
              }),
              El({
                element: "div",
                className: "w-10 h-10 bg-black rounded-full",
                child: El({
                  element: "span",
                  className: "flex items-center justify-center ",
                  innerHTML: svgs.LogoSvg1,
                }),
              }),
            ],
          }),
          El({
            element: "svg",
            className: "absolute top-[90%] left-1/2  -translate-x-1/2 w-6 h-6  border-4 border-gray-100 border-t-black border-r-black border-black rounded-full animate-loading ",
          }),
        ],
      }),

    
  });
}


