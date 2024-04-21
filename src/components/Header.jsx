import React from 'react';
import Title from './Title'
import notenappSVG from '../assets/media/notenapp.svg';

/**
 * Header react component
 * @returns Header JSX component
 */
export const Header = () => {
    return (
        <div className="flex justify-between max-w-6xl h-16 w-full mt-2 mb-4">
            <div className='flex'>
                <Logo />
                <Title title={'Lehrer Admin Panel'} className={'text-gray-700 text-2xl font-semibold mt-4'} />
            </div>

            <UserIcon />
        </div>
    );
}
export default Header

/**
 * Logo react component
 * @returns Logo JSX component
 */
const Logo = () => {
    return (
        <a className="aspect-square w-12 py-2 mx-4" href="/" tabIndex="1">
            <img src={notenappSVG} alt="NotenappLogo" />
        </a>
    );
}

/**
 * UserIcon react component
 * @returns UserIcon JSX component
 */
const UserIcon = () => {
    return (
        <div className="flex justify-center aspect-square w-12 mx-4">
            <div className="w-full aspect-square my-auto rounded-full bg-gray-300 cursor-pointer"></div>
        </div>
    );
}