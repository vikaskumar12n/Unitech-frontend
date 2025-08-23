import Slider from './Slider'
import Service from './Service'
import Product from './Product'
import ServicesSection from './Services1'
import StatsSection from './StateData'
// import Feedback from './Feedback/Feedback2'
const Home = () => {
    return (
        <>
            <Slider />
            <Service />
            <Product />
            <StatsSection/>
            <ServicesSection/>
            {/* <Feedback/> */}
        </>
    )
}

export default Home
