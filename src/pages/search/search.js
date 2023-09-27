import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";
import { SetRecentSearchLocalStorage,GetLocalStorage } from "../../services/localstorage";
import { getData } from "../../services/api/getData";
import { NotFound } from "../../components/notFound/notFound";
import { Product } from "../../components/product/product";
import { Link } from "../../components/link/link";
import { SearchHome } from "./searchHome";


export default function Search(){

    return El({
        element:"div",
        className:'p-4 ',
        child:[
            El({
                element:'div',
                className:'mb-4',
                child:[
                    Link({
                        to: `/`,
                        child: El({
                          element: "span",
                          className: "cursor-pointer mb-4 ",
                          innerHTML: svgs.ArrowLeftSvg,
                        }),
                      }),
                    El({
                        element:'input',
                        id:'input-search',
                        className:'px-10 py-4 w-full rounded-2xl placeholder:text-gray-400 relative bg-gray-100 ',
                        placeholder:'serach...',
                        type:'search',
                        onchange(e){
                            e.preventDefault()
                            let searchsInput=document.getElementById('input-search')
                            let searchsTitle=searchsInput.value.trim()
                            let result=document.getElementById('search-result')
                           // console.log(searchsTitle);
                            
                            //-------------------------getdata and search -------------------------------------------------
                             getData({
                                endPoint: "products",
                                params: `?name_like=${searchsTitle}`,
                              }).then((data) => {
                                    console.log(data);
                                    //console.log(data);titleRecentsSearch
                                  let  resultSearch=document.getElementById('result-for')
                                  let  found=document.getElementById('founds')
                                  let titleRecentsSearch=document.getElementById('title-recent-Search')
                                  titleRecentsSearch.classList.remove('hidden')
                                  titleRecentsSearch.innerHTML=''
                                  found.innerHTML=''
                                  resultSearch.innerHTML=`Result For "${searchsTitle}"`
                                  found.innerHTML=` "${data.length}" founds`

                                 
                                    if(data.length>=1){
                                        //-------------------------------set to local storage-------------------------------------------
                                        SetRecentSearchLocalStorage({
                                            nameLocalStorage:"recentsSearch",
                                            title:searchsTitle
                                        })

                                        
                                        console.log(data);
                                        result.innerHTML=''
                                        data.forEach(element => {
                                            result.appendChild(Product({
                                                id:element.id,
                                                src:`${element.images[0]}`,
                                                title:element.name,
                                                price:element.price
                                            }))
                                        })
                                        }
                                        else{
                                            result.innerHTML=''
                                            result.appendChild(NotFound({
                                                title:'Not Found ',
                                                des:'Sorry,the keyword you entered cannot be found,please check again or search with another keyword'
                                            }))
                                        }

                              });

                        },
                        onclick(e){
                            e.preventDefault()
                            let searchsInput=document.getElementById('input-search')
                          //  let searchsTitle=searchsInput.value.trim()
                            let result=document.getElementById('search-result')
                            let array=GetLocalStorage('recentsSearch')
                           // let recentsSearch=document.getElementById('recent-Search')
                            let titleRecentsSearch=document.getElementById('title-recent-Search')
                            let  resultSearch=document.getElementById('result-for')
                            let  found=document.getElementById('founds')
                            resultSearch.innerHTML=''
                            found.innerHTML=''
                            titleRecentsSearch.classList.remove('hidden')
                            //console.log(array);
                            result.innerHTML=""
                            array.forEach(element => {
                                result.appendChild(SearchHome({
                                   type:'pageSearch',
                                    title:element.title,
                                    id:element.id,
                                }))
                            })

                        }
                        
                           
                        
                    }),
                    El({
                        element:'span',
                        className:'absolute top-14  left-6',
                        innerHTML:svgs.SearchSvg2
                    }),
                    El({
                        element:'div',
                        className:'absolute top-16  right-6',
                        innerHTML:svgs.InnerSearchSvg
                    }),
                    El({
                        element: "div",
                        className: "border-b mx-2  w-full px-10  py-2 hidden ",
                        id:'title-recent-Search',
                        child:[
                            El({
                                element: "div",
                                className: " flex items-center justify-between  ",
                                id:'',
                                child:[
                                    El({
                                        element: "div",
                                        className: "font-bold ",
                                        child:'Recent'
                                      }),
                                      El({
                                        element: "div",
                                        className: "font-bold cursor-pointer ",
                                        id:'',
                                        child:'Clear All',
                                        onclick(){
                                            localStorage.removeItem("recentsSearch");
                                           // localStorage.setItem(`${nameLocalStorage}`, JSON.stringify( array));
                                            let searchResult=document.getElementById('search-result')
                                            searchResult.innerHTML=''
                                            
                                        }
                                      }),
                                ]
                              }),
                              El({
                                element: "div",
                                id:'recent-Search',
                                className: " flex flex-col mb-2 ",
                                child:[]
                              }),
                              
                            
                        ]
                      }),
                    El({
                        element:'div',
                        className:'mt-2 mb-4 flex items-center justify-between',
                        child:[
                            El({
                                element:'div',
                                className:'font-bold',
                                id:'result-for',
                               // child:`Result For "${}"`
                               child:''
        
                               
                            }),
                            El({
                                element:'div',
                                className:'font-bold',
                                id:'founds',
                                child:``
                            }),
                        ]
                       
                    }),
                

                ]
            }),
            
           
            El({
                element:'div',
                className:'grid grid-cols-2 gap-10 relative',
                id:'search-result',
                child:[
                    El({
                        element:'div',
                        className:'',
                        id:''
                        // child:[
                            
                        // ]
                    }),
                ]
            }),
            
        ]
    })
}