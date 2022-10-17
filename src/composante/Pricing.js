import React from 'react'
import {Container,Row,Col,Card,CardGroup} from 'react-bootstrap'
import imge1 from "../imges/Etude-de-marchz-1-780x456-c-default.jpg"
import imge2 from "../imges/studio-shot-attractive-woman-stands-smiling-pointing-mobile-phone-empty-screen-feels-happy-dressed-elegant-146662452.jpg"
import imge3 from "../imges/uilb-962x1024.jpg"
import imge4 from "../imges/boite-crayons-couleur.jpg"
import hlogo1 from "../imges/coeur.png"
import hlogo2 from "../imges/panier.png"
import hlogo3 from "../imges/oeil.png"
import etoile from "../imges/etoile.png"
import techarge from "../imges/telecharger.png"
import alarme from "../imges/alarme (1).png"
import piece from "../imges/piece-de-monnaie.png"
import img1 from "../imges/droit.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export default function Pricing() {
  return (
   <section id='pricing' className='pricing'>
    <Container>
<Row>

<TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__fadeInLeft" : ""}> 
<Col xs={12}>
<div className='titre'>
    <h5 className='titre-h5'>Pratice Advice</h5>
    <h1 className='titre-h1'>Make online education accessible</h1>
    <p className='titre-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
     Voluptate exercitationem eum error suscipit?</p>
</div>

</Col>
</div>}
    </TrackVisibility>


  
<Col md={6} lg={3}>
  <CardGroup> 
  <Card>
      <button className='bg-danger bouton'>Sale</button>
        <Card.Img variant="top" src={imge3} />
        <div className='hlogo'>
            <img src={hlogo1}/>
            &nbsp; &nbsp;
            <img src={hlogo2}  />
            &nbsp; &nbsp;
            <img src={hlogo3}  />
        </div>
        <Card.Body>
          <Card.Text>
          <div className='bloc'>
          <div className='flexhaut'>
            <h5>English</h5>
<div className='righthaut'>
    <img src={etoile} />
     &nbsp;
    <small>4.9</small>

</div>
</div>
<h5 className='h5'>Graphic Design</h5>
<p className="para">Lorem ipsum dolor sit amet <br />
    adipisicing elit...</p>
    <div className='sales'>
    <img src={techarge}  /> &nbsp;
    <span className="sp">15 Sales</span>
    </div>
    <span className='sp1'>$16.48</span><span className='sp2'> $6.48</span>

    <div className='logos'>
        <img src={alarme} />
        &nbsp;
        <small>Pro...</small>
        &nbsp;&nbsp;
        <img src={piece} />
        &nbsp;
        <small>64 Les...</small>
        &nbsp;  &nbsp;
        <img src={alarme} />
        &nbsp;
        <small>22hr...</small>

    </div>
    <a href="#">Learn More <img src={img1} /></a>
    </div>
  
          </Card.Text>
        </Card.Body>
      </Card>


     </CardGroup>

</Col>


<Col md={6} lg={3}>
<CardGroup> 
<Card>
        <button className='bg-danger bouton'>Sale</button>
        <Card.Img variant="top" src={imge1} />
        <div className='hlogo'>
            <img src={hlogo1}/>
            &nbsp; &nbsp;
            <img src={hlogo2}  />
            &nbsp; &nbsp;
            <img src={hlogo3}  />
        </div>
        <Card.Body>
          <Card.Text>
            <div className='bloc'>
          <div className='flexhaut'>
            <h5>English</h5>
<div className='righthaut'>
    <img src={etoile} />
     &nbsp;
    <small>4.9</small>

</div>
</div>
<h5 className='h5'>Graphic Design</h5>
<p className="para">Lorem ipsum dolor sit amet <br />
    adipisicing elit...</p>
    <div className='sales'>
    <img src={techarge}  /> &nbsp;
    <span className="sp">15 Sales</span>
    </div>
    <span className='sp1'>$16.48</span><span className='sp2'> $6.48</span>

    <div className='logos'>
        <img src={alarme} />
        &nbsp;
        <small>Pro...</small>
        &nbsp;&nbsp;
        <img src={piece} />
        &nbsp;
        <small>64 Les...</small>
        &nbsp;  &nbsp;
        <img src={alarme} />
        &nbsp;
        <small>22hr...</small>

    </div>
    <a href="#">Learn More <img src={img1} /></a>
    </div>
  
          </Card.Text>
        </Card.Body>
      </Card>

     </CardGroup>
   
</Col>


<Col md={6} lg={3}>
<CardGroup> 
<Card>
      <button className='bg-danger bouton'>Sale</button>
        <Card.Img variant="top" src={imge2} />
        <div className='hlogo'>
            <img src={hlogo1}/>
            &nbsp; &nbsp;
            <img src={hlogo2}  />
            &nbsp; &nbsp;
            <img src={hlogo3}  />
        </div>
        <Card.Body>
          <Card.Text>
          <div className='bloc'>
          <div className='flexhaut'>
            <h5>English</h5>
<div className='righthaut'>
    <img src={etoile} />
     &nbsp;
    <small>4.9</small>

</div>
</div>
<h5 className='h5'>Graphic Design</h5>
<p className="para">Lorem ipsum dolor sit amet <br />
    adipisicing elit...</p>
    <div className='sales'>
    <img src={techarge}  /> &nbsp;
    <span className="sp">15 Sales</span>
    </div>
    <span className='sp1'>$16.48</span><span className='sp2'> $6.48</span>

    <div className='logos'>
        <img src={alarme} />
        &nbsp;
        <small>Pro...</small>
        &nbsp;&nbsp;
        <img src={piece} />
        &nbsp;
        <small>64 Les...</small>
        &nbsp;  &nbsp;
        <img src={alarme} />
        &nbsp;
        <small>22hr...</small>

    </div>
    <a href="#">Learn More <img src={img1} /></a>
    </div>
  
          </Card.Text>
        </Card.Body>
      </Card>



     </CardGroup>
</Col>

<Col md={6} lg={3}>
<CardGroup> 
<Card>
      <button className='bg-danger bouton'>Sale</button>
        <Card.Img variant="top" src={imge4} />
        <div className='hlogo'>
            <img src={hlogo1}/>
            &nbsp; &nbsp;
            <img src={hlogo2}  />
            &nbsp; &nbsp;
            <img src={hlogo3}  />
        </div>
        <Card.Body>
          <Card.Text>
          <div className='bloc'>
          <div className='flexhaut'>
            <h5>English</h5>
<div className='righthaut'>
    <img src={etoile} />
     &nbsp;
    <small>4.9</small>

</div>
</div>
<h5 className='h5'>Graphic Design</h5>
<p className="para">Lorem ipsum dolor sit amet <br />
    adipisicing elit...</p>
    <div className='sales'>
    <img src={techarge}  /> &nbsp;
    <span className="sp">15 Sales</span>
    </div>
    <span className='sp1'>$16.48</span><span className='sp2'> $6.48</span>

    <div className='logos'>
        <img src={alarme} />
        &nbsp;
        <small>Pro...</small>
        &nbsp;&nbsp;
        <img src={piece} />
        &nbsp;
        <small>64 Les...</small>
        &nbsp;  &nbsp;
        <img src={alarme} />
        &nbsp;
        <small>22hr...</small>

    </div>
    <a href="#">Learn More <img src={img1} /></a>
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
