
import "./src/styles/index.css"
import { Routes } from "./src/routes/routes"
//import App from "./src/app"


//import MainLayout from "./src/layout/mainLayout"

//const root=document.getElementById("app")

//root.append(MainLayout(Routes()))
//root.append(MainLayout(App())) 
//root.append(Routes())
Routes().navigate(location.pathname)



