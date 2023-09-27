import El from "../../utils/El";
import Loading from "../loading/loadingPage";
import { Welcome } from "../../components/welcome/welcome";
import { StartSlider } from "../../components/startSlider/startSlider";
//import { Login } from "../../components/login/login";
import LoadingPage from "../loading/loadingPage";

export const StartPage = () => {
  setTimeout(() => {
    let startPage = document.getElementById("startPage");
    startPage.innerHTML = "";
    startPage.appendChild(Welcome());
    setTimeout(() => {
      startPage.innerHTML = "";
      startPage.append(StartSlider());
    //   setTimeout(() => {
    //     startPage.innerHTML = "";
    //     startPage.appendChild(Login());
    //     }, 2000);

    }, 2000);
    
  }, 2000);

  return El({
    element: "div",
    className: "overflow-hidden sm:container mx-auto h-screen w-screen h-full",
    id: "startPage",
    child:LoadingPage(),
  });
};
