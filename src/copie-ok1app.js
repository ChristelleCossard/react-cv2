import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <div>
      <BrowserRouter>
     
     <Switch>
     <Route path="/" exact>   
    <Home />    
    </Route>
    <Route path="/competences">
        <Knowledges />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/notfound">
        <NotFound />
      </Route>
     </Switch>
   </BrowserRouter>
    
  </div>
  );
}

export default App;
