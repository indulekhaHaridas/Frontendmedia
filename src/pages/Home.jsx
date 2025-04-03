import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
import { useState } from 'react'




function Home() {

  const [addVideoStatus, setAddVideoStatus] = useState({})
  return (
    <>
    <div className="container d-flex justify-content-between mt-5">

    <Add setAddVideoStatus={setAddVideoStatus}/>

    <Link to={'/watchhistory'} style={{textDecoration:'none'}}><h6 className='d-flex justify-content-center align-items-center'><span className='fs-6 d-none d-md-flex me-2'>Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} className='me-4' /></h6></Link>
    </div>

    <div className="container-fluid p-3 mt-5">
      <div className="row">
        <div className="col-md-9">

          <View addVideoStatus={addVideoStatus}/>

        </div>
        <div className="col-md-3">
          <Category />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home