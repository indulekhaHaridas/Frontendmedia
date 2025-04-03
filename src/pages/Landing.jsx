import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <Container className='mt-5 d-flex justify-content-center align-items-center '>
        <Row className='mt-4 w-100'>
          <Col md={6}>
            <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
            <p className='mt-4' style={{ fontSize: '18px', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum provident laudantium ab id vero similique, amet mollitia quos accusamus est, distinctio, repudiandae earum delectus ipsum eius eos saepe ratione!</p>
           <Link to={'/home'}><button className='btn btn-warning mt-4'> Get Started</button></Link>
          </Col>
          <Col md={6} className='d-flex justify-content-center'>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" className='w-50' />
          </Col>
        </Row>

      </Container>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row className='w-100 p-md-5 p-3'>
          <h2 className='text-center mb-5 mt-3'>Features</h2>
          <Col md={4} className='d-flex mt-4 mt-md-0 justify-content-center'>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex mt-4 mt-md-0 justify-content-center'>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/23324887/file/original-87ba09c32bff9e9a67b918769adad4a8.gif" height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex mt-4 mt-md-0 justify-content-center'>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/0b/b5/e6/0bb5e601a725b70129f93701026080c7.gif" height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className='p-md-5 p-4' >
        <Row className='mt-5 p-md-5 p-3 border border-secondary rounded'>
          
          <Col>
          <h1 className='text-warning'>Simple Fast and Powerful</h1>
          <p className='mt-4' style={{textAlign:'justify',fontSize:'15px'}}><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia provident inventore </p>
          <p className='mt-3' style={{textAlign:'justify',fontSize:'15px'}}><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia provident inventore </p>
          <p className='mt-3' style={{textAlign:'justify',fontSize:'15px'}}><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia provident inventore  </p>
            
          </Col>
          <Col md={6}>
          <iframe width="100%" height="450" src="https://www.youtube.com/embed/m7gCn9u9bM4?si=r-Z42YwxK8UsjFO9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Landing