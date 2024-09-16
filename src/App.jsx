import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import UserHeader from './components/UserHeader';
import AdminHeader from './components/AdminHeader';
import Footer from './components/Footer';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import HomePage from './pages/HomePage';
import AdminLogin from "./pages/AdminLogin"
import ProtectedRoutes from './components/ProtectedRoutes';
import About from "./pages/About"
import Contact from "./pages/Contact"
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import NeedHelp from './pages/NeedHelp';
import AccountSettins from "./pages/AccountSettings"
import Users from './pages/Users';
import Feedback from './pages/Feedback';
import Settings from './pages/Settings'

const AppContent = ({ userRole }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {isAdminRoute ? <AdminHeader /> : <UserHeader />}
      
      <main>
        <Routes>
          {/* USER ROUTES */}
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AccountSettings" element={<AccountSettins />} />
          <Route path="/NeedHelp" element={<NeedHelp />} />
  

          {/* ADMIN ROUTES */}
          {/* <Route
            path="/admin-dashboard"
            element={<ProtectedRoutes role={userRole} allowedRole="admin" />}
          >
            <Route path="" element={<AdminDashboard />} />
          </Route> */}
          <Route path="/admin-dashboard" element={<AdminDashboard />}/>
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path="/Users" element={<Users />}/>
          <Route path="/admin/feedback" element={<Feedback />}/>
          <Route path="/admin/settings" element={<Settings />}/>

          {/* Specific Pages */}
          {/* <Route path="/admin-page" element={<AdminPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  const [userRole, setUserRole] = useState(null); // Simulate role management
  return (
    <Router>
      <AppContent userRole={userRole} />
    </Router>
  );
};

export default App;
