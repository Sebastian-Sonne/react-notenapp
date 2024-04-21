import React from 'react';
import Button from './Button';
import { TableHead, TableBody } from './Table';
import notenappSVG from '../assets/media/notenapp.svg';

/**
 * Header react component
 * @returns Header JSX component
 */
export const Header = () => {

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

/**
 * Sub Header react component
 * @param {*} toggleForm function to toggle visibility of new Student form (box)
 * @returns Sub Header field JSX component
 */
export const SubHeader = ({ toggleForm }) => {
    return (
        <div className="flex max-w-6xl w-full px-4 mb-4 justify-between align-middle h-10">
            <Title title={'Übersicht Schüler'} className={'h-10 pt-2 text-gray-700 text-2xl font-semibold'} />

            <Button onClick={toggleForm} type={'button'}
                content={
                    <span className="flex text-white font-semibold">Schüler Hinzufügen</span>
                }
                className={'px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 cursor-pointer transition-all'}
            />
        </div>
    );
}

/**
 * Table Container react component
 * @param {*} students array of all students who are displayed
 * @param {*} toggleInfo function to toggle visibility of student info box
 * @param {*} setStudent function to set the current student
 * @returns Table Container JSX component
 */
export const TableContainer = ({ students, toggleInfo, setStudent }) => {
    return (
        <div className='w-full px-4'>
            <div className='w-full p-4 bg-gray-50 rounded-lg'>
                <div className="w-full rounded-t-lg overflow-x-auto">
                    <table className="table-auto border-collapse w-full">

                        <TableHead />
                        <TableBody students={students} toggleInfo={toggleInfo} setStudent={setStudent} />

                    </table>
                </div>
            </div>
        </div>
    );
}

/**
 * Footer react component
 * @returns footer JSX component
 */
export const Footer = () => {
    return (
        <div className='flex justify-center align-middle w-full h-6 my-2'>
            <p className="text-gray-500 font-normal">&copy; 2024 
                <a href="https://github.com/sebastian-sonne" className="text-slate-600 hover:text-notenapp-blue transition-colors" target="_blank"> Sebastian Sonne</a>
            </p>
        </div>
    );
}

/**
 * Title react component
 * @param {*} title content of header
 * @param {*} className classNames of header component
 * @returns Title JSX component
 */
export const Title = ({ title, className}) => {
    return (
        <>
            <h1 className={className}>
                {title}
            </h1>
        </>
    );
}