import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CropManagement from './components/CropManagement';
import Inventory from './components/Inventory';
import Finances from './components/Finances';
import Workforce from './components/Workforce';
import FarmInfo from './components/FarmInfo';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <div className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/crops" element={<CropManagement />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/finances" element={<Finances />} />
              <Route path="/workforce" element={<Workforce />} />
              <Route path="/farm-info" element={<FarmInfo />} />
            </Routes>
          </div>
          <footer className="bg-green-600 text-white py-4">
            <div className="container mx-auto px-4 text-center">
              &copy; 2023 AgriManager. All rights reserved.
            </div>
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;