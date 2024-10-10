import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Sprout, Package, DollarSign, Users, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Sprout className="mr-2" />
          AgriManager
        </Link>
        <div className="flex space-x-4">
          <NavLink to="/" icon={<Home />} text="Dashboard" active={location.pathname === '/'} />
          <NavLink to="/crops" icon={<Sprout />} text="Crops" active={location.pathname === '/crops'} />
          <NavLink to="/inventory" icon={<Package />} text="Inventory" active={location.pathname === '/inventory'} />
          <NavLink to="/finances" icon={<DollarSign />} text="Finances" active={location.pathname === '/finances'} />
          <NavLink to="/workforce" icon={<Users />} text="Workforce" active={location.pathname === '/workforce'} />
          <NavLink to="/farm-info" icon={<Settings />} text="Farm Info" active={location.pathname === '/farm-info'} />
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string; active: boolean }> = ({ to, icon, text, active }) => (
  <Link to={to} className={`flex items-center hover:text-green-200 transition-colors duration-200 ${active ? 'text-green-200' : ''}`}>
    {icon}
    <span className="ml-1 hidden md:inline">{text}</span>
  </Link>
);

export default Navbar;