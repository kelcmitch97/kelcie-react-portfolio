import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [currentTab, setCurrentTab] = useState('contact');

  const renderTab = () => {
    if (currentTab === 'about') {
      return <About />;
    }

    if (currentTab === 'project') {
      return <Project />;
    }

    if (currentTab === 'contact') {
      return <Contact />;
    }

    if (currentTab === 'resume') {
      return <Resume />;
    }
  }


  return (
    <div className="app">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      <div>
          <main>{renderTab()}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
