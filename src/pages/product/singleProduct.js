import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";
import { Link } from "../../components/link/link";
import { Base_Url } from "../../constants";
import axios from "axios";
import { SetLocalStorage } from "../../services/localstorage";
let countPro=1
export const SingleProduct = (data) => {
  console.log(data);
  let count = 0;
  let flagHeart = 0;
 
  //  if (data.popular == false) {
      // return(svgs.HeartSvg)
     // flagHeart = 0;
      return El({
        element: "div",
        className: "",
        child: [
          El({
            element: "div",
            className: "bg-gray-100 h-72 w-full relative",
            id: "",
            child: [
              Link({
                to: `/`,
                child: El({
                  element: "span",
                  className: "cursor-pointer absolute left-4 top-2",
                  innerHTML: svgs.ArrowLeftSvg,
                }),
              }),

              El({
                element: "img",
                className:
                  "absolute w-3/4 left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2 ",
                // src:"https://s6.uupload.ir/files/p-3_1qrp.png"
                src: data.images[0],
              }),
              El({
                element: "div",
                className: "absolute left-1/2 -translate-x-1/2 bottom-4 ",
                child: [
                  El({
                    element: "div",
                    className: "flex gap-1",
                    child: [
                      El({
                        element: "div",
                        className: "w-8 h-2 rounded-full bg-slate-950",
                        child: "",
                      }),
                      El({
                        element: "div",
                        className: "w-2 h-2 rounded-full bg-gray-200",
                        child: "",
                      }),
                      El({
                        element: "div",
                        className: "w-2 h-2 rounded-full bg-gray-200",
                        child: "",
                      }),
                      El({
                        element: "div",
                        className: "w-2 h-2 rounded-full bg-gray-200",
                        child: "",
                      }),
                      El({
                        element: "div",
                        className: "w-2 h-2 rounded-full bg-gray-200",
                        child: "",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "m-4 border-b pb-4",
            id: "",
            child: [
              El({
                element: "div",
                className: "flex justify-between mb-2",
                id: "",
                child: [
                  El({
                    element: "p",
                    className: "font-bold text-xl capitalize ",
                    id: "",
                    child: data.name,
                  }),
                  ((data.popular)?
                  El({
                    element: "span",
                    className: "",
                    id: "svg-heart",
                     innerHTML: svgs.HeartRedSvg,
                    onclick(e) {
                      e.preventDefault();
                      let svgHeart = document.getElementById("svg-heart");

                      console.log(data.popular);
                      updatePopular(data).then((res) => {
                        console.log(res.data.popular);

                        if (res.data.popular == false) {
                          console.log("false ast");
                          svgHeart.innerHTML = "";
                          svgHeart.innerHTML = svgs.HeartSvg;
                        } else {
                          console.log("true ast");
                          svgHeart.innerHTML = "";
                          svgHeart.innerHTML = svgs.HeartRedSvg;
                        }
                      });
                    },
                  })
                     :
                     El({
                      element: "span",
                      className: "",
                      id: "svg-heart",
                       innerHTML: svgs.HeartSvg,
                      onclick(e) {
                        e.preventDefault();
                        let svgHeart = document.getElementById("svg-heart");
  
                        console.log(data.popular);
                        updatePopular(data).then((res) => {
                          console.log(res.data.popular);
  
                          if (res.data.popular == false) {
                            console.log("false ast");
                            svgHeart.innerHTML = "";
                            svgHeart.innerHTML = svgs.HeartSvg;
                          } else {
                            console.log("true ast");
                            svgHeart.innerHTML = "";
                            svgHeart.innerHTML = svgs.HeartRedSvg;
                          }
                        });
                      },
                    })
                     )
                  
                ],
              }),
              El({
                element: "div",
                className: " flex gap-1 items-center",
                id: "",
                child: [
                  El({
                    element: "div",
                    className: "bg-gray-100 py-1 px-2 rounded ",
                    id: "",
                    child: El({
                      element: "p",
                      className: "text-[8px] tracking-tighter  text-slate-800",
                      id: "",
                      child: "5.371 solid",
                    }),
                  }),
                  El({
                    element: "span",
                    className: "",
                    id: "",
                    innerHTML: svgs.StarSvg,
                  }),
                  El({
                    element: "span",
                    className: "text-[8px] tracking-tighter text-slate-800 ",
                    id: "",
                    child: "4.3 (5.389 reviews)",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "px-4",
            id: "",
            child: [
              El({
                element: "span",
                className: "font-bold",
                id: "",
                child: "Description",
              }),
              El({
                element: "p",
                className: "text-sm text-slate-700 font-thin",
                id: "",
                child: data.des,
                // child:'Lorem ipsun dolor sit amet,constectetur adipiscing elit.se do eiusmod incididut ut labore et view more...'
              }),
            ],
          }),
          El({
            element: "div",
            className: "px-4 flex gap-2 mt-2 justify-between",
            id: "",
            child: [
              El({
                element: "div",
                className: "flex flex-col",
                id: "",
                child: [
                  El({
                    element: "span",
                    className: "font-bold",
                    id: "",
                    child: "Size",
                  }),
                  El({
                    element: "div",
                    className: "flex gap-1 items-center mt-2 ",
                    id: "",
                    onclick(e){
                        let target=e.target
                        console.log(target);
                        target.classList.add('text-white')
                        target.parentElement.classList.add('bg-black','border-none')
                    },
                    child: [
                      El({
                        element: "div",
                        className:
                          "w-8 h-8 border-slate-500  rounded-full border-2  relative cursor-pointer",
                        id: "",
                        child: El({
                          element: "span",
                          className:
                            "   text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                          child: data.size[0],
                        }),
                      }),
                      El({
                        element: "div",
                        className:
                          "w-8 h-8 border-slate-500  rounded-full border-2 active:bg-black active:border-none relative cursor-pointer",
                        id: "",
                        child: El({
                          element: "span",
                          className:
                            "active:text-white   text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                          child: data.size[1],
                        }),
                      }),
                      El({
                        element: "div",
                        className:
                          "w-8 h-8 border-slate-500  rounded-full border-2 active:bg-black active:border-none relative cursor-pointer",
                        id: "",
                        child: El({
                          element: "span",
                          className:
                            "active:text-white   text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                          child: data.size[2],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex-flex-col",
                id: "",
                child: [
                  El({
                    element: "span",
                    className: "font-bold",
                    id: "",
                    child: "Color",
                  }),
                  El({
                    element: "div",
                    className: "flex gap-1 items-center mt-2",
                    id: "",
                    onclick(e){
                      // show tik on color and choice and set in local storage as User selected color
                          showTik(e)
                    },
                    child: [
                      El({
                        element: "div",
                        className: "w-8 h-8  bg-gray-100 rounded-full relative",
                        // child: El({
                        //   element: "span",
                        //   className:
                        //     "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                        //   innerHTML: svgs.TikSvg,
                        // }),
                      }),
                      El({
                        element: "div",
                        className:
                          "w-8 h-8  bg-purple-600 rounded-full relative",
                        // child:El({
                        //     element:'span',
                        //     className:'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        //     innerHTML:svgs.TikSvg
                        // }),
                      }),
                      El({
                        element: "div",
                        className: "w-8 h-8  bg-red-600 rounded-full relative",
                        // child:El({
                        //     element:'span',
                        //     className:'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        //     innerHTML:svgs.TikSvg
                        // }),
                      }),
                      El({
                        element: "div",
                        className: "w-8 h-8  bg-blue-600 rounded-full relative",
                        // child:El({
                        //     element:'span',
                        //     className:'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        //     innerHTML:svgs.TikSvg
                        // }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "px-4 flex gap-4 items-center mt-4",
            id: "",
            child: [
              El({
                element: "span",
                className: "font-bold",
                id: "",
                child: "Quantity",
              }),
              El({
                element: "div",
                className: "bg-gray-100 w-28 h-8 rounded-full relative  ",
                id: "",
                child: El({
                  element: "div",
                  className:
                    "flex gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center",
                  id: "",
                  child: [
                    El({
                      element: "span",
                      className: "cursor-pointer ",
                      id: "",
                      onclick() {
                        clickQuantity("minus",data.price);
                       // countTotalPrice(data.price);
                      },
                      innerHTML: svgs.MinusSvg,
                    }),
                    El({
                      element: "input",
                      className: "cursor-pointer bg-gray-100 w-8 outline-none",
                      //type:'number',
                      id: "quantity-pro",
                      value: "1",
                      onchange() {
                        clickQuantity('',data.price)
                       // countTotalPrice(data.price);
                      },
                    }),
                    El({
                      element: "div",
                      className: "cursor-pointer ",
                      onclick() {
                        clickQuantity("plus",data.price);
                       // countTotalPrice(data.price);
                      },
                      innerHTML: svgs.PlusSvg,
                    }),
                  ],
                }),
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "mx-4 border-t mt-2 flex pt-2 justify-between items-center ",
            id: "",
            child: [
              El({
                element: "div",
                className: "",
                id: "",
                child: [
                  El({
                    element: "span",
                    className: "text-[10px] text-slate-400  ",
                    id: "",
                    child: "Total price",
                  }),
                  El({
                    element: "span",
                    className: " font-bold flex gap-1",
                    id: "",
                    child: [
                      El({
                        element: "span",
                        className: "font-bold ",
                        id: "",
                        child: "$",
                      }),
                      El({
                        element: "span",
                        className: " font-bold flex gap-1",
                        id: "count-total",
                        child: data.price,
                        //child: countTotalPrice(data.price),
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: "button",
                className:
                  " bg-black text-white   rounded-full w-44 h-10 relative shrink mt-4",
                id: "",
                child: El({
                  element: "div",
                  className:
                    "flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center gap-2 ",
                  id: "",
                  child: [
                    El({
                      element: "span",
                      className: "text-white",
                      innerHTML: svgs.ShoppingSvg,
                    }),
                    El({
                      element: "span",
                      className: "text-white text-[10px] font-bold",
                      child: "Add to Cart",
                    }),
                  ],
                }),
                onclick(){
                  alert('your product add to your cart')
                 SetLocalStorage({nameLocalStorage:"myCart",data:data,countPro:countPro})
                }
              }),
            ],
          }),
        ],
     });
     
    // } else {
    //  // flagHeart = 1;
    //   return El({
    //     element: "div",
    //     className: "",
    //     child: [
    //       El({
    //         element: "div",
    //         className: "bg-gray-100 h-72 w-full relative",
    //         id: "",
    //         child: [
    //           Link({
    //             to: `/`,
    //             child: El({
    //               element: "span",
    //               className: "cursor-pointer absolute left-4 top-2",
    //               innerHTML: svgs.ArrowLeftSvg,
    //             }),
    //           }),

    //           El({
    //             element: "img",
    //             className:
    //               "absolute w-3/4 left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2 ",
    //             // src:"https://s6.uupload.ir/files/p-3_1qrp.png"
    //             src: data.images[0],
    //           }),
    //           El({
    //             element: "div",
    //             className: "absolute left-1/2 -translate-x-1/2 bottom-4 ",
    //             child: [
    //               El({
    //                 element: "div",
    //                 className: "flex gap-1",
    //                 child: [
    //                   El({
    //                     element: "div",
    //                     className: "w-8 h-2 rounded-full bg-slate-950",
    //                     child: "",
    //                   }),
    //                   El({
    //                     element: "div",
    //                     className: "w-2 h-2 rounded-full bg-gray-200",
    //                     child: "",
    //                   }),
    //                   El({
    //                     element: "div",
    //                     className: "w-2 h-2 rounded-full bg-gray-200",
    //                     child: "",
    //                   }),
    //                   El({
    //                     element: "div",
    //                     className: "w-2 h-2 rounded-full bg-gray-200",
    //                     child: "",
    //                   }),
    //                   El({
    //                     element: "div",
    //                     className: "w-2 h-2 rounded-full bg-gray-200",
    //                     child: "",
    //                   }),
    //                 ],
    //               }),
    //             ],
    //           }),
    //         ],
    //       }),
    //       El({
    //         element: "div",
    //         className: "m-4 border-b pb-4",
    //         id: "",
    //         child: [
    //           El({
    //             element: "div",
    //             className: "flex justify-between mb-2",
    //             id: "",
    //             child: [
    //               El({
    //                 element: "p",
    //                 className: "font-bold text-xl capitalize ",
    //                 id: "",
    //                 child: data.name,
    //               }),
    //               El({
    //                 element: "span",
    //                 className: "",
    //                 id: "svg-heart",

    //                 innerHTML: svgs.HeartRedSvg,

    //                 onclick(e) {
    //                   e.preventDefault();
    //                   let svgHeart = document.getElementById("svg-heart");

    //                   console.log(data.popular);
    //                   updatePopular(data).then((res) => {
    //                     console.log(res.data.popular);

    //                     if (res.data.popular == false) {
    //                       console.log("false ast");
    //                       svgHeart.innerHTML = "";
    //                       svgHeart.innerHTML = svgs.HeartSvg;
    //                     } else {
    //                       console.log("true ast");
    //                       svgHeart.innerHTML = "";
    //                       svgHeart.innerHTML = svgs.HeartRedSvg;
    //                     }
    //                   });
    //                 },
    //               }),
    //             ],
    //           }),
    //           El({
    //             element: "div",
    //             className: " flex gap-1 items-center",
    //             id: "",
    //             child: [
    //               El({
    //                 element: "div",
    //                 className: "bg-gray-100 py-1 px-2 rounded ",
    //                 id: "",
    //                 child: El({
    //                   element: "p",
    //                   className: "text-[8px] tracking-tighter  text-slate-800",
    //                   id: "",
    //                   child: "5.371 solid",
    //                 }),
    //               }),
    //               El({
    //                 element: "span",
    //                 className: "",
    //                 id: "",
    //                 innerHTML: svgs.StarSvg,
    //               }),
    //               El({
    //                 element: "span",
    //                 className: "text-[8px] tracking-tighter text-slate-800 ",
    //                 id: "",
    //                 child: "4.3 (5.389 reviews)",
    //               }),
    //             ],
    //           }),
    //         ],
    //       }),
    //       El({
    //         element: "div",
    //         className: "px-4",
    //         id: "",
    //         child: [
    //           El({
    //             element: "span",
    //             className: "font-bold",
    //             id: "",
    //             child: "Description",
    //           }),
    //           El({
    //             element: "p",
    //             className: "text-sm text-slate-700 font-thin",
    //             id: "",
    //             child: data.des,
    //             // child:'Lorem ipsun dolor sit amet,constectetur adipiscing elit.se do eiusmod incididut ut labore et view more...'
    //           }),
    //         ],
    //       }),
    //       El({
    //         element: "div",
    //         className: "px-4 flex gap-2 mt-2 justify-between",
    //         id: "",
    //         child: [
    //           El({
    //             element: "div",
    //             className: "flex flex-col",
    //             id: "",
    //             child: [
    //               El({
    //                 element: "span",
    //                 className: "font-bold",
    //                 id: "",
    //                 child: "Size",
    //               }),
    //               El({
    //                 element: "div",
    //                 className: "flex gap-1 items-center mt-2 ",
    //                 id: "",
    //                 child: [
    //                   El({
    //                     element: "div",
    //                     className:
    //                       "w-8 h-8 border-slate-500  rounded-full border-2 active:bg-black active:border-none relative",
    //                     id: "",
    //                     child: El({
    //                       element: "span",
    //                       className:
    //                         "active:text-white   text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    //                       child: data.size[0],
    //                     }),
    //                   }),
    //                   El({
    //                     element: "div",
    //                     className:
    //                       "w-8 h-8 border-slate-500  rounded-full border-2 active:bg-black active:border-none relative",
    //                     id: "",
    //                     child: El({
    //                       element: "span",
    //                       className:
    //                         "active:text-white   text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    //                       child: data.size[1],
    //                     }),
    //                   }),
    //                   El({
    //                     element: "div",
    //                     className:
    //                       "w-8 h-8 border-slate-500  rounded-full border-2 active:bg-black active:border-none relative",
    //                     id: "",
    //                     child: El({
    //                       element: "span",
    //                       className:
    //                         "active:text-white   text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    //                       child: data.size[2],
    //                     }),
    //                   }),
    //                 ],
    //               }),
    //             ],
    //           }),
    //           El({
    //             element: "div",
    //             className: "flex-flex-col",
    //             id: "",
    //             child: [
    //               El({
    //                 element: "span",
    //                 className: "font-bold",
    //                 id: "",
    //                 child: "Color",
    //               }),
    //               El({
    //                 element: "div",
    //                 className: "flex gap-1 items-center mt-2",
    //                 id: "",
    //                 child: [
    //                   El({
    //                     element: "div",
    //                     className: "w-8 h-8  bg-gray-100 rounded-full relative",
    //                     child: El({
    //                       element: "span",
    //                       className:
    //                         "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    //                       innerHTML: svgs.TikSvg,
    //                     }),
    //                   }),
    //                   El({
    //                     element: "div",
    //                     className:
    //                       "w-8 h-8  bg-purple-600 rounded-full relative",
    //                     // child:El({
    //                     //     element:'span',
    //                     //     className:'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    //                     //     innerHTML:svgs.TikSvg
    //                     // }),
    //                   }),
    //                   El({
    //                     element: "div",
    //                     className: "w-8 h-8  bg-red-600 rounded-full relative",
    //                     // child:El({
    //                     //     element:'span',
    //                     //     className:'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    //                     //     innerHTML:svgs.TikSvg
    //                     // }),
    //                   }),
    //                   El({
    //                     element: "div",
    //                     className: "w-8 h-8  bg-blue-600 rounded-full relative",
    //                     // child:El({
    //                     //     element:'span',
    //                     //     className:'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    //                     //     innerHTML:svgs.TikSvg
    //                     // }),
    //                   }),
    //                 ],
    //               }),
    //             ],
    //           }),
    //         ],
    //       }),
    //       El({
    //         element: "div",
    //         className: "px-4 flex gap-4 items-center mt-4",
    //         id: "",
    //         child: [
    //           El({
    //             element: "span",
    //             className: "font-bold",
    //             id: "",
    //             child: "Quantity",
    //           }),
    //           El({
    //             element: "div",
    //             className: "bg-gray-100 w-28 h-8 rounded-full relative  ",
    //             id: "",
    //             child: El({
    //               element: "div",
    //               className:
    //                 "flex gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center",
    //               id: "",
    //               child: [
    //                 El({
    //                   element: "span",
    //                   className: "cursor-pointer ",
    //                   id: "",
    //                   onclick() {
    //                     clickQuantity("minus");
    //                     countTotalPrice(data.price);
    //                   },
    //                   innerHTML: svgs.MinusSvg,
    //                 }),
    //                 El({
    //                   element: "input",
    //                   className: "cursor-pointer bg-gray-100 w-8 outline-none",
    //                   //type:'number',
    //                   id: "quantity-pro",
    //                   value: "1",
    //                   onchange() {
    //                     //clickQuantity('plus')
    //                     countTotalPrice(data.price);
    //                   },
    //                 }),
    //                 El({
    //                   element: "div",
    //                   className: "cursor-pointer ",
    //                   onclick() {
    //                     clickQuantity("plus");
    //                     countTotalPrice(data.price);
    //                   },
    //                   innerHTML: svgs.PlusSvg,
    //                 }),
    //               ],
    //             }),
    //           }),
    //         ],
    //       }),
    //       El({
    //         element: "div",
    //         className:
    //           "mx-4 border-t mt-2 flex pt-2 justify-between items-center ",
    //         id: "",
    //         child: [
    //           El({
    //             element: "div",
    //             className: "",
    //             id: "",
    //             child: [
    //               El({
    //                 element: "span",
    //                 className: "text-[10px] text-slate-400  ",
    //                 id: "",
    //                 child: "Total price",
    //               }),
    //               El({
    //                 element: "span",
    //                 className: " font-bold flex gap-1",
    //                 id: "",
    //                 child: [
    //                   El({
    //                     element: "span",
    //                     className: "font-bold ",
    //                     id: "",
    //                     child: "$",
    //                   }),
    //                   El({
    //                     element: "span",
    //                     className: " font-bold flex gap-1",
    //                     id: "count-total",
    //                     child: data.price,
    //                     //child: countTotalPrice(data.price),
    //                   }),
    //                 ],
    //               }),
    //             ],
    //           }),
    //           El({
    //             element: "button",
    //             className:
    //               " bg-black text-white   rounded-full w-44 h-10 relative shrink mt-4",
    //             id: "",
    //             child: El({
    //               element: "div",
    //               className:
    //                 "flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center gap-2 ",
    //               id: "",
    //               child: [
    //                 El({
    //                   element: "span",
    //                   className: "text-white",
    //                   innerHTML: svgs.ShoppingSvg,
    //                 }),
    //                 El({
    //                   element: "span",
    //                   className: "text-white text-[10px] font-bold",
    //                   child: "Add to Cart",
    //                 }),
    //               ],
    //             }),
    //           }),
    //         ],
    //       }),
    //     ],
    //   });
    // }
 
};
function clickQuantity(input,price) {
  let quantityPro = document.getElementById("quantity-pro");
   countPro = +quantityPro.value;
  quantityPro.value = "";
  if (input === "minus") countPro--;
  else if(input === "plus") countPro++;
  else countPro

  quantityPro.value = countPro;
  let total = document.getElementById("count-total");
  total.innerHTML = "";
  total.innerHTML = countPro * price;
}
// function countTotalPrice(price) {
//   let test;

//   // setTimeout(() => {
//   //let quantityPro = document.getElementById("quantity-pro");
//   let total = document.getElementById("count-total");
//   // countPro = +quantityPro.value;
//   total.innerHTML = "";
//   console.log(price * countPro);
//   // let totalPrice=
//   test = countPro * price;
//   total.innerHTML = test;

//   // }, 1000);
// }

async function updatePopular(data) {
  try {
    // console.log(data.popular);
    //console.log(!data.popular);
    //let svgHeart=document.getElementById('svg-heart')
    const res = await axios.patch(`${Base_Url}/products/${data.id}`, {
      // "id":data.id,
      // "name":data.name,
      // "images":data.images,
      // "des":data.des,
      // "size":data.size,
      // "brand":data.brand,
      // "quntity": 20,
      // "price": data.price,
      // "color":data.color,
      popular: !data.popular,
    });

    return res;
  } catch (error) {
    alert(error);
  }
}

function showTik(e){
 
  let target=e.target
 
 let test=target.parentElement.children
 
 
console.log(test);
  //target.innerHTML=''
  target.appendChild(El({
      element: "span",
      className:
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      innerHTML: svgs.TikSvg,
    }))

}

