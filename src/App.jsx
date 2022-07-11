import React, {Suspense} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/header/Header";
import RoutesMap from "./components/RoutesMap";

import Footer from "./components/footer/Footer";

function App() {

  return (
    <div>
      <Suspense fallback={null}>
        <Router>
              <Header />
                <RoutesMap/>
              <Footer/>
          </Router>
      </Suspense>
    </div>
  );
}

export default App;
