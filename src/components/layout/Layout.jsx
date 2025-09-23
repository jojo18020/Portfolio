import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ currentPath, onNavigate, children }) => (
  <div className="min-h-screen bg-gradient-to-br from-[#0a0410] via-[#130714] to-[#290817] text-white">
    <Header currentPath={currentPath} onNavigate={onNavigate} />
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">{children}</main>
    <Footer />
  </div>
);

export default Layout;