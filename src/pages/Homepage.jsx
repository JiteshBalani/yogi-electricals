import '../App.css'
import { NavbarSimple } from '../components/Navbar'
import { CarouselTransition } from '../components/Carousel'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import { FooterWithSocialLinks } from '../components/Footer'


const Homepage = () => {
    return (
        <div id='home' className='bg-black py-4'>
          <NavbarSimple />
          <CarouselTransition/>
          <Services/>
          <About/>
          <Contact/>
          <FooterWithSocialLinks/>
        </div>
      )
}

export default Homepage