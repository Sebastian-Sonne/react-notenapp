import React, { useEffect } from 'react';
import { Title } from './Components';
import { ExitButton} from './Button';
import { StudentForm } from './Form';

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
    }, [isVisible]);

    return (
        <>
            {isVisible && (
                <section onKeyDown={handleKeyDown}
                    className="flex justify-center fixed top-0 left-0 w-full h-full backdrop-brightness-50 backdrop-blur-sm overflow-y-auto z-20">
                    <div className="sm:max-w-4xl w-full mx-auto my-auto p-4">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">

                            <div className="flex justify-between">
                                <Title title={'Schüler Hinzufügen'} className={'text-2xl font-semibold text-gray-800'} />
                                <ExitButton onClick={toggleForm}/>
                            </div>

                            <StudentForm toggleForm={toggleForm} addStudent={addStudent} />

                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default NewStudentBox