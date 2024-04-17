import React, { useState } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import TableContainer from './TableContainer';
import Footer from './Footer';

import NewStudentForm from './NewStudentForm';

export default function App() {
    
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            if (showForm) toggleForm();
        }
    };

    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {setShowForm(!showForm)};


    return (
        <div onKeyDown={handleKeyDown} className='flex justify-center min-h-screen'>
            <div className='flex flex-col max-w-6xl w-full'>
                <Header />
                <SubHeader toggleForm={toggleForm}/>

                <TableContainer />
                <Footer />

                <NewStudentForm isVisible={showForm} toggleForm={toggleForm}/>

            </div>
        </div>
    );
}