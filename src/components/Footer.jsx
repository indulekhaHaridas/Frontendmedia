import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col md={4}>
            <h5>Welcome to <span className='text-warning'>Media Player</span></h5>
            <p className='mt-4' style={{ fontSize: '13px', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores pariatur fugit consectetur quis suscipit repudiandae recusandae dolores impedit et dignissimos asperiores, temporibus necessitatibus ad commodi magnam </p>
          </Col>
          <Col md={2}>

            <ul type='none' className='fs-6'>
              <h5>Links</h5>
              <Link to={'/'}> <p>Landing page</p></Link>
              <Link to={'/home'} ><p>Home page</p></Link>
              <Link to={'/watchhistory'}><p>Watch History</p></Link>
            </ul>
          </Col>
          <Col md={2}>

            <ul type='none' className='fs-6'>
              <h5>Guides</h5>
              <li>React</li>
              <li>React Boostrap</li>
              <li>Bootswatch</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact us</h5>
            <input type="text" className='rounded p-1' placeholder='Email Id' style={{ width: '60%' }} />
            <button className='btn btn-warning ms-3'>Subscribe</button>
            <FontAwesomeIcon icon={faInstagram} className='mt-4 ms-4 fs-5' />
            <FontAwesomeIcon icon={faXTwitter} className='mt-4 ms-5  fs-5' />
            <FontAwesomeIcon icon={faFacebook} className='mt-4 ms-5  fs-5' />
            <FontAwesomeIcon icon={faWhatsapp} className='mt-4 ms-5  fs-5' />
            <FontAwesomeIcon icon={faLinkedin} className='mt-4 ms-5  fs-5' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer