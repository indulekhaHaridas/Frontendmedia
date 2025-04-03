import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideoApi } from '../services/allApi';



function VideoCard({video , setDeleteVideoStatus, isPresent}){
 // console.log(video);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const addVideoHistory = async()=>{
    let caption = video?.caption
    let url = video?.embedLink 
    const time = new Date()
    //console.log(time);

    const result = new Intl.DateTimeFormat("en-GB",{year:'numeric' , month:'2-digit' , day:'2-digit' , hour:'2-digit' , minute:'2-digit'}).format(time)

   // console.log(result);

    const response = await addVideoHistoryApi({caption , url , time:result})
    console.log(response);
    
    
    
    //api
  }

  const handleShow = () => {setShow(true);

    addVideoHistory()
  }

  const deleteVideo = async(id)=>{
    const result = await deleteVideoApi(id)
    console.log(result);

    if(result.status >=200 && result.status<300){
      setDeleteVideoStatus(result.data)
    }
    
  }
  const videoDrag = (e,video)=>{
    console.log(e);
    console.log(video);
    e.dataTransfer.setData("videoDetails",JSON.stringify(video))
  }

  return (
    <div>
      <Card style={{ width:'100%'}} className='mt-3' draggable onDragStart={(e)=>videoDrag(e,video)}>
        {!isPresent && 
      <Card.Img variant="top" src={video?.image}  onClick={handleShow}/>}
      <Card.Body className='d-flex justify-content-between align-items-center'>
        <Card.Text className='mt-3'>{video?.caption}</Card.Text>
        <Button variant="danger" onClick={()=>deleteVideo(video?.id)} ><FontAwesomeIcon icon={faTrashCan} /></Button>
      </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="369" src={`${video?.embedLink}?autoplay=1`} title="L2E Empuraan Trailer (Malayalam) | Mohanlal | Prithviraj Sukumaran | Murali Gopy | March 27 Release" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default VideoCard