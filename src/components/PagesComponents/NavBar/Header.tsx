'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import TopBar from './TopBar';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { HeaderProps } from '@/types/header';
import NavBanner from './NavBanner';

const Header: React.FC<HeaderProps> = ({ topBar, navigation, cartTotal, cartCount }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSearch = (query: string) => {
        console.log('Search query:', query);
        // Implement search functionality here
    };


    return (
        <header className="w-full">
            {/* Top Banner  */}
            <NavBanner />
            {/* Top Bar - Hidden on mobile */}
            <div className="hidden md:block">
                <TopBar />
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>

                        {/* Logo */}
                        <Logo />

                        {/* Search Bar - Hidden on mobile, shown on tablet+ */}
                        <div className="hidden md:block flex-1">
                            <SearchBar />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex-shrink-0">
                            <ActionButtons cartTotal={cartTotal} cartCount={cartCount} />
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="md:hidden pb-4">
                        <SearchBar />
                    </div>
                </div>
            </div>

            {/* Navigation - Hidden on mobile */}
            <div className="hidden lg:block">
                <Navigation items={navigation} />
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navigationItems={navigation}
            />
        </header>
    );
};

export default Header;

