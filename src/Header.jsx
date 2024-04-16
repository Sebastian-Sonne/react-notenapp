import React from 'react';
import Logo from './components/logo';
import Title from './components/Title'

export default function Header() {
    return (
            <div className="flex justify-between max-w-6xl h-16 w-full mt-2 mb-4">
                <div className='flex'>
                    <Logo />
                    <Title title={'Lehrer Admin Panel'} />
                </div>

                <div className="flex justify-center aspect-square w-12 mx-4">
                    <div className="w-full aspect-square my-auto rounded-full bg-gray-300 cursor-pointer"></div>
                </div>
            </div>
    );
}