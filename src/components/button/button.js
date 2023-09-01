import El from "../../utils/El"

const variants = {
    contained : "bg-gray-950 rounded-full px-4 py-1 text-white",
    outlined : "border border-slate-900  py-1 px-3 rounded-full border-2",
    //link : "bg-transparent"
    //active:bg-slate-900 active:text-white
}

export default function Button({element = "button" ,child , variant="contained" , className , ...rest }) {
  return (
    El({
        element : element,
        className : `${variants[variant]} ${className}`,
        child ,
        ...rest
    })
  )
}
