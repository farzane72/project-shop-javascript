import El from "../../utils/El";
//import Slider from "../../pages/sliderStart/slider";
//import AuthForm from "../authForm/authForm";
import { svgs } from "../svg/svg";

export default function Loading() {
  //if exist user retuen
  //else excute this function

  return El({
    element: "div",
    className: "",
    child: El({
        element: "div",
        className:
          "bg-white w-screen h-screen relative overflow-hidden  ",
       // id: "active",
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
            element: "div",
            className: "absolute top-[90%] left-1/2  -translate-x-1/2",
            innerHTML: svgs.SnniperSvg,
          }),
        ],
      }),







  });
}


// [
//     El({
//       element: "div",
//       className: "sm:container mx-auto ",
//       child: [
//         El({
//           element: "div",
//           className:
//             "bg-white w-screen h-screen relative overflow-hidden  hidden",
//           id: "active",
//           child: [
//             El({
//               element: "div",
//               className:
//                 "flex items-center gap-2 absolute top-64 left-1/2  -translate-x-1/2",
//               child: [
//                 El({
//                   element: "span",
//                   className: "font-bold text-4xl",
//                   child: "Shoea",
//                 }),
//                 El({
//                   element: "div",
//                   className: "w-10 h-10 bg-black rounded-full",
//                   child: El({
//                     element: "span",
//                     className: "flex items-center justify-center ",
//                     innerHTML: svgs.IconSvg,
//                   }),
//                 }),
//               ],
//             }),
//             El({
//               element: "div",
//               className: "absolute top-[90%] left-1/2  -translate-x-1/2",
//               innerHTML: svgs.SnniperSvg,
//             }),
//           ],
//         }),
//         // El({
//         //     element:'div',
//         //     className:'w-screen h-screen relative hidden ',
//         //     child:[
//         //         El({
//         //             element:'img',
//         //             className:' w-full h-full',
//         //             src:'../public/images/Wallpaper1.png',
//         //         }),
//         //         El({
//         //             element:'div',
//         //             className:'absolute top-[70%] pl-4',
//         //             child:[
//         //                 El({
//         //                     element:'div',
//         //                     className:'flex gap-2 mb-2 ',
//         //                     child:[
//         //                         El({
//         //                             element:'p',
//         //                             className:'text-white text-xl font-bold',
//         //                             child:"Welcome to"
//         //                         }),
//         //                         El({
//         //                             element:'span',
//         //                             className:'w-2 h-2',
//         //                             innerHTML:svgs.HandSvg
//         //                         }),
//         //                     ]
//         //                 }),

//         //                 El({
//         //                     element:'p',
//         //                     className:'font-bold text-4xl text-white mb-2',
//         //                    child:"Shoea"

//         //                 }),
//         //                 El({
//         //                     element:'div',
//         //                     className:'text-sm text-white tracking-tight mb-2 ',
//         //                     child:"The best sneakers & shoes e-commerse app of the century for your fashion needs!"

//         //                 })

//         //             ]
//         //         }),

//         //     ],
//         // }),

//         // El({
//         //     element:'div',
//         //     className:'w-screen h-screen hidden ',
//         //     child:Slider({
//         //         text:'We provide high quality products just for you',
//         //         src:`../images/Wallpaper2.png`,
//         //         class1:'bg-slate-950',
//         //         class2:'bg-slate-600',
//         //         class3:'bg-slate-600',
//         //     })

//         // }),
//         // El({
//         //     element:'div',
//         //     className:'w-screen h-screen hidden',
//         //     child:Slider({
//         //         text:'Your satisfaction is our number one periority',
//         //         src:`../images/Wallpaper3.png`,
//         //         class1:'bg-slate-600',
//         //         class2:'bg-slate-950',
//         //         class3:'bg-slate-600',
//         //     })
//         // }),
//         // El({
//         //     element:'div',
//         //     className:'w-screen h-screen hidden',
//         //     child:Slider({
//         //         text:'Let’s fulfill your fashion needs with shoearight now!',
//         //         src:`../images/Wallpaper4.png`,
//         //         class1:'bg-slate-600',
//         //         class2:'bg-slate-600',
//         //         class3:'bg-slate-950',
//         //     })
//         // }),
//         // El({
//         //     element:'div',
//         //     className:'bg-white relative w-screen h-screen flex hidden ',
//         //     id:'p-2',
//         //     child:[
//         //         El({
//         //             element:'div',
//         //             className:'',
//         //             id:'',
//         //             innerHTML:svgs.ArrowLeftSvg
//         //         }),
//         //         El({
//         //             element:'div',
//         //             className:'w-[50px] h-[80px] absolute left-1/2 -translate-x-1/2 top-24',
//         //             child:El({
//         //                 element:'img',
//         //                 className:'w-full h-full   ',
//         //                 id:'',
//         //                 src:`../images/logo.png`,
//         //             }),

//         //         }),

//         //         El({
//         //             element:'div',
//         //             className:'absolute left-1/2 -translate-x-1/2 top-60',
//         //             id:'',
//         //             child: AuthForm()
//         //         }),
//         //     ]

//         // })
//       ],
//     }),
//   ],