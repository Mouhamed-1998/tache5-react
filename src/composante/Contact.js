import React from 'react'
import {Container,Row,Col,InputGroup,Button,Form} from 'react-bootstrap'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Contact() {
  return (
 <section className='contact' id='contact'>
  <Container>
    <Row>

    <TrackVisibility>
      {({isVisible})=>
      <div className={isVisible ? " animate__animated animate__zoomIn" : ""}> 
    <Col xs={12}>
<div className='titre'>
    <h5 className='titre-h5'>Pratice Advice</h5>
    <h1 className='titre-h1'>Fectured Products</h1>
    <p className='titre-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
     Voluptate exercitationem eum error suscipit?</p>    
</div>
</Col>
</div>}
    </TrackVisibility>

        <Col xs={12}>
        <InputGroup className="mx-auto">
        <Form.Control
          placeholder="Your email"
          aria-label="Your email"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2">
          Subscribe
        </Button>
      </InputGroup>
        
        </Col>
    </Row>
  </Container>

 </section>
  )
}
