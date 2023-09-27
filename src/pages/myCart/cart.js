import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";
import { Cart } from "../../components/cart/cart";
import { GetLocalStorage } from "../../services/localstorage";
//import { ModalDelete } from "../../components/modal/modalDelete";
import { Link } from "../../components/link/link";
import { NotFound } from "../../components/notFound/notFound";
import { countShoppingCart } from "../Master/master";

export const MyCart = (data) => {
  return El({
    element: "div",
    id: "pageCart",
    className: " ",
    child: El({
      element: "div",
      id: "page-mycart",
      className: "p-2 bg-gray-50 relative z-10 ",
      child: [
        El({
          element: "div",
          className: "flex items-center justify-between",
          child: [
            El({
              element: "div",
              className: "flex gap-4 items-center",
              child: [
                Link({
                  to: "/",
                  child: El({
                    element: "span",
                    className: "",
                    innerHTML: svgs.ArrowLeftSvg,
                  }),
                }),
                El({
                  element: "span",
                  className: "",
                  innerHTML: svgs.LogoSvg2,
                }),
                El({
                  element: "span",
                  className: "font-bold text-xl",
                  innerHTML: "My Cart",
                }),
              ],
            }),
            Link({
              to: "/search",
              child: El({
                element: "span",
                className: "",
                innerHTML: svgs.SearchSvg2,
              }),
            }),
          ],
        }),
        data.length >= 1
          ? El({
              element: "div",
              className: "mt-3 grid grid-cols-1 gap-2 md:grid-cols-3",
              child: data.map((t) => {
                console.log(t);
                return Cart({
                  type: "cart",
                  // t:t
                  src: t.image,
                  namePro: t.name,
                  //  color:t.color[0],
                  //   size:t.size[0],
                  color: t.selectedColor,
                  size: t.selectedSize,
                  qty: t.countPro,
                  price: t.price,
                  id: t.id,
                });
              }),
            })
          : "",
        data.length >= 1
          ? El({
              element: "footer",
              className:
                "fixed bottom-0 left-0 right-0   bg-white p-2 rounded-t-3xl z-20 ",
              child: [
                El({
                  element: "div",
                  className: "flex justify-between mb-4 mt-2 ",
                  child: [
                    El({
                      element: "div",
                      className: "flex flex-col",
                      child: [
                        El({
                          element: "span",
                          className: "font-bold text-lg text-gray-400 ",
                          child: "Total price",
                        }),
                        El({
                          element: "div",
                          className: "flex",
                          child: [
                            El({
                              element: "span",
                              className: "font-bold text-lg",
                              child: "$",
                            }),
                            El({
                              element: "div",
                              className: "font-bold text-lg",
                              id: "main-total",
                              child: totalPrice(),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Link({
                      to: "/checkout",
                      child: El({
                        element: "div",
                        className:
                          "bg-black text-white px-10 py-2 rounded-full shadow",
                        child: El({
                          element: "div",
                          className: "flex gap-2 items-center justify-center",
                          child: [
                            El({
                              element: "span",
                              className: "text-sm",
                              child: "Checkout",
                            }),
                            El({
                              element: "span",
                              className: "",
                              innerHTML: svgs.ArrowRightSvg,
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),

                El({
                  element: "div",
                  className: "flex justify-between",
                  child: [
                    Link({
                      to: "/",
                      child: El({
                        element: "div",
                        className: "flex flex-col justify-center items-center",
                        child: [
                          El({
                            element: "span",
                            className: "text-slate-500",
                            innerHTML: svgs.HomeSvg2,
                          }),
                          El({
                            element: "span",
                            className: "text-sm",
                            child: "Home",
                          }),
                        ],
                      }),
                    }),

                    Link({
                      to: "/mycart",
                      child: El({
                        element: "div",
                        className:
                          "flex flex-col justify-center items-center relative",
                        child: [
                          El({
                            element: "span",
                            className: "",
                            innerHTML: svgs.CartSvg,
                          }),
                          El({
                            element: "span",
                            className: "text-sm",
                            child: "Cart",
                          }),
                          El({
                            element: "div",
                            id: "count-cart",
                            className: `text-sm w-3 h-3 rounded-md bg-red-500 flex items-center justify-center  absolute -top-1 -right-1 text-white  ${
                              countShoppingCart() > 0 ? "block" : "hidden"
                            } `,
                            child: countShoppingCart(),
                          }),
                        ],
                      }),
                    }),
                    Link({
                      to: "/orders",
                      child: El({
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
                            child: "Orders",
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
                          innerHTML: svgs.WalletSvg,
                        }),
                        El({
                          element: "span",
                          className: "text-sm",
                          child: "Wallet",
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
                          innerHTML: svgs.ProfileSvg,
                        }),
                        El({
                          element: "span",
                          className: "text-sm",
                          child: "Profile",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : "",
        data.length == 0
          ? El({
              element: "div",
              id: "",
              className: "relative ",
              child: NotFound({
                title: `you don't choose any product`,
                des: `you don't choose any product`,
              }),
            })
          : "",
        El({
          element: "div",
          id: "bg-modaDelete",
          className:
            "absolute bg-gray-700 top-0 left-0 bottom-0 right-0 z-30 opacity-40 hidden ",
        }),
        //ModalDelete()
      ],
    }),
  });
};

export function totalPrice() {
  let data = GetLocalStorage("myCart");
  return data.reduce(
    (sum, current) => sum + +current.price * +current.countPro,
    0
  );
}
