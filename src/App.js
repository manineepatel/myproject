
import React from 'react';
import './index.css';
import Read from './components/read/Read';
import Create from './components/create/Create';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Update from './components/update/Update';

import {Link} from 'react-router-dom';

const App=()=> {
  return (
    <div>
      
   <Router> 
   <div className="crud">
        <h3>CRUD operation</h3>
      </div>
      <br/>
      
     <Routes>  
     <Route  path="/read" element={<Read />}> </Route>
     <Route  path="/create" element={<Create/>}> </Route>
      <Route path="/update" element={<Update />}> </Route>
      
    </Routes>
    </Router>
    </div>
  )
}
  export default App;
  
