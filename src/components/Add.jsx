import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { videoAddApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';




function Add({setAddVideoStatus}) {

  const [show, setShow] = useState(false);

  const [videoDetails, setvideoDetails] = useState({
    caption: "",
    image: "",
    embedLink: ""
  })

  console.log(videoDetails);

  const handleClose = () => {
    setShow(false)
    handleReset()
  };
  const handleShow = () => setShow(true);

  const handleReset = () => {
    setvideoDetails({
      caption: "",
      image: "",
      embedLink: ""
    })
  }

  const handleUpload = async()=>{
    const {caption , image , embedLink} = videoDetails
    if(!caption || !image || !embedLink){
      alert('Please fill the field completely')
    }
    else{

      

      //https://www.youtube.com/watch?v=9fyOu2dxgOY&list=RDU1JLtpJTe84&index=6

      if(embedLink.startsWith('https://youtu.be')){
        let link =`https://www.youtube.com/embed/${embedLink.slice(34,45)}` 
        console.log(link);

        const result = await videoAddApi({caption, image , embedLink:link})
        console.log(result);

        if(result.status >= 200 && result.status < 300){
          toast.success('Video added successfully')
          handleClose()
          
          setAddVideoStatus(result.data)

        }
        else{
          toast.danger('Something went wrong')
          handleReset()
        }
        
      }
      //https://youtu.be/9fyOu2dxgOY?si=E2CYl9pwe3vpF6da

      else{
        let link =`https://www.youtube.com/embed/${embedLink.slice(-11)}`
        console.log(link);
        
        const result = await videoAddApi({caption, image , embedLink:link})
        console.log(result);

        if(result.status >= 200 && result.status < 300){
          toast.success('Video added successfully')
          handleClose()

          setAddVideoStatus(result.data)

        }
        else{
          toast.danger('Something went wrong')
          handleReset()
        }
        
      }
      
      //<iframe width="656" height="369" src="https://www.youtube.com/embed/9fyOu2dxgOY?list=RDU1JLtpJTe84" title="Vaa Kannamma | Once More | Arjun Das, Aditi Shankar | Hesham Abdul Wahab | Vignesh Srikanth |Yuvaraj" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      // const result = await videoAddApi(videoDetails)
      // console.log(result);
      
    }
  }

  return (
    <>

      <h6 className='d-flex justify-content-center align-items-center'><span className='fs-6 d-none d-md-flex me-2'>Upload New Video</span><FontAwesomeIcon icon={faCloudArrowUp} className='ms-3' onClick={handleShow} /></h6>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fs-5 text-warning'><FontAwesomeIcon icon={faFilm} /> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fs-6'><p className='mb-2'>Please fill the following details</p>

          <form className='border border-white p-3 rounded'>
            <input type="text" value={videoDetails.caption} className='mb-3 w-100 rounded p-1' placeholder='Video Caption' onChange={(e) => setvideoDetails({ ...videoDetails, caption: e.target.value })} />


            <input type="text" value={videoDetails.image} className='mb-3 w-100 rounded p-1' placeholder='Video Image' onChange={(e) => setvideoDetails({ ...videoDetails, image: e.target.value })} />


            <input type="text" value={videoDetails.embedLink} className='mb-3 w-100 rounded p-1' placeholder='Video Url' onChange={(e) => setvideoDetails({ ...videoDetails, embedLink: e.target.value })} />

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

        <ToastContainer position='top-center' theme="colored" autoClose={2000}/>
    </>
  )
}

export default Add