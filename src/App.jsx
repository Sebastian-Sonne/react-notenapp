import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import Table from './Table';
import Footer from './Footer';

export default function App() {
    return (
        <>
            <div className='flex justify-center'>
                <div className='flex flex-col max-w-6xl w-full'>
                    <Header />
                    <SubHeader />

                    <Table />
                    <Footer />
                </div>
            </div>
        </>
    );
}