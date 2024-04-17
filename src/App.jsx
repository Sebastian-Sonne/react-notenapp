import React, { useState } from 'react';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import TableContainer from './components/TableContainer';
import Footer from './components/Footer';

import NewStudentBox from './components/NewStudentBox';
import StudentInfo from './components/StudentInfo';
import ConfirmDeleteBox from './components/confirmDelete';

export default function App() {
    
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            if (showForm) toggleForm();
            if (showInfo && !showConfirmDelete) toggleInfo();
            if (showConfirmDelete) toggleConfirmDelete();
        }
    };

    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {setShowForm(!showForm)};

    const [showInfo, setShowInfo] = useState(false);
    const toggleInfo = () => {setShowInfo(!showInfo)};

    const [showConfirmDelete, setConfirmDelete] = useState(true);
    const toggleConfirmDelete = () => {setConfirmDelete(!showConfirmDelete)};

    return (
        <div onKeyDown={handleKeyDown} className='flex justify-center min-h-screen'>
            <div className='flex flex-col max-w-6xl w-full'>
                <Header />
                <SubHeader toggleForm={toggleForm}/>

                <TableContainer />
                <Footer />

                <NewStudentBox isVisible={showForm} toggleForm={toggleForm}/>
                <StudentInfo isVisible={showInfo} toggleInfo={toggleInfo} />

                <ConfirmDeleteBox isVisible={showConfirmDelete} toggleBox={toggleConfirmDelete} />
            </div>
        </div>
    );
}