import React, { useState } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import TableContainer from './TableContainer';
import Footer from './Footer';
import NewStudentForm from './NewStudentForm';

export default function App() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <div className='flex justify-center min-h-screen'>
            <div className='flex flex-col max-w-6xl w-full'>
                <Header />
                <SubHeader toggleForm={toggleForm}/>

                <TableContainer />
                <Footer />

                <NewStudentForm isVisible={showForm}/>
            </div>
        </div>
    );
}