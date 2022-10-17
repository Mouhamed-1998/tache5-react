import React from 'react'
import {Container,Row,Col,Button,Card} from 'react-bootstrap'
import img1 from "../imges/visage-souriant.png"
import img2 from "../imges/verifier (1).png"
import img3 from "../imges/sauvegarder.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';




export default function Home() {
  return (
    <section id='home' className='home'>
<Container>
    <Row>
    <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__backInDown " : ""}> 
        <Col>
<div className='para'>
    <a href="#">Welcom</a>
    <h1>Selling one the <br/> internet like a pro </h1>
    <p>We known how large objectives will act,  by things one a <br />smill scale just do not act that way.</p>
    <div className='button my-5'>
    <Button variant="primary button1" >Get Quote Now</Button>  &nbsp; &nbsp;
    <Button variant="primary button2">Learning More</Button>

    </div>

</div>

        </Col>
        </div>}
      </TrackVisibility>
   
    </Row>


    <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__backInLeft " : ""}> 
    <Row className='rows'>
  <Col  md={4} lg={4} xl={4} className="col1" >
      <Card className='card1 py-3 px-3'>
      <Card.Body>
       <div className='images1'>
        <img src={img1}  />
       </div>
        <Card.Text>
          <h5 style={{color :'black',fontWeight:'700'}}>training Course</h5>
          <div className='traite'></div>
          <p className='p'>Lorem ipsum dolor, sit amet  <br /> adipisicing elit
             Velit, eligendi<br /> dolorum dolorem margre...
              </p>
         
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
    
      

   
      <Col  md={4} lg={4} xl={4} className="col2">
      <Card className='card2 py-3 px-3'>
      <Card.Body>
      <div className='images2'>
        <img src={img2}  />
       </div>
        <Card.Text>
        <h5 style={{color :'black',fontWeight:'700'}}>2,769 online source</h5>
          <div className='traite'></div>
          <p className='p'>Lorem ipsum dolor, sit amet  <br /> adipisicing elit
             Velit, eligendi <br /> dolorum dolorem ...
              </p>
        </Card.Text>
      </Card.Body>
    </Card>
      
      </Col>
   


    
      <Col  md={4} lg={4} xl={4} className="col3">
      <Card className='card3 py-3 px-3'>
      <Card.Body >
      <div className='images3'>
        <img src={img3}/>
       </div>
        <Card.Text>
        <h5 style={{color :'white' ,fontWeight:'700'}}>training Course</h5>
          <div className='traite1'></div>
          <p className='p3'>Lorem ipsum dolor, sit amet <br /> adipisicing elit
             Velit, eligendi <br /> dolorum dolorem margre...
              </p>
        </Card.Text>
      </Card.Body>
    </Card>
      
      </Col>
      
    </Row>
    </div>}
    </TrackVisibility>
</Container>
    </section>
  )
}
