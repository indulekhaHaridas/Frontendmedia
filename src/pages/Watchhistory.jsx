import { faHouse , faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryApi, getAllVideoHistoryApi } from '../services/allApi'




function Watchhistory() {

  const [videoHistory, setVideoHistory] = useState([])
  const [deleteStatus, setDeleteStatus] = useState()

  const getAllHistory = async()=>{
    const result = await getAllVideoHistoryApi()
    console.log(result);
    
    if(result.status>=200 && result.status <300){
      setVideoHistory(result.data)
    }
  }

  //console.log(videoHistory);

  const deleteVideo = async(id)=>{
    const result = await deleteVideoHistoryApi(id)
    console.log(result);

    if(result.status>=200 && result.status<300){
      setDeleteStatus(result.data)
    }
    
  }

  useEffect(()=>{
    getAllHistory()
  },[deleteStatus])
  
  return (
    <>
      <div className='container d-flex justify-content-between align-items-center mt-5'>
        <h6>Watch History</h6>
        <Link to={'/home'} style={{ textDecoration: 'none' }}><h6 className='d-flex justify-content-center align-items-center'><span className='d-none d-md-flex fs-6 me-3'>Back Home</span> <FontAwesomeIcon icon={faHouse} className='me-4' /></h6></Link>
      </div>

      <div className="container mt-5 table-responsive">
        {videoHistory?.length>0?<table className='table table-bordered'>

          <thead>
            <tr>
              <th className='p-3 text-center'>Sl.No</th>
              <th className='p-3 text-center'>Caption</th>
              <th className='p-3 text-center'>Url</th>
              <th className='p-3 text-center'>TimeStamp</th>
              <th className='p-3 text-center'>Action</th>
            </tr>
          </thead>
          <tbody >
            {
              videoHistory?.map((item, index) => (
                <tr key={index}>
                  <td className='p-3 text-center'>{index + 1}</td>
                  <td className='p-3 text-center'>{item?.caption}</td>
                  <td className='p-3 text-center'><Link to={`${item?.url}`} target='_blank'>{item?.url}</Link></td>
                  <td className='p-3 text-center'>{item?.time}</td>
                  <td className='p-3 text-center'><button onClick={()=>deleteVideo(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
              ))
            }
          </tbody>
        </table> :
        <h4 className='text-danger text-center mt-5'>History Cleared</h4>}
      </div>
    </>
  )
}

export default Watchhistory