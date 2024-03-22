//icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Pages/Login/Login';


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/dashboard' element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App;
