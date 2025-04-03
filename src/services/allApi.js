import { commonApi } from "./commonApi"
import { serverurl } from "./serverurl"


export const videoAddApi = async(reqBody)=>{
    return await commonApi('POST',`${serverurl}/video`,reqBody)
}


//API to get all videos

export const allVideosApi = async()=>{
    return await commonApi('GET', `${serverurl}/video`)
}

//to delete a video

export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE', `${serverurl}/video/${id}`,{})
}

//API to add video to watch history

export const addVideoHistoryApi = async(reqBody)=>{
    return await commonApi('POST', `${serverurl}/history`, reqBody)
}

//api to get all video from history

export const getAllVideoHistoryApi = async()=>{
    return await commonApi('GET', `${serverurl}/history`)
}

//api to delte video from history

export const deleteVideoHistoryApi = async(id)=>{
    return await commonApi('DELETE', `${serverurl}/history/${id}`, {})
}

export const addCategoryApi = async(reqBody)=>{
    return await commonApi ('POST',`${serverurl}/category`,reqBody)
}
export const getAllCategoryApi = async()=>{
    return await commonApi ('GET',`${serverurl}/category`)
}

export const deleteCategoryApi = async (id)=>{
    return await  commonApi ('DELETE',`${serverurl}/category/${id}`,{})

}

export const updateCategoryApi = async (id,reqBody)=>{
    return await commonApi('PUT',`${serverurl}/category/${id}`,reqBody)
}