import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './Component/Footer/Footer';
import Home from './Component/Landing_Page/Home';
import OurCompany from './Component/Menu/About-Us/Our_Company/OurCompany';
import ScrollToTopButton from './Services/ScrollButton'
import GovernanceStructure from './Component/Menu/About-Us/Governance_Structure/GovernanceStructure';
import GuidingPolicies from './Component/Menu/About-Us/Guiding_Policies/GuidingPolicies';
import Overview from './Component/Menu/Products/OverView/OverView';
// import MouseFollower from './Services/MouseFollow';
function App() {
  return (
    <> 
    <BrowserRouter>
    <Navbar />
    {/* <MouseFollower/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<OurCompany/>}/>
      <Route path='/governance-structure' element={<GovernanceStructure/>}/>
      <Route path='/guiding-policies' element={<GuidingPolicies/>}/>
      <Route path='/overview' element={<Overview/>}/>
     

       
    </Routes>
    <ScrollToTopButton />
    <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
