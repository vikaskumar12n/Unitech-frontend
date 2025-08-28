import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './Component/Footer/Footer';
import Home from './Component/Landing_Page/Home';
import OurCompany from './Component/Menu/About-Us/Our_Company/OurCompany';
import ScrollToTopButton from './Helpers/ScrollButton'
// import GovernanceStructure from './Component/Menu/About-Us/Governance_Structure/GovernanceStructure'
// import GuidingPolicies from './Component/Menu/About-Us/Guiding_Policies/GuidingPolicies';
// import Overview from './Component/Menu/Products/OverView/OverView';
import MouseFollower from './Helpers/MouseFollow';
import ScrollToTop from './Helpers/ScrollbarToTop';
import Product from './Component/Menu/Products/Room-air-con/Product';
import ContactUsPage from './Component/Menu/ContactUs/ContactUsPage';
import HVACDesign from './Component/Menu/Solution/SolutionParent';
import AirCooler from './Component/Menu/Products/Air-Cooler/AirCooler';
import Refrigeration from './Component/Menu/Products/Refrigeration/Refrigeration';
import CassetteAirConditioners from './Component/Menu/Products/CassetteAirCon/CassetteAirConditioners';
import VertiCoolProduct from './Component/Menu/Products/VerticoolAirCon/VertiCoolAir';
function App() {
  return (
    <> 
    <BrowserRouter>
    <Navbar />
     <ScrollToTop />
    <MouseFollower/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<OurCompany/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/aircooler' element={<AirCooler/>}/>
      <Route path='/refrigeration' element={<Refrigeration/>}/>
      <Route path='/cassetteairconditioners' element={<CassetteAirConditioners/>}/>
      <Route path='/contactus' element={<ContactUsPage/>}/>
      <Route path='/solution' element={<HVACDesign/>}/>
      <Route path='/verticoolair' element={<VertiCoolProduct/>}/>
     

       
    </Routes>
    <ScrollToTopButton />
    <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
