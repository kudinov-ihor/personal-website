import React from 'react';
import { Routes , Route , useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'; 

import Home from '../pages/home/Home';
import Resume from '../pages/resume/Resume';
import Projects from '../pages/projects/Projects';
import Contacts from '../pages/contacts/Contacts';


function RoutesMap() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/resume' element={<Resume/>} />
        <Route exact path='/projects' element={<Projects/>} />
        <Route exact path='/contacts' element={<Contacts/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default RoutesMap