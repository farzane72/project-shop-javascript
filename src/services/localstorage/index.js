import { MyCart } from "../../pages/myCart/cart";
import Search from "../../pages/search/search";
import { SearchHome } from "../../pages/search/searchHome";

let arrayCart=[]
//let arraySearch=[{id: 1693296488898, data: 'nike'}]

export const SetLocalStorage=({nameLocalStorage,data,countPro=1})=>{
    //bayad size o color ham add she
    arrayCart = GetLocalStorage(`${nameLocalStorage}`)
console.log(`${nameLocalStorage}`);
let  newData={
    countPro,
    ...data
}
    arrayCart.push(newData)

    localStorage.setItem(`${nameLocalStorage}`, JSON.stringify( arrayCart));

}

export const GetLocalStorage=(nameLocalStorage)=>{
    //when wasn't any data in local return null
    let emptyArray=[]
    let array = JSON.parse(localStorage.getItem(`${nameLocalStorage}`));
    if(array===null) return  emptyArray
    else
    return array
}
export const EditQtyLocalStorage=({nameLocalStorage,id,qty})=>{
    arrayCart = GetLocalStorage(`${nameLocalStorage}`)

    let editQty =  arrayCart.find((t) => t.id === id);
    editQty.countPro=qty

    localStorage.setItem(`${nameLocalStorage}`, JSON.stringify( arrayCart));
}

export const DeleteLocalStorage=({nameLocalStorage,id})=>{

    arrayCart = GetLocalStorage(`${nameLocalStorage}`)
    arrayCart.forEach((item, index, arrayCart) => {
        if (item.id === id) {
            arrayCart.splice(index, 1);
        }
    })
    localStorage.setItem(`${nameLocalStorage}`, JSON.stringify( arrayCart));
   let myCart=document.getElementById('pageCart')
     myCart.innerHTML=''
     myCart.appendChild(MyCart(arrayCart))


}

export const SetRecentSearchLocalStorage=({nameLocalStorage,title})=>{
   let arraySearch=[]

    console.log( nameLocalStorage);
    console.log( title);
     arraySearch = GetLocalStorage(`${nameLocalStorage}`)
    console.log(  arraySearch);
    let newData={
        id:Date.now(), 
        title:title
    }
    console.log( newData);
    arraySearch.push(newData)
    
        localStorage.setItem(`${nameLocalStorage}`, JSON.stringify( arraySearch));
}

export const DeleteLoSRecentsSearch=({nameLocalStorage,id})=>{
console.log(id);
  let  array = GetLocalStorage(`${nameLocalStorage}`)
  console.log(array);
    array.forEach((item, index, array) => {
        if (item.id === id) {
            array.splice(index, 1);
        }
    })
    localStorage.setItem(`${nameLocalStorage}`, JSON.stringify( array));
   let searchResult=document.getElementById('search-result')
   searchResult.innerHTML=''
  

   array.forEach(element => {
    searchResult.appendChild(SearchHome({
       type:'pageSearch',
        title:element.title,
       
    }))
})


}

