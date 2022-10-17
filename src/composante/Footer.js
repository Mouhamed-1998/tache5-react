import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import img1  from '../imges/facebook.png'
import img2  from '../imges/instagram.png'
import img3  from '../imges/twitter.png'
export default function Footer() {
  return (
  <section className='footer'>
    <Container>
        <Row>
            <Col md={6} lg={3}>
                <h3>Get In Touch</h3>
                <ul>
                    <li>jumThe quick fox jumps over the</li>
                    <li>lazy dog</li>
                   
                </ul>
                <img src={img1}  />
                   &nbsp;  &nbsp;
                   <img src={img2} />
                   &nbsp;  &nbsp;
                   <img src={img3} />
            </Col>

            <Col  md={6} lg={3}>
            <h3>Company info</h3>
                 <ul>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hering</li>
                    <li>Blog</li>
                </ul>
            </Col>

            <Col  md={6} lg={3}>
            <h3>Features</h3>
                 <ul>
                    <li>Business Markting</li>
                    <li>User Analytic</li>
                    <li>Live Chat</li>
                    <li>Unlimitid Support</li>
                </ul>
            </Col>

            <Col  md={6} lg={3}>
            <h3>Ressoures</h3>
                 <ul>
                    <li>IOS & Android</li>
                    <li>Watch a Demo</li>
                    <li>Costumer</li>
                    <li>API</li>
                </ul>
            </Col>
        </Row>
    </Container>

  </section>
  )
}
