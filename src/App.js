import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PricingPage from './pages/PricingPage';
import SellPage from './pages/SellPage';
import AdminPage from './pages/AdminPage';
import PhotographerPage from './pages/PhotographerPage';
import ClientPage from './pages/ClientPage';
import UploadPhotosPage from './pages/UploadPhotosPage';
import ViewEarningsPage from './pages/ViewEarningsPage';
import ManageCollectionsPage from './pages/ManageCollectionsPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/photographer" element={<PhotographerPage />} />
        <Route path="/client" element={<ClientPage />} />
        <Route path="/upload-photos" element={<UploadPhotosPage />} />
        <Route path="/view-earnings" element={<ViewEarningsPage />} />
        <Route path="/manage-collections" element={<ManageCollectionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
