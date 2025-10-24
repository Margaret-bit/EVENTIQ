// import React from "react";
import LandingPage from "./Components/Pages/LandingPage.jsx";
import SignupHallOwner from "./Components/auth/SignupHallOwner.Jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUpDropdown from './components/SignUpDropdown';
// import IndividualSignup from './pages/IndividualSignup';
// import SignupHallOwner from './pages/SignupHallOwner';
// import Login from './pages/Login';




const App = () => {



  
  return <div>

    <Router>
      <div className="App">
       

        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/signup/individual" element={<IndividualSignup />} /> */}
          <Route path="/signup-hallowner" element={<SignupHallOwner />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>

    {/* <LandingPage/> */}
    {/* <SignupHallOwner/> */}
  </div>;
};

export default App;
