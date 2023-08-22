import El from "../../utils/El";


export default function Order(){
    return El({
        element:"div",
        className:'',
        child:[
            El({
                element:'div',
                className:'',
                child:"header order"
            }),
            El({
                element:'div',
                className:'',
                child:'main order'
            }),
            
        ]
    })
}