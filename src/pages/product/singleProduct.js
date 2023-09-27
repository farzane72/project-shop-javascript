import El from "../../utils/El";
import { svgs } from "../../components/svg/svg";
import { Link } from "../../components/link/link";
import { Base_Url } from "../../constants";
import axios from "axios";
import { SetLocalStorage } from "../../services/localstorage";
import { Toast } from "../../components/toast/toast";
let countPro = 1;

export const SingleProduct = (data) => {
  //console.log(data);
  
  let number = 0;
  

  return El({
    element: "div",
    className: "relative z-0",
    child: [
      El({
        element: "div",
        className: "bg-gray-100 h-60 w-full relative",
        id: "",
        child: [
          Link({
            to: `/`,
            child: El({
              element: "span",
              className: "cursor-pointer absolute left-4 top-2 z-10",
              innerHTML: svgs.ArrowLeftSvg,
            }),
          }),
          El({
            element: "div",
            id: "slider-images",
            className: "flex absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2   w-full p-8 ",
            child: data.images.map((value) => {
              return El({
                element: "img",
                //id: "img",
                className:" w-full  img  hidden first:block ",

                src: value,
              });
            }),
          }),

          El({
            element: "div",
            className: "absolute left-1/2 -translate-x-1/2 bottom-4 ",
            child: [
              El({
                element: "div",
                className: "flex gap-2",
                child: data.images.map(() => {
                  return El({
                    element: "span",
                    //id: "dot",
                    restAttrs: {
                      'data-number':number++,
                      },
                    className: "w-3 h-3 rounded-full bg-gray-400 cursor-pointer dot first:bg-slate-950 first:w-8",
                    child: "",
                    
                    onclick(e) {
                      let images = document.querySelectorAll(".img");
                      let dots = document.querySelectorAll(".dot");
                      //console.log(images);
                      let thisDot = e.target;
                      console.log(thisDot);
                      for(let i=0;i<data.images.length;i++){
                        images[i].classList.add('hidden')
                        images[i].classList.remove('first:block')
                      }
                      for(let i=0;i<data.images.length;i++){
                       
                        dots[i].classList.remove("w-8","bg-slate-950","first:bg-slate-950","first:w-8")
                         dots[i].classList.add("first:w-3", "first:bg-gray-400")
                       
                        dots[i].classList.add("w-3", "bg-gray-400")
                      }
                      
                      thisDot.classList.remove("w-3", "bg-gray-400","first:w-3", "first:bg-gray-400");
                      thisDot.classList.add("w-8", "bg-slate-950");
                      images[thisDot.dataset.number].classList.remove('hidden')
                    },
                  });
                }),

              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "mt-4 mx-4 mb-2 border-b pb-4",
        id: "",
        child: [
          El({
            element: "div",
            className: "flex justify-between mb-2 ",
            id: "",
            child: [
              El({
                element: "p",
                className: "font-bold text-2xl capitalize mb-2 ",
                id: "",
                child: data.name,
              }),
              data.popular
                ? El({
                    element: "span",
                    className: "relative z-50",
                    id: "svg-heart",
                    innerHTML: svgs.HeartRedSvg,
                    onclick(e) {
                      e.preventDefault();
                      let svgHeart = document.getElementById("svg-heart");

                      //console.log(data.popular);
                      updatePopular(data).then((res) => {
                       // console.log(res.data.popular);

                        if (res.data.popular == false) {
                         // console.log("false ast");
                          svgHeart.innerHTML = "";
                          svgHeart.innerHTML = svgs.HeartSvg;
                        } else {
                          //console.log("true ast");
                          svgHeart.innerHTML = "";
                          svgHeart.innerHTML = svgs.HeartRedSvg;
                        }
                      });
                    },
                  })
                : El({
                    element: "span",
                    className: "relative z-50",
                    id: "svg-heart",
                    innerHTML: svgs.HeartSvg,
                    onclick(e) {
                      e.preventDefault();
                      let svgHeart = document.getElementById("svg-heart");

                      //console.log(data.popular);
                      updatePopular(data).then((res) => {
                       // console.log(res.data.popular);

                        if (res.data.popular == false) {
                         // console.log("false ast");
                          svgHeart.innerHTML = "";
                          svgHeart.innerHTML = svgs.HeartSvg;
                        } else {
                          //console.log("true ast");
                          svgHeart.innerHTML = "";
                          svgHeart.innerHTML = svgs.HeartRedSvg;
                        }
                      });
                    },
                  }),
            ],
          }),
          El({
            element: "div",
            className: " flex gap-1 items-center",
            id: "",
            child: [
              El({
                element: "div",
                className: "bg-gray-100 py-1 px-2 rounded ",
                id: "",
                child: El({
                  element: "p",
                  className: "text-sm tracking-tighter  text-slate-800",
                  id: "",
                  child: "5.371 solid",
                }),
              }),
              El({
                element: "span",
                className: "",
                id: "",
                innerHTML: svgs.StarSvg,
              }),
              El({
                element: "span",
                className: "text-sm tracking-tighter text-slate-800 ",
                id: "",
                child: "4.3 (5.389 reviews)",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-4",
        id: "",
        child: [
          El({
            element: "span",
            className: "font-bold text-lg ",
            id: "",
            child: "Description",
          }),
          El({
            element: "p",
            className: "text-[16px] text-slate-700 font-thin",
            id: "",
            child: data.des,
            // child:'Lorem ipsun dolor sit amet,constectetur adipiscing elit.se do eiusmod incididut ut labore et view more...'
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-4 flex gap-2 mt-2 justify-between",
        id: "",
        child: [
          El({
            element: "div",
            className: "flex flex-col",
            id: "",
            child: [
              El({
                element: "span",
                className: "font-bold text-lg",
                id: "",
                child: "Size",
              }),
              El({
                element: "div",
                className: "flex gap-1 items-center mt-2 ",
                id: "",
                onclick(e) {
                  // let target = e.target;
                  // console.log(target);
                  // target.classList.add("text-white");
                  // target.parentElement.classList.add("bg-black", "border-none");
                },
                child: data.size.map((value) => {
                 return El({
                  element:'div',
                  className:'relative  ',
                  child:[
                    El({
                      element: "input",
                      className:
                        "appearance-none w-8 h-8 border-slate-500  rounded-full border-2    checked:border-none checked:bg-black cursor-pointer ",
                        type:'radio',
                        name:'size',
                        value:value,
                        id: "",
                      }),
                       El({
                        element: "lable",
                        restAttrs: {
                            'for':value,
                            },
                        className:
                          "   text-slate-500 absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer ",
                        child:value,
                      })
                  ]
                 })
                  
                 

                })
                 
                
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex-flex-col",
            id: "",
            child: [
              El({
                element: "span",
                className: "font-bold text-lg",
                id: "",
                child: "Color",
              }),
              El({
                element: "div",
                className: "flex gap-1 items-center mt-2",
                id: "",
                onclick(e) {
                  // show tik on color and choice and set in local storage as User selected color
                //  showTik(e);
                },
                child:data.color.map((value) => {
                  return  El({
                    element: "div",
                    className: "",
                    child:[
                      El({
                        element: "input",
                        type:'radio',
                        name:'color',
                        value:value,
                        className: `appearance-none w-8 h-8  bg-${value}-500 rounded-full cursor-pointer checked:border checked:border-black  checked:border-2`,
                        
                      }),
                      // El({
                      //       element:'span',
                      //       className:'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                      //       innerHTML:svgs.TikSvg
                      //   })
                    ]
                   
                   
                 })
                })
                  
                 // El({
                  //  element: "div",
                  //  className: "w-8 h-8  bg-blue-600 rounded-full relative",
                    // child:El({
                    //     element:'span',
                    //     className:'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                    //     innerHTML:svgs.TikSvg
                    // }),
                 // }),
               
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-4 flex gap-4 items-center mt-4",
        id: "",
        child: [
          El({
            element: "span",
            className: "font-bold",
            id: "",
            child: "Quantity",
          }),
          El({
            element: "div",
            className: "bg-gray-100 w-28 h-8 rounded-full relative  ",
            id: "",
            child: El({
              element: "div",
              className:
                "flex gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center",
              id: "",
              child: [
                El({
                  element: "span",
                  className: "cursor-pointer ",
                  id: "",
                  onclick() {
                    clickQuantity("minus", data.price);
                    // countTotalPrice(data.price);
                  },
                  innerHTML: svgs.MinusSvg,
                }),
                El({
                  element: "input",
                  className: "cursor-pointer bg-gray-100 w-8 outline-none",
                  //type:'number',
                  id: "quantity-pro",
                  value: "1",
                  onchange() {
                    clickQuantity("", data.price);
                    // countTotalPrice(data.price);
                  },
                }),
                El({
                  element: "div",
                  className: "cursor-pointer ",
                  onclick() {
                    clickQuantity("plus", data.price);
                    // countTotalPrice(data.price);
                  },
                  innerHTML: svgs.PlusSvg,
                }),
              ],
            }),
          }),
        ],
      }),
      El({
        element: "div",
        className: "mx-4 border-t mt-2  mb-4 flex pt-2 justify-between items-center ",
        id: "",
        child: [
          El({
            element: "div",
            className: "",
            id: "",
            child: [
              El({
                element: "span",
                className: "text-sm text-slate-400  ",
                id: "",
                child: "Total price",
              }),
              El({
                element: "span",
                className: " font-bold flex gap-1",
                id: "",
                child: [
                  El({
                    element: "span",
                    className: "font-bold text-lg ",
                    id: "",
                    child: "$",
                  }),
                  El({
                    element: "span",
                    className: " font-bold flex gap-1 text-lg",
                    id: "count-total",
                    child: data.price,
                    //child: countTotalPrice(data.price),
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "button",
            className:
              " bg-black text-white   rounded-full w-44 h-10 relative shrink mt-4",
            id: "",
            child: El({
              element: "div",
              className:
                "flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center gap-2 ",
              id: "",
              child: [
                El({
                  element: "span",
                  className: "text-white",
                  innerHTML: svgs.ShoppingSvg,
                }),
                El({
                  element: "span",
                  className: "text-white text-[10px] font-bold",
                  child: "Add to Cart",
                }),
              ],
            }),
            onclick() {
              //alert("your product add to your cart") with toast;
              Toast("محصول شما به سبد خرید افزوده شد")
              //add size to local
              console.log(countPro);
              SetLocalStorage({
                nameLocalStorage: "myCart",
               // data: data,
               data:{
                id:data.id,
                name:data.name,
                price:data.price,
                countPro: countPro,
                image:data.images[0],
                brand:data.brand,
                selectedSize:selectd('size'),
                selectedColor:selectd('color')}
                
                //name,image,brand,price
              });
            },
          }),
        ],
      }),
    ],
  });
};
function clickQuantity(input, price) {
  let quantityPro = document.getElementById("quantity-pro");
  countPro = +quantityPro.value;
  quantityPro.value = "";
  if (input === "minus") countPro--;
  else if (input === "plus") countPro++;
  else countPro
console.log(countPro);

  quantityPro.value = countPro;
  let total = document.getElementById("count-total");
  total.innerHTML = "";
  total.innerHTML = countPro * price;
}

async function updatePopular(data) {
  try {
    // console.log(data.popular);
    //console.log(!data.popular);
    //let svgHeart=document.getElementById('svg-heart')
    const res = await axios.patch(`${Base_Url}/products/${data.id}`, {
      // "id":data.id,
      // "name":data.name,
      // "images":data.images,
      // "des":data.des,
      // "size":data.size,
      // "brand":data.brand,
      // "quntity": 20,
      // "price": data.price,
      // "color":data.color,
      popular: !data.popular,
    });

    return res;
  } catch (error) {
    alert(error);
  }
}

// function showTik(e) {
//   let target = e.target;

//   let test = target.parentElement.children;

//   console.log(test);
//   //target.innerHTML=''
//   target.appendChild(
//     El({
//       element: "span",
//       className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
//       innerHTML: svgs.TikSvg,
//     })
//   );
// }


function selectd(name){
  const radioButtons = document.querySelectorAll(`input[name=${name}]`);
  
  for (const radioButton of radioButtons) {
      if (radioButton.checked) {
          return  radioButton.value

         
      }
  }
}