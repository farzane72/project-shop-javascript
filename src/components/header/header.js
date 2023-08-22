import El from "../../utils/El";
import { svgs } from "../svg/svg";
export default function Header(){
    return El({
    element:'header',
    className:'p-2',
    child:[
        El({
            element:'div',
            className:'flex justify-between',
            child:[
                El({
                    element:'div',
                    className:'flex gap-2',
                    child:[
                        El({
                            element:'div',
                            className:'',
                            child:El({
                            element:'img',
                            className:'',
                            src:'../public/images/profile.png',

                            })
                        }),
                        El({
                            element:'div',
                            className:'flex flex-col',
                            child:[
                                El({
                                    element:'div',
                                    className:'flex gap-2 items-center',
                                    child:[
                                        El({
                                            element:'span',
                                            className:'text-gray-400',
                                            child:'Good Morning'
                                        }), El({
                                            element:'span',
                                            className:'',
                                           innerHTML:svgs.HandSvg
                                        }),
                                    ]
                                }),
                                El({
                                    element:'span',
                                    className:'font-bold',
                                    child:'Farzane Jahanpour'
                                }),

                            ]
                        }),
        
                    ]
                
                    }),
                    El({
                        element:'div',
                        className:'flex justify-between gap-2',
                        child:[
                            El({
                                element:'div',
                                className:'',
                                innerHTML:svgs.BellSvg
                            
                                }),
                                El({
                                    element:'div',
                                    className:'flex justify-between',
                                    innerHTML:svgs.HeartSvg
                                
                                    })
                        
                        ]
                    
                        })            
            ]
        
            })
    ]

    })
}