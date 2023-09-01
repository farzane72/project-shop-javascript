
import El from "../../utils/El";
import { Link } from "../link/link";
import { svgs } from "../svg/svg";

export const Peyment=({type='shipping',peymentsName,price,des,src}) => {
    return El({
        element:'div',
        className:'bg-white p-4 flex justify-between items-center rounded-2xl mt-2',
        child:[
            El({
                element:'div',
                className:'flex items-center gap-2',
                child:[
                    (type==='shipping')?
                        El({
                            element:'div',
                            className:'w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center',
                        child:
                            El({
                            element:'img',
                            className:'p-2',
                            src:src
                        })
                        }):
                        El({
                            element:'img',
                            className:'p-2 w-12 h-12',
                            src:src
                        }),
                    El({
                        element:'div',
                        className:'flex flex-col ',
                        child:[
                            El({
                            element:'lable',
                            className:'font-bold capitalize ',
                            child:peymentsName,
                            restAttrs: {
                                for:peymentsName,
                                },
                        }),
                        El({
                            element:'span',
                            className:'text-gray-500 text-sm',
                           child:des
                        })
                    ]
                    })
                ]
            }),
            El({
                element:'div',
                className:'flex gap-2 items-center',
                child:[
                    (price)?
                    El({
                    element:'div',
                    className:'flex  items-center',
                    child:[El({
                        element:'span',
                        className:'font-bold',
                        child:'$'
                        }),
                        El({
                            element:'span',
                            className:'font-bold',
                            child:price
                            })
                    ]
                    }):
                    "",
                    (type==='shipping')?
                        El({
                        element:'input',
                        className:'appearance-none w-6 h-6 rounded-full border-black border-2 checked:border-8',
                        type:'radio',
                        name:'shipping',
                        value:peymentsName,
                        id:peymentsName,
                        })
                        :
                        El({
                            element:'input',
                            className:'appearance-none w-6 h-6 rounded-full border-black border-2 checked:border-8',
                            type:'radio',
                            name:'payment',
                            value:peymentsName,
                            id:peymentsName,
                            })
            ]
            })
               
        ]
    })
}


