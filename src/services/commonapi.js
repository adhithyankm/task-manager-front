import axios from "axios";

export const commonApi=async(method,url,data,header)=>{
    let conFig={
        url,
        method,
        data,
        headers:header?header:{
            "content-type":"application/json"
        }
    }

    return await axios (conFig).then((data)=>{
        return data
    }).catch((error)=>{
        return error
    })
}