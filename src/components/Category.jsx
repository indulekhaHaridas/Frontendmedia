import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect,useState} from 'react'
import VideoCard from './Videocard'
import { addCategoryApi,  deleteCategoryApi, getAllCategoryApi, updateCategoryApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';



function Category() {

  const [show, setShow] = useState(false);
  const [categoryName, setcategoryName] = useState("")
  const [allCategory, setAllcategory] = useState([])
  const [addCategoryStatus, setAddCategoryStatus] = useState({})
  const [deleteCategoryStatus, setdeleteCategoryStatus] = useState({})
  const [updateStatus,setUpdateStatus] = useState({})


  const handleClose = () => {
    setShow(false);
    handleReset()
  }
  const handleShow = () => setShow(true);

  console.log(categoryName);

  const handleReset = () => {
    setcategoryName('')
  }


  const addNewCategory = async () => {
    if (categoryName) {
      const reqbody = {
        category: categoryName,
        allVideos: []
      }

      const result = await addCategoryApi(reqbody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Category added successfully')
        handleClose()
        setAddCategoryStatus(result.data)

      }
      else {
        toast.error('Something went wrong')
        handleReset()
      }

    }
    else {
      toast.info('Add Category Name')
    }
  }


  const getAllCategory = async () => {
    const result = await getAllCategoryApi()
    console.log(result);

    if (result.status >= 200 && result.status < 300) {
      setAllcategory(result.data)
    }

  }
  //console.log(allCategory);


  const deleteCategory = async (id) => {
    const result = await deleteCategoryApi(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300)
      setdeleteCategoryStatus(result.data)
  }
  const videoOver = (e) => {
    e.preventDefault()
  }
  const videoDrop = async (e, categoryDetails) => {
    console.log(e);
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);
    if (categoryDetails.allVideos.find((item) => item.id == videoDetails.id)) {
      alert('video already in the category')
    }
    else {
      categoryDetails.allVideos.push(videoDetails)
      console.log(categoryDetails);
      const result = await updateCategoryApi(categoryDetails.id, categoryDetails)
      if (result.status >= 200 && result.status < 300) {
        setUpdateStatus(result.data)

      }

    }

  }


  useEffect(() => {
    getAllCategory()
  }, [addCategoryStatus, deleteCategoryStatus,updateStatus])

  return (

    <>
      <h5>Category</h5>
      <button className='bg-warning text-white form-control mt-3' onClick={handleShow}>Add category</button>

      {
        allCategory?.length > 0 ?
          allCategory?.map((item, index) => (
            <div className="container" key={index} droppable="true" onDragOver={(e) => videoOver(e)} onDrop={(e) => videoDrop(e, item)}>

              <div className='border mt-4'>
                <div className='d-flex justify-content-between align-items-center m-3'>
                  <h6>{item?.category}</h6>
                  <Button variant="danger" onClick={() => deleteCategory(item?.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>
                </div>
                <div>
                  {item?.allVideos?.map((video) => (
                    <div>
                      <VideoCard video={video}  isPresent = {true}/>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          )) :
          <p className='text-danger mt-4 text-center'>No category yet added</p>



      }



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning fs-5'>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='border rounded m-3'>
          <input type="text" value={categoryName} placeholder='Enter Category Name' className='form-control' onChange={(e) => setcategoryName(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button className='bg-warning' onClick={addNewCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme="colored" autoClose={2000} />



    </>


  )
}

export default Category