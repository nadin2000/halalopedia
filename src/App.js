import React from "react";
import Navbar from "./Components/Common/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Aboutus from "./Components/Pages/Aboutus";
import Contactus from "./Components/Pages/Contactus";
import Rewardstore from "./Components/Pages/Rewardstore";
import Discussionforum from "./Components/Pages/Discussionforum";
import Newstore from "./Components/Pages/Newstore";
import Restaurants from "./Components/Pages/Restaurants";
import Groceries from "./Components/Pages/Groceries";
import Profile from "./Components/Pages/Profile"
import Footer from "./Components/Common/Footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function App() {
  return (
    <Router>
    <div >
       <Navbar/>
       <Routes>
       <Route path="/halalopedia/" element={<Home/>} ></Route>
       <Route path="/halalopedia/home" element={<Home/>} ></Route>
       <Route path="/halalopedia/profile" element={<Profile/>} ></Route>
       <Route path="/halalopedia/aboutus" element={<Aboutus/>} ></Route>
       <Route path="/halalopedia/rewardstore" element={<Rewardstore/>} ></Route>
       <Route path="/halalopedia/discussionforum" element={<Discussionforum/>} ></Route>
       <Route path="/halalopedia/contactus" element={<Contactus/>} ></Route>
       <Route path="/halalopedia/newstore" element={<Newstore/>} ></Route>
       <Route path="/halalopedia/restaurants" element={<Restaurants/>} ></Route>
       <Route path="/halalopedia/groceries" element={<Groceries/>} ></Route>
       </Routes>
       <Footer/>
    </div>
    </Router>

  );
}

export default App;
