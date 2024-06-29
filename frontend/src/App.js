import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Navbar from './components/Navbar'; 
import Signupadmin from './pages/Signupadmin';
import Loginadmin from './pages/Loginadmin';

function App() {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
          <Route path="/signupadmin" element={<Signupadmin />} />
          <Route path="/loginadmin" element={<Loginadmin />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;