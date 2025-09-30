import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TreePine, Home, Info, Trees, QrCode } from 'lucide-react';

/**
 * Navigation bar component for the GreenStep application
 * Provides clean, nature-themed navigation between main pages
 */
const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/trees', label: 'Our Trees', icon: Trees },
    { path: '/qr-generator', label: 'QR Generator', icon: QrCode },
    { path: '/about', label: 'About Us', icon: Info }
  ];
  
  const isActivePath = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-primary rounded-lg group-hover:bg-primary-light transition-colors duration-300">
              <TreePine className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">GreenStep</span>
              <span className="text-xs text-muted-foreground -mt-1">Community Trees</span>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActivePath(path)
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button - Simplified for prototype */}
          <div className="md:hidden">
            <div className="flex space-x-1">
              {navItems.map(({ path, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    isActivePath(path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;