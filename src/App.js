import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [currentTab, setCurrentTab] = useState('about');

  const loadTab = () => {
    switch(currentTab) {
      case 'about': 
        return <About />;
      case 'project': 
        return <Project />;
      case 'contact': 
        return <Contact />;
      case 'resume': 
        return <Resume />;
    }
  };

  return (
    <div className="app">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      <div>
          <main>{loadTab()}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
