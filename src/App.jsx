import React from "react";
import UserDashboard from "./Components/UserDashboard";
import { HashRouter, Route, Routes } from "react-router-dom";
import Allvenues from "./Components/Allvenue";
import Indoorhall from "./Components/Indoorhall";
import Outdoor from "./Components/Outdoor";
import Rooftop from "./Components/Rooftop";
import Multipurpose from "./Components/Multipurpose";
import Marquee from "./Components/Marquee";
import EventigDashboard from "./Components/EventigDashboard";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<UserDashboard />}>
            <Route path="" element={<Allvenues />} />
            <Route path="indoorhall" element={<Indoorhall />} />
            <Route path="outdoor" element={<Outdoor />} />
            <Route path="rooftop" element={<Rooftop />} />
            <Route path="multipurpose" element={<Multipurpose />} />
            <Route path="marquee" element={<Marquee />} />
            <Route path="eventiq-dasboard" element={<EventigDashboard />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
