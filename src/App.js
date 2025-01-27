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
import BrowsePhotos from './pages/BrowsePhotos';
import SubscriptionPage from './pages/SubscriptionPage';
import DownloadsPage from './pages/DownloadsPage';
import FavoritesPage from './pages/FavoritesPage';
import ProfilePage from './pages/ProfilePage';
import BillingPage from './pages/BillingPage';
import ManageUsers from './pages/ManageUsers';
import ReviewContent from './pages/ReviewContent';
import ViewAnalytics from './pages/ViewAnalytics';
import PlatformSettings from './pages/PlatformSettings';

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
        <Route path="/browse" element={<BrowsePhotos />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/review-content" element={<ReviewContent />} />
        <Route path="/view-analytics" element={<ViewAnalytics />} />
        <Route path="/platform-settings" element={<PlatformSettings />} />
      </Routes>
    </Router>
  );
};

export default App;
