import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

import Portfolio from './components/Portfolio';
import Footer from "./components/Footer";
import ContactForm from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [categories] = useState([
    {
      name: 'My Work',
      description: 'These are projects I am working on'
    },
  
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            
            <Portfolio></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;