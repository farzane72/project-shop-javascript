import El from "../../utils/El";


export default function Loading() {

  return El({
    element: "div",
    className: "relative overflow-hidden bg-white ",
    child: El({
        element: "div",
        className:" fixed top-0 bottom-0 left-0 right-0  w-screen h-screen flex items-center justify-center",
        child: El({
          element: "svg",
          className: " w-8 h-8  border-4 border-gray-100 border-t-black border-r-black border-black rounded-full animate-loading ",
        }),
      }),

    
  });
}


