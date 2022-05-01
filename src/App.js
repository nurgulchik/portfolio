import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Notfound from "./Pages/Notfound/Notfound";
import Feedback from './Pages/Feedback/Feedback';
import Price from './Pages/Price/Price';


import './app.scss';

function App() {
  return (
    <div className="app">
     <header>
        <Navbar />
     </header>

     <main>
       <Routes>
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="services" element={<Services />} />
         <Route path="feedback" element={<Feedback />} />
         <Route path="price" element={<Price />} />
         <Route path="contact" element={<Contact />} />
         <Route path="*" element={<Notfound />} />
       </Routes>
     </main>
    </div>    
  );
}

export default App;
