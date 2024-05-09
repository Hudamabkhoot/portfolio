import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';
import NavBar from '../components/NavBar';
import BackToTopButton from '../components/BackToTopButton';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <BackToTopButton />
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Layout;