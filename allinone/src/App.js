// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleLogin from './Firebase/GoogleLogin';
// Import the new dashboard component
import ProtectedRoute from './Firebase/ProtectedRoute';
import PublicRoute from './Firebase/PublicRoute';

import './App.css';
import Chat from './Firebase/Chat';

function App() {
  return (
    <div className="container">
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute><GoogleLogin /></PublicRoute>} />
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} /> {/* Add Chat route */}
      </Routes>
    </Router>
  </div>
  );
}

export default App;
 {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
        {/* <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} /> */}