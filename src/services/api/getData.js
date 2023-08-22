import axios from "axios";
import { Base_Url } from "../../constants";

export const getData= async ({endPoint,params}) => {
    try{
        // const response = await axios(`${url}/users?email=${email}`);
      
        // const data = response.data;
        // console.log(data);
        // return data;
        const response= await axios.get(`${Base_Url}/${endPoint}?${params}`)
        console.log(`${Base_Url}/${endPoint}?${params}`);
        return response.data


    }catch(error)
    {
        console.log(error.response);
    }
   
   
};