import React, { useState } from 'react';
import * as storageModule from './assets/js/storage.js';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import TableContainer from './components/TableContainer';
import Footer from './components/Footer';

import NewStudentBox from './components/NewStudentBox';
import StudentInfoBox from './components/StudentInfo';

const student = {
    "id": "000001",
    "name": "Sophie Miller",
    "email": "sophie.miller@gmail.com",
    "writtenGrades": [
        "1",
        "2",
        "3",
        "1"
    ],
    "oralGrades": [
        "2",
        "1",
        "1"
    ],
    "average": 1.64
};

export default function App() {
    const [students, setStudents] = useState(storageModule.loadData('students'));
    const addStudent = (student) => {
        storageModule.saveStudent(student);
        setStudents(storageModule.loadData('students'));
    }

    const [currentStudent, setCurrentStudent] = useState('');

    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => { setShowForm(!showForm) };

    const [showInfo, setShowInfo] = useState(false);
    const toggleInfo = () => { setShowInfo(!showInfo) };

    return (
        <div className='flex justify-center min-h-screen'>
            <div className='flex flex-col max-w-6xl w-full'>
                <Header />
                <SubHeader toggleForm={toggleForm} />

                <TableContainer students={students} toggleInfo={toggleInfo} setStudent={setCurrentStudent} />
                <Footer />

                <NewStudentBox
                    isVisible={showForm}
                    toggleForm={toggleForm}
                    addStudent={addStudent} />

                <StudentInfoBox
                    isVisible={showInfo}
                    toggleInfo={toggleInfo}
                    student={student} />

            </div>
        </div>
    );
}