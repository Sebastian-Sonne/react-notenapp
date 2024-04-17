import React, { useState } from 'react';
import * as storageModule from './assets/js/storage.js';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import TableContainer from './components/TableContainer';
import Footer from './components/Footer';

import NewStudentBox from './components/NewStudentBox';
import StudentInfoBox from './components/StudentInfo';

export default function App() {
    
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            if (showForm) toggleForm();
            if (showInfo) toggleInfo();
        }
    };

    const [students, setStudents] = useState(storageModule.loadData('students'));
    const addStudent = (student) => {
        storageModule.saveStudent(student);
        setStudents(students.push(student));
    }

    const [currentStudent, setCurrentStudent] = useState('');

    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {setShowForm(!showForm)};

    const [showInfo, setShowInfo] = useState(false);
    const toggleInfo = () => {setShowInfo(!showInfo)};

    return (
        <div onKeyDown={handleKeyDown} className='flex justify-center min-h-screen'>
            <div className='flex flex-col max-w-6xl w-full'>
                <Header />
                <SubHeader toggleForm={toggleForm}/>

                <TableContainer toggleInfo={toggleInfo} setStudent={setCurrentStudent} />
                <Footer />

                <NewStudentBox 
                    isVisible={showForm} 
                    toggleForm={toggleForm}
                    addStudents={addStudent} />

                <StudentInfoBox
                    isVisible={showInfo} 
                    toggleInfo={toggleInfo} 
                    student={currentStudent} />

            </div>
        </div>
    );
}