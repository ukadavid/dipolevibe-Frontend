import NavBar from '../../Components/Homepage/NavBar'
import Header from '../../Components/Homepage/Header'
import DetailsPage from '../../Components/Homepage/DetailsPage'
import TestimonialCarousel from '../../Components/Homepage/Carousel'
import Footer from '../../Components/Homepage/Footer'

const HomePage = () => {

  return (
    <div className="mx-0 lg:mx-0">
    <NavBar/>
    < Header />
    <DetailsPage />
    <TestimonialCarousel />
    <Footer />
    
    </div>

    
  )
}

export default HomePage
