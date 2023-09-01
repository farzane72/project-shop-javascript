import El from "../../utils/El";

export const NotFound=({title,des})=>{
    return El({
        element:'div',
        className:'flex flex-col absolute left-1/2 top-1/2 -translate-x-1/2  w-[300px] h-[400px]',
        child:[
            El({
                element:'div',
                className:'',
                child:El({
                    element:'img',
                    className:'w-full',
                    src:'../images/notfound.png'
                }),
            }),
            El({
                element:'p',
                className:'font-bold text-center',
                child:title
            }),
            El({
                element:'p',
                className:'text-sm text-gray-400 text-center',
                child:des
            })
        ]
    })
}