'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Logo = () => {
    return (
        <Link href="/" className={`flex items-center `}>
            <div className="flex items-center">
                {/* Logo Icon */}
                <div >
                  <Image src={'/images/logo.svg'} alt="Pharmoly Logo" width={40} height={40} className="h-36 w-36" />
                </div>

            </div>
        </Link>
    );
};

export default Logo;

