import El from "../../utils/El";
import { Link } from "../link/link";
import { svgs } from "../svg/svg";

export const Address=({type='address',locationsName,location}) => {
    return El({
        element:'div',
        className:'bg-white p-4 flex justify-between items-center rounded-2xl mt-2',
        child:[
            El({
                element:'div',
                className:'flex items-center gap-2',
                child:[
                    El({
                        element:'div',
                        className:'w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center',
                        child:El({
                            element:'div',
                            className:'w-8 h-8 bg-black rounded-full flex items-center justify-center',
                            innerHTML:svgs.LocationSvg
                        }),
                    }),
                    El({
                        element:'div',
                        className:'flex flex-col ',
                        child:[
                            El({
                            element:'lable',
                            className:'font-bold capitalize ',
                            child:locationsName,
                            restAttrs: {
                                for:locationsName,
                                },
                        }),
                        El({
                            element:'span',
                            className:'text-gray-500 text-sm',
                           child:location
                        })
                    ]
                    })
                ]
            }),
            (type==="selectedAddress")?
            Link({
                to:'/shippingaddress',
                child:El({
                    element:'span',
                    className:'',
                    innerHTML:svgs.PenSvg
                    })
                } 
                )
                :
                El({
                element:'input',
                className:'appearance-none w-6 h-6 rounded-full border-black border-2 checked:border-8',
                type:'radio',
                name:'address',
                value:locationsName,
                id:locationsName,
                //eslah beshe
                
                restAttrs: {
                    "valueaddress":`${location}`,
                    },
            })
        ]
    })
}



//  El({
//     element:'div',
//     className:'bg-white p-4 flex justify-between items-center rounded-2xl',
//     child:[
//         El({
//             element:'div',
//             className:'flex items-center gap-2',
//             child:[
//                 El({
//                     element:'div',
//                     className:'w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center',
//                     child:El({
//                         element:'div',
//                         className:'w-8 h-8 bg-black rounded-full flex items-center justify-center',
//                         innerHTML:svgs.LocationSvg
//                     }),
//                 }),
//                 El({
//                     element:'div',
//                     className:'flex flex-col ',
//                     child:[
//                         El({
//                         element:'span',
//                         className:'font-bold ',
//                         child:'Home'
//                     }),
//                     El({
//                         element:'span',
//                         className:'text-gray-500 text-sm',
//                         child:'gaz Strret,12 Alley'
//                     })
//                 ]
//                 })
//             ]
//         }),
//         El({
//             element:'span',
//             className:'',
//             innerHTML:svgs.PenSvg
//         })
//     ]
// })