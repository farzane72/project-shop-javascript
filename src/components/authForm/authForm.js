import El from "../../utils/El.js";
import { Form } from "../form/form.js";
import Button from "../button/button.js";
import { svgs } from "../svg/svg.js";
import { TextField } from "../textField/textField.js";
import Home from "../../pages/home/home.js";
import Cookies from "js-cookie";
//import axios from 'axios';
import { getData } from "../../services/api/getData.js";
import { setData } from "../../services/api/setData.js";

const AuthForm = () => {
  return El({
    element: "div",
    className: "relative",
    child: [
      Form({
        id: "register",
        className: " px-3 ",
        child: [
          TextField({
            placeholder: "Email",
            name: "email",
            type: "email",
            icon1: `${svgs.EmailSvg}`,
            restAttrs: {
              "data-valid": false,
            },
          }),

          TextField({
            placeholder: "Password",
            // type:'password',
            name: "password",
            icon1: `${svgs.PasswordSvg}`,
            icon2: `${svgs.ViewPasswordSvg}`,
            restAttrs: {
              "data-valid": false,
            },
          }),
          El({
            element: "div",
            className: " mt-[50%] mb-6",
            child: Button({
              className: "w-full ",
              child: "Sign In",
            }),
          }),
        ],
        handleSubmit(data) {
          console.log(data.email);
          //send email to get and fetch is there user in db or no
          //if there is ,dont register again just set new cookie and go home
          //else add to db and set to cookie and go home

          getData({
            endPoint: "users",
            params: `?email=${data.email}`,
          }).then((dataFetch) => {
            console.log(dataFetch);
            console.log(dataFetch.id);
            if (dataFetch.length === 0) {
              setData({
                endPoint: "users",
                data: data,
              }).then(() => {
                alert(" you login successfully :)");
                //-------------------set to cookie-----------
                const token = "JWT_fwqyt#34#$%3453454575bjhgfjWQE";
                Cookies.set("token", token, {
                  expires: 1,
                });
                //---------------set localstorage-for address------ taghir--------------
                localStorage.setItem("usersEmail", JSON.stringify(data.email));
                // localStorage.setItem(
                //   "usersInfo",
                //   JSON.stringify({
                //     usersEmail: data.email,
                //     usersId: dataFetch.id,
                //   })
                // );
                //--------------------start page-------------
                let startPage = document.getElementById("startPage");
                startPage.innerHTML = "";
                startPage.appendChild(Home());
              });
              //     .then(()=>{
              //         const token = 'JWT_fwqyt#34#$%3453454575bjhgfjWQE'
              //         Cookies.set('token', token, {
              //             expires: 1,
              //         })
              //     })
              //     .then(()=>{
              //         //set cooki
              //         let startPage = document.getElementById("startPage");
              //         startPage.innerHTML = "";
              //         startPage.appendChild(Home())
              //     }
              //    )
            } else {
              //set new

              const token = "JWT_fwqyt#34#$%3453454575bjhgfjWQE";
              Cookies.set("token", token, {
                expires: 1,
              });

              alert(" you dont login,you be here before ");
              let startPage = document.getElementById("startPage");
              startPage.innerHTML = "";
              startPage.appendChild(Home());
            }
          });
        },
        handleErrors(errors) {
          console.log(errors, "here");
        },
      }),
      El({
        element: "div",
        className: "absolute top-[40%] left-1/2 -translate-x-1/2",
        child: [
          El({
            element: "input",
            className: "",
            type: "checkbox",
            id: "remember",
            // checked
          }),
          El({
            element: "lable",
            className: "",
            for: "remember",
            child: "Remember me",
          }),
        ],
      }),
    ],
  });
};

export default AuthForm;

//--------------------------------------------api-&& axious---------------------------------------------------

// const getUsers = async (email) => {
//     //const res = await fetch(`${url}/users`);
//     const res = await fetch(`${url}/users?email=${email}`);
//     //?status=true
//     const data = await res.json();
//     console.log(data);
//     return data;
// };

// const setUsers = async (data) => {
//   try {
//     console.log("kkk");
//     const res = await fetch(`${url}/users`, {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     const result = await res.json();

//     console.log("Success:", result);
//   } catch (error) {
//     // alert(error);
//   }
// };

//------------for axios---------------------------------------------------------

//-------------------------------------------
