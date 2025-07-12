'use client';

import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, Shield, Truck, Check } from 'lucide-react';

const TopBar = ({ }) => {
    const [currencyMenuOpen, setCurrencyMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-10 text-sm">
                    {/* Left side - Contact Info */}
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center justify-center space-x-1 text-gray-600">
                            <Phone className="w-3 h-3" />
                            <span className='text-xs'>+015151514515</span>
                        </div>
                        <div className="flex items-center justify-center space-x-1 text-gray-600">
                            <Mail className="w-3 h-3" />
                            <span className='text-xs'>pharmoly@gmail.com</span>
                        </div>


                        {/* Center - Features */}
                        <div className="hidden md:flex items-center space-x-6">
                            <div className="flex items-center space-x-1 text-gray-600">
                                <span className='text-xs'>About Us</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-600">
                                <span className='text-xs'>Contact</span>
                            </div>
                            <div className="flex items-center justify-center space-x-1 text-gray-600">
                                <Check className="w-3 h-3 text-green-500" />
                                <span className='text-xs'>Safe Payment</span>
                            </div>
                            <div className="flex items-center justify-center space-x-1 text-gray-600">
                                <Check className="w-3 h-3 text-green-500" />
                                <span className='text-xs'>Free Shipping</span>
                            </div>
                        </div>
                    </div>
                    {/* Right side - Language and Currency */}
                    <div className="flex items-center justify-center space-x-4">
                        {/* Language Selector */}
                        <div
                            onMouseEnter={() => setLanguageMenuOpen(true)}
                            onMouseLeave={() => setLanguageMenuOpen(false)}
                            className={`relative ${languageMenuOpen ? 'bg-gray-100' : ''}`}
                            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                        >
                            <button className="flex items-center justify-center space-x-1 text-gray-600 hover:text-gray-900">
                                <span className='text-xs'>en</span>
                                <ChevronDown className="w-3 h-3" />
                            </button>
                            {languageMenuOpen && (
                                <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded shadow-lg z-10">
                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">En</button>
                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Ar</button>
                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Span</button>
                                </div>
                            )}
                        </div>

                        {/* Currency Selector */}
                        <div
                            className="relative"
                            onMouseEnter={() => setCurrencyMenuOpen(true)}
                            onMouseLeave={() => setCurrencyMenuOpen(false)}
                        >
                            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                                <span className='text-xs'>USD</span>
                                <ChevronDown className="w-3 h-3" />
                            </button>
                            {currencyMenuOpen && (
                                <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded shadow-lg z-10">
                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">USD</button>
                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">EUR</button>
                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">GBP</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

