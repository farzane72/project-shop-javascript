import axios from "axios";
import { Base_Url } from "../../constants";

export const setData = async ({endPoint,data}) => {
    try {
    //  console.log("kkk");
    //   const res = await axios({
    //     url: `${url}/users`,
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json;charset=UTF-8'
    //     },
    //     data: data 
    //     }) 
    //(`${Base_Url}/${endPoint}?${params}`)

    const res = await axios.post( `${Base_Url}/${endPoint}`,data)
    console.log(res.data);

    } catch (error) {
       alert(error);
    }
  };