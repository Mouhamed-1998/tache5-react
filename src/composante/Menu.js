import {useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu() {


    const[ActiveLink,setActiveLink]=useState('home');
    const[Scrolled,setScrolled]=useState('false');
    useEffect(()=>{
        const onScroll =()=>{
            if(window.scrollY > 50){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }

        }
        window.addEventListener("scroll",onScroll);
        return()=>{window.removeEventListener("scroll",onScroll)}
    },[])

    const onUpdateActiveLink =(value)=>{
        setActiveLink(value);
    }
  return (
    <Navbar  expand="lg" className={Scrolled ? "Scrolled":""}>    
      <Container>
        <Navbar.Brand href="#about">
          <h1 className='logo'> BrandName</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className={ActiveLink ==='home' ? "active navbar-link":"navbar-link"}
            onClick={()=> onUpdateActiveLink('home')}>
                Home</Nav.Link>
            <Nav.Link href="#product" className={ActiveLink ==='product' ? "active navbar-link":"navbar-link"}
              onClick={()=> onUpdateActiveLink('product')}>
                Product</Nav.Link>
            <Nav.Link href="#pricing" className={ActiveLink ==='pricing' ? "active navbar-link":"navbar-link"}
              onClick={()=> onUpdateActiveLink('pricing')}>
                Pricing</Nav.Link>
                <Nav.Link href="#contact" className={ActiveLink ==='contact' ? "active navbar-link":"navbar-link"}
              onClick={()=> onUpdateActiveLink('contact')}>
                Contact</Nav.Link>
           
           </Nav>
         <div className='button-text'>
         <button className='button1' onClick={()=>{}}><span>Login</span></button>
        <button className='button2' onClick={()=>{}}><span> JOIN US</span></button>  
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}
