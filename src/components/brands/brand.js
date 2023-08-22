import El from "../../utils/El";
import { Link } from "../link/link";

export default function Brand({src, brandsName}) {
  return El({
    element: "div",
    className: " ",
    //onclick:{},
    child:Link({ to: `/products/${brandsName}`,
     child:[
      El({
        element: "div",
        className: "w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center p-2",
        child: El({
          element: "img",
          className: "",
          src,
        }),
      }),
      El({
        element: "span",
        className: "font-bold text-sm capitalize ",
        //child: Link({ to: `/products/${brandsName}`, child:brandsName}),
        child: brandsName,
      }),
    ],
    classMore:'flex flex-col gap-2 justify-center'
    }),
     
  });
}
