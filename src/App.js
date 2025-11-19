import './inc/css/App.css';
import './inc/css/main/Header.css';
import './inc/css/Home.css';
import './inc/css/Education.css';
import './inc/css/Highlight.css';

import './inc/css/main/Responsive.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Pagetitle from './app/components/main/Pagetitle';
import Header from './app/components/main/Header';

import Home from "./app/pages/Homepage";
import About from "./app/pages/Aboutpage";
import Project from "./app/pages/Projectpage";
import Contact from "./app/pages/Contactpage";
import Highlight from "./app/pages/Highlightpage";
import Notfound from './app/pages/main/Notfound';

import Highlightview from './app/pages/Viewhighlightpage';

function App() {

  const [visitData, setVisitData] = useState(null); 

  const API_URL = process.env.REACT_APP_API_VISIT; 

  useEffect(() => {
    const fetchVisitData = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch visit data');
        const data = await res.json();
        console.log(data);
        setVisitData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVisitData();
  }, [API_URL]); 

  return (
    <>
      <Pagetitle />
      <main>
        <Header/>
        <section>
          <Routes>
            <Route path="/" element={<Home visitData={visitData} />} />
            <Route path="/about" element={<About />} />          
            <Route path="/projects" element={<Project />} />
            <Route path="/highlights" element={<Highlight />} />
            <Route path="/volunteering/:id" element={<Highlightview />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
