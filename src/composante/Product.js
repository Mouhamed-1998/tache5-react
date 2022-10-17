import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import img1 from "../imges/droit.png"
import img2 from "../imges/comment-apprend-t-on-a-lire-35f8a1d15a5a36c0.jpg"
import img3 from "../imges/croissance-economique-bourse (1).jpg"
import img4 from "../imges/FULLSIZE_2464_ART1573644734298_1573664608649.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Product() {
  return (
   <section id='product' className='product'>
    <Container>
   
<Row>
<Col md={6} className="col1">
<TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__fadeInRight" : ""}> 
<div className='traite'></div>
<h1>Package that are <br /> aprodable</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
   Ipsam aperiam vel dignissimos earum deleniti totam molestias: <br />
     voluptate cumque tempora nisi 
     </p>
<a href="#">Learn More <img src={img1} /></a>

</div>}
    </TrackVisibility>
</Col>
<Col md={6} className="col2">
  <Row >
    <Col>
    <div className='card imag1'> 
 <img src={img3} className="img3"/>
    </div>
    </Col>

    <Col>
    <div className='haut'></div> 
    <div className='card imag'> 
 <img src={img2}/> 
</div>
 <div className='bas'></div>
    </Col>

    <Col>
    <div className='card imag2'>
<img src={img4} className="img4"/>
</div>
    
    </Col>
  </Row>
</Col>

</Row>

    </Container>

   </section>
  )
}
