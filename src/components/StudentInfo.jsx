import React, { useState, useEffect } from 'react';
import Title from './Title';
import Button, { ExitButton } from './Button';
import ConfirmDeleteBox from "./confirmDelete";
import { InfoForm } from './Form';

export const StudentInfoBox = ({ isVisible, toggleInfo, student }) => {

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isVisible]);

    const [showConfirmDelete, setConfirmDelete] = useState(false);
    const toggleConfirmDelete = () => { setConfirmDelete(!showConfirmDelete) };

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
                        toggleBox={toggleConfirmDelete} />
                </section>
            )}
        </>
    );
}

export default StudentInfoBox;