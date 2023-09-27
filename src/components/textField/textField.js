import El from "../../utils/El.js";
import { svgs } from "../svg/svg.js";

export const TextField = ({
                              helperText,
                              error = false,
                              icon1='',
                              icon2='',
                              ...inputProps
                          }) => {
    return El({
        element: 'div',
        className: 'flex text-gray-600 flex-col gap-4 px-1 relative w-[350px]',
        child: [
            
            El({
                className: `px-1 py-2  border  rounded-sm pl-8 bg-gray-100 w-full 
                ${error ? 'border-red-400' : ' '}
        `,
                element: 'input',
                ...inputProps,
            }),
           
            El({
                element:'span',
                className:'absolute top-4 left-4',
                innerHTML:icon1
                
            }),
           
            El({
                element:'span',
                className:'absolute top-4 right-4',
                //onclick(){},
                innerHTML:icon2
            }),
                
            El({
                element: 'p',
                className: 'text-xs flex gap-1 mt-2 px-1',
                child: helperText
                    ? [
                        El({
                            element: 'span',
                            className: error
                                ? '[&_path]:fill-red-500'
                                : '[&_path]:fill-blue-500',
                            innerHTML: error ? svgs.ErrorSvgIcon : svgs.InfoSvgIcon,
                        }),
                        El({
                            element: 'span',
                            className: `flex-1 ${error ? 'text-red-500' : 'text-gray-500'}`,
                            child: helperText,
                        }),
                    ]
                    : '',
            }),
        ],
    })
}
