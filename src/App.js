import React from 'react'
import Feature from './components/Feature'
import Navbar from './components/Navbar'
import Hero  from './components/Hero'
import Signup from './components/Signup'
import Footer from './components/Footer'


function App() {
  return (
   <div>
     <Navbar />
     <Hero />
     <Feature />
     <Signup />
     <Footer />
   </div>
 );
}

export default App;
