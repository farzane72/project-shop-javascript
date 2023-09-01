import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";
import { Link } from "../../components/link/link";

export default function Master(child) {
  return El({
    element: "div",
    className: "",
    child: [
      El({
        element: "div",
        className: "",
        child: child,
      }),
      El({
        element: "footer",
        className: "fixed bottom-0 left-0 right-0   bg-white p-2",
        child:
         El({
          element: "div",
          className: "flex justify-between",
          child: [
            Link({ to:"/",
              child: El({
                element: "div",
                className: "flex flex-col justify-center items-center",
                child: [
                  El({
                    element: "span",
                    className: "",
                    innerHTML: svgs.HomeSvg,
                  }),
                  El({
                    element: "span",
                    className: "text-sm",
                    child:'Home'
                  }),
                ],
              }),
            }),
           

            Link({to:'/mycart',
            child:El({
              element: "div",
              className: "flex flex-col justify-center items-center",
              child: [
                El({
                  element: "span",
                  className: "",
                  innerHTML: svgs.CartSvg,
                }),
                El({
                  element: "span",
                  className: "text-sm",
                  child:'Cart'
                }),
              ],
            }),
              
            }),
            Link({to:'/orders',
            child:  El({
              element: "div",
              className: "flex flex-col justify-center items-center",
              child: [
                El({
                  element: "span",
                  className: "",
                  onclick() {},
                  innerHTML: svgs.OrdersSvg,
                }),
                El({
                  element: "span",
                  className: "text-sm",
                  child:'Orders'
                }),
              ],
            }),
            }),
            
              El({
                element: "div",
                className: "flex flex-col justify-center items-center",
                child: [
                  El({
                    element: "span",
                    className: "",
                    onclick() {},
                    innerHTML:  svgs.WalletSvg,
                  }),
                  El({
                    element: "span",
                    className: "text-sm",
                    child:'Wallet'
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex flex-col justify-center items-center",
                child: [
                  El({
                    element: "span",
                    className: "",
                    onclick() {},
                    innerHTML:svgs.ProfileSvg,
                  }),
                  El({
                    element: "span",
                    className: "text-sm",
                    child:'Profile'
                  }),
                ],
              }),
          ],
        }),
      }),
    ],
  });
}
