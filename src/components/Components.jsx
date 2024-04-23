import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button, { ExitButton } from './Button';
import { TableHead, TableBody } from './Table';
import { StudentForm, InfoForm } from './Form';
import ConfirmDeleteBox from "./ConfirmDelete";
import notenappSVG from '../assets/media/notenapp.svg';
import { NoStudents } from './Notification';

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
SubHeader.propTypes = {
    toggleForm: PropTypes.func.isRequired
}

/**
 * Table Container react component
 * @param {*} students array of all students who are displayed
 * @param {*} toggleInfo function to toggle visibility of student info box
 * @param {*} setStudent function to set the current student
 * @returns Table Container JSX component
 */
export const TableContainer = ({ students, toggleInfo, setCurrentStudent }) => {
    return (
        <div className='w-full px-4'>
            <div className='w-full p-4 bg-gray-50 rounded-lg'>
                <div className="w-full rounded-t-lg overflow-x-auto">
                    <table className="table-auto border-collapse w-full">

                        <TableHead />
                        <TableBody students={students} toggleInfo={toggleInfo} setCurrentStudent={setCurrentStudent} />

                    </table>
                </div>

                {students.length === 0 && (
                    <NoStudents />
                )}
            </div>
        </div>
    );
}
TableContainer.propTypes = {
    students: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleInfo: PropTypes.func.isRequired,
    setCurrentStudent: PropTypes.func.isRequired
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
 * New student box react component
 * @param {*} isVisible true if set visible
 * @param {*} toggleForm function to toggle visibility
 * @param {*} addStudent function to add student to students
 * @returns New student box field JSX component
 */
export const NewStudentBox = ({ isVisible, toggleForm, addStudent }) => {

    /**
     * function to handle keydown events
     * @param {*} event keydown event
     */
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            toggleForm();
        }
    };

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isVisible, handleKeyDown]);

    return (
        <>
            {isVisible && (
                <section onKeyDown={handleKeyDown}
                    className="flex justify-center fixed top-0 left-0 w-full h-full backdrop-brightness-50 backdrop-blur-sm overflow-y-auto z-20">
                    <div className="sm:max-w-4xl w-full mx-auto my-auto p-4">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">

                            <div className="flex justify-between">
                                <Title title={'Schüler Hinzufügen'} className={'text-2xl font-semibold text-gray-800'} />
                                <ExitButton onClick={toggleForm} />
                            </div>

                            <StudentForm toggleForm={toggleForm} addStudent={addStudent} />

                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
NewStudentBox.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    toggleForm: PropTypes.func.isRequired,
    addStudent: PropTypes.func.isRequired
}

/**
 * Student info box react component
 * @param {*} isVisible true if set visible
 * @param {*} toggleForm function to toggle visibility
 * @param {*} student student whose data is displayed
 * @param {*} deleteStudent function to delete student to students
 * @returns student info box field JSX component
 */
export const StudentInfoBox = ({ isVisible, toggleInfo, student, deleteStudent }) => {

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isVisible, handleKeyDown]);

    const [showConfirmDelete, setConfirmDelete] = useState(false);
    const toggleConfirmDelete = () => { setConfirmDelete(!showConfirmDelete) };

    /**
     * function to handle deletion of a student
     */
    const handleDelete = () => {
        deleteStudent();
        toggleConfirmDelete();
        toggleInfo();
    }

    /**
     * function to handle keydown events
     * @param {*} event keydown event
     */
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setConfirmDelete(prevState => {
                if (!prevState) {
                    toggleInfo();
                } else {
                    return !prevState;
                }
                return prevState;
            });
        }
    };

    return (
        <>
            {isVisible && (
                <section id="student-info-box"
                    className="flex justify-center fixed top-0 left-0 w-full h-full backdrop-brightness-50 backdrop-blur-sm overflow-y-auto z-20">
                    <div className="sm:max-w-4xl w-full mx-auto my-auto p-4">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                            <div className="flex justify-between">

                                <Title title={'Schüler Info'} className={'text-2xl font-semibold text-gray-800'} />

                                <ExitButton onClick={toggleInfo} />

                            </div>

                            <InfoForm student={student} />

                            <div className="flex w-full mt-6">

                                <Button content={'Schüler Bearbeiten WIP'}
                                    className={'px-6 py-2 mr-3 w-full rounded-lg bg-gray-300 text-gray-400 font-semibold hover:bg-gray-300 transition-al'} />

                                <Button content={'Schüler Löschen'} onClick={toggleConfirmDelete} student={student}
                                    className={'px-6 py-2 ml-3 w-full md:w-1/3 rounded-lg border-2 border-red-700 text-gray-800 font-semibold hover:border-red-600 hover:bg-red-600 hover:text-white transition-all'} />

                            </div>
                        </div>
                    </div>

                    <ConfirmDeleteBox
                        isVisible={showConfirmDelete}
                        toggleBox={toggleConfirmDelete}
                        handleDelete={handleDelete}
                    />
                </section>
            )}
        </>
    );
}
NewStudentBox.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    toggleInfo: PropTypes.func.isRequired,
    student: PropTypes.object,
    deleteStudent: PropTypes.func.isRequired
}


/**
 * Title react component
 * @param {*} title content of header
 * @param {*} className classNames of header component
 * @returns Title JSX component
 */
export const Title = ({ title, className }) => {
    return (
        <>
            <h1 className={className}>
                {title}
            </h1>
        </>
    );
}
Title.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string
}