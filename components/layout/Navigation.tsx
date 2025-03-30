'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Tracking', href: '/tracking' },
  { name: 'Contact', href: '/contact' },
];

const Navigation: React.FC<NavigationProps> = ({ mobile = false, onItemClick }) => {
  const pathname = usePathname();

  const baseStyles = mobile
    ? 'block px-3 py-2 text-base font-medium rounded-md'
    : 'inline-flex items-center px-3 py-2 text-sm font-medium';

  const activeStyles = mobile
    ? 'bg-blue-100 text-blue-700'
    : 'text-blue-600 border-b-2 border-blue-600';

  const inactiveStyles = mobile
    ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
    : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-300';

  return (
    <nav className={mobile ? 'space-y-1' : 'flex space-x-4'}>
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;
        const styles = `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={styles}
            onClick={onItemClick}
          >
            {item.name}
          </Link>
        );
      })}
      <Link
        href="/contact"
        className={`${mobile ? 'block mt-4 px-3 py-2 text-base font-medium rounded-md' : 'ml-4 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md'} bg-blue-600 text-white hover:bg-blue-700`}
        onClick={onItemClick}
      >
        Get a Quote
      </Link>
    </nav>
  );
};

export default Navigation;