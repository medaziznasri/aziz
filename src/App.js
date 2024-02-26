import React  from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Logo from './Logo';
import LoginForm from './components/LoginForm/LoginForm';
import Register from './components/Register/Register';
import HomePage from './components/HomePage/HomePage';


function App() {
  
  return (
    <Router>
      <div>
       
        <Link to="/">
          
         
        </Link>
        <Routes>
          {/* Set HomePage component to render for both '/' and '/home' paths */}
          <Route path="/" index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          {/* Add a catch-all route for unknown paths */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

