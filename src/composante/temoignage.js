import React from 'react'
import {Container,Row,Col,Card,CardGroup} from 'react-bootstrap'
import img1 from "../imges/Mam-Louise.jpg"
import img2 from "../imges/uliet-Ibrahim.jpg"
import img3 from "../imges/evaluation (2).png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export default function Temoignage() {
  return (
 <section className='temoigne'>
    <Container>
        <Row>
            <Col xs={12}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__slideInRight" : ""}> 
              
            <div className='titre'>
    <h5 className='titre-h5'>Pratice Advice</h5>
    <h1 className='titre-h1'>Make online education accessible</h1>
    <p className='titre-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
     Voluptate exercitationem eum error suscipit?</p>
</div>
</div>}
    </TrackVisibility>
 </Col>


 
            <Col md={6}>
            <CardGroup>
            <Card>
        <Card.Img src={img1}/>
        <Card.Body>
        
          <Card.Text>
            <p>
            This is a wider card with supporting text below <br /> as a natural lead-in
            to additional content. <br /> This content is a little bit longer.
            </p>
          <img src={img3}  />

<div className='bloc'>
<p className="muted">Regina Miles</p>
          <small>Design</small>
</div>
         
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
            </Col>

            <Col md={6}>

<CardGroup>
<Card>
        <Card.Img src={img2}/>
        <Card.Body>
        
          <Card.Text>
            <p>
            This is a wider card with supporting text below <br /> as a natural lead-in
            to additional content. <br /> This content is a little bit longer.
            </p>
          <img src={img3}  />

<div className='bloc'>
<p className="muted">Regina Miles</p>
          <small>Design</small>
</div>
         
          </Card.Text>
        </Card.Body>
      </Card>
</CardGroup>
</Col>
        </Row>

    </Container>

 </section>
  )
}
