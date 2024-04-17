import React from 'react';

export default function Button({ content, onClick, className, type }) {
    return (
        <button onClick={onClick} className={className} type={type}> {content} </button>
    );
}

export function ExitButton({ onClick }) {
    return (
        <Button onClick={onClick} type={'button'}
            className={'flex items-center justify-center px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-all'}
            content={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="4" y1="4" x2="20" y2="20" stroke="#1f2937" strokeWidth="3" />
                    <line x1="20" y1="4" x2="4" y2="20" stroke="#1f2937" strokeWidth="3" />
                </svg>
            }
        />
    );
}

export function InfoButton({ onClick }) {
    return (
        <Button content={'Info'} type={'button'} onClick={onClick}
            className={'mx-2 my-1 py-[3px] px-2 text-center text-white font-semibold bg-notenapp-blue hover:bg-notenapp-blue-hover focus:bg-notenapp-blue-hover rounded-lg cursor-pointer transition-all'} />
    );
}

export const AddGradeButton = () => {
    return (
        <Button
            type={'button'}
            content={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="2" />
                    <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" />
                </svg>
            }
            className={'flex items-center justify-center mt-2 md:mt-0 w-full px-4 py-2 rounded-lg bg-notenapp-blue text-white hover:bg-notenapp-blue-hover transition-all'}
        />
    );
}

export const RemoveGradeButton = () => {
    return (
        <Button
            type={'button'}
            content={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" />
                    <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" />
                </svg>
            }
            className={'flex items-center justify-center mt-2 md:mt-0 w-full px-4 py-2 ml-4 rounded-lg bg-red-700 text-white hover:bg-red-600 transition-all'}
        />
    );
}