import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import TableContainer from './TableContainer';
import Footer from './Footer';

export default function App() {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col max-w-6xl w-full'>
                <Header />
                <SubHeader />

                <TableContainer />
                <Footer />
            </div>
        </div>
    );
}