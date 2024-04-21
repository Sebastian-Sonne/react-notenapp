import React, { useState } from 'react';
import * as storageModule from './assets/js/storage.js';

import * as Components from './components/Components.jsx';

/**
 * App (main) react component
 * @returns App (main) JSX component
 */
export const App = () => {
    const [students, setStudents] = useState(storageModule.loadData('students'));
    const addStudent = (student) => {
        storageModule.saveStudent(student);
        setStudents(storageModule.loadData('students'));
    }

    const deleteStudent = () => {
        storageModule.deleteStudent(currentStudent);
        setStudents(storageModule.loadData('students'));
    }

    const [currentStudent, setCurrentStudent] = useState(null);

    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => { setShowForm(!showForm) };

    const [showInfo, setShowInfo] = useState(false);
    const toggleInfo = () => { setShowInfo(!showInfo) };

    return (
        <div className='flex justify-center min-h-screen'>
            <div className='flex flex-col max-w-6xl w-full'>
                <Components.Header />
                <Components.SubHeader
                    toggleForm={toggleForm} />

                <Components.TableContainer
                    students={students}
                    toggleInfo={toggleInfo}
                    setStudent={setCurrentStudent} />

                <Components.Footer />

                <Components.NewStudentBox
                    isVisible={showForm}
                    toggleForm={toggleForm}
                    addStudent={addStudent} />

                <Components.StudentInfoBox
                    isVisible={showInfo}
                    toggleInfo={toggleInfo}
                    student={currentStudent}
                    deleteStudent={deleteStudent} />
            </div>
        </div>
    );
}

export default App