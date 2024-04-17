import React from 'react';

export default function Button({ content, onClick, className }) {
    return (
        <button onClick={onClick} className={className}> {content} </button>
    );
}

export function ExitButton({ onClick }) {
    return (
        <Button onClick={onClick}
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

export function InfoButton() {
    return (
        <Button content={'Info'} onClick={''}
            className={'m-2 py-1 px-2 text-center text-white font-semibold bg-notenapp-blue hover:bg-notenapp-blue-hover focus:bg-notenapp-blue-hover rounded-lg cursor-pointer transition-all'} />
    );
}