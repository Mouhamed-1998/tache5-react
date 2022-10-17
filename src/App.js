
import './App.css';
import Menu from './composante/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './composante/Home';
import Product from './composante/Product';
import Pricing from './composante/Pricing';
import Temoignage from './composante/temoignage';
import Contact from './composante/Contact';
import Footer from './composante/Footer';
import './composante/Responsive.css'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
      <Product/>
      <Pricing/>
      <Temoignage/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
