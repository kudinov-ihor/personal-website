import React, {Suspense, useEffect} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollToTop';
import Header from "./components/header/Header";
import RoutesMap from "./components/RoutesMap";
import ReactGA from 'react-ga';

import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    ReactGA.initialize('G-2Q3LV7G7ZC');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])




  return (
    <div>
      <Suspense fallback={null}>
        <Router>
          <ScrollToTop/>
              <Header />
                <RoutesMap/>
              <Footer/>
          </Router>
      </Suspense>
    </div>
  );
}

export default App;
