import React, { useEffect } from 'react';
import Title from './Title';
import { ExitButton} from './Button';
import StudentForm from './Form';

export default function NewStudentBox({ isVisible, toggleForm, addStudents }) {
    
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

                            <StudentForm />

                        </div>
                    </div>
                </section>
            )}
        </>
    );
}