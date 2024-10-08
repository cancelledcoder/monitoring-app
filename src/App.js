import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import Settings from './Settings'; // Import the Settings component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/settings" element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          } />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
