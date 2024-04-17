import React from 'react';
import Title from './Title';
import Button from './Button';

export default function SubHeader({ toggleForm }) {
    return (
        <div className="flex max-w-6xl w-full px-4 mb-4 justify-between align-middle h-10">
            <Title title={'Übersicht Schüler'} className={'h-10 pt-2 text-gray-700 text-2xl font-semibold'} />

            <Button onClick={toggleForm} type={'button'}
                content={
                    <span className="flex text-white font-semibold">Schüler Hinzufügen</span>
                }
                className={'px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 cursor-pointer transition-all'}
            />
        </div>
    );
}