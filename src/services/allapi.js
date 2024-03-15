import { BASE_URL } from "./baseurl";
import { commonApi } from "./commonapi";

export const addTask= async(body,header)=>{
    return await commonApi("POST",`${BASE_URL}/addtask`,body,header)
}
export const getTasks= async()=>{
    return await commonApi("GET",`${BASE_URL}/get/alltasks`,"")
}

export const deleteTask=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/delete/task/${id}`,{})
}

export const editTask=async(id,body,header)=>{
    return await commonApi("PUT",`${BASE_URL}/edit/task/${id}`,body,header)
}