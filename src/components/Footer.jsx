import React from 'react';

/**
 * Footer react component
 * @returns footer JSX component
 */
export default function Footer() {
    return (
        <div className='flex justify-center align-middle w-full h-6 my-2'>
            <p className="text-gray-500 font-normal">&copy; 2024 
                <a href="https://github.com/sebastian-sonne" className="text-slate-600 hover:text-notenapp-blue transition-colors" target="_blank"> Sebastian Sonne</a>
            </p>
        </div>
    );
}