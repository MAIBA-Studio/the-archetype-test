
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isTestPage = location.pathname === '/test';
  const isResultsPage = location.pathname === '/results';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-6 py-4 md:px-12',
        {
          'bg-white/80 backdrop-blur-lg shadow-sm': isScrolled,
          'bg-transparent': !isScrolled
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
          <span className="font-bold">Persona</span>
          <span className="font-light">Lens</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" active={isHomePage}>Home</NavLink>
          {!isTestPage && !isResultsPage && (
            <NavLink to="/test" active={false}>Take the Test</NavLink>
          )}
          {isTestPage && (
            <div className="text-sm font-medium">In Progress...</div>
          )}
          {isResultsPage && (
            <NavLink to="/test" active={false}>Retake Test</NavLink>
          )}
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu icon would go here */}
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={cn(
        'relative text-sm font-medium transition-colors hover:text-foreground/80',
        {
          'text-foreground': active,
          'text-foreground/60': !active
        }
      )}
    >
      {children}
      {active && (
        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-foreground rounded" />
      )}
    </Link>
  );
};

export default Header;
