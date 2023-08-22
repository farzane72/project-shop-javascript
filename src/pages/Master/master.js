import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";

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
        className: "fix",
        child: El({
          element: "div",
          className: "flex justify-between",
          child: [
            El({
              element: "div",
              className: "flex flex-col justify-center items-center",
              child: [
                El({
                  element: "span",
                  className: "",
                  onclick() {},
                  innerHTML: svgs.HomeSvg,
                }),
                El({
                  element: "span",
                  className: "text-sm",
                  child:'Home'
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
                    innerHTML: svgs.CartSvg,
                  }),
                  El({
                    element: "span",
                    className: "text-sm",
                    child:'Cart'
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
                    innerHTML: svgs.OrdersSvg,
                  }),
                  El({
                    element: "span",
                    className: "text-sm",
                    child:'Orders'
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
