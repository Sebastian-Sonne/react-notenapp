import React, { useState } from "react";
import { AddGradeButton, RemoveGradeButton } from './Button';

const Label = ({ htmlFor, content, className }) => {
    return (
        <label htmlFor={htmlFor} className={className}>{content}</label>
    );
}

const ErrorMessage = ({ content }) => {
    return (
        <p className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-lg px-3 py-1 mt-1 text-red-500 z-30">
            {content}
        </p>
    );
}

export const NameInput = ({ disabled }) => {
    return (
        <div className="w-full md:w-1/2 px-2 mt-4 relative">
            <Label htmlFor={'name'} className={'text-gray-800'} content={'Name:'} />

            <input type='text'
                name='name'
                placeholder='Max Musterman'
                required
                disabled={disabled}
                className='w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none'
            />

            <ErrorMessage content={'Inkorrekter Schülername'} />
        </div>
    );
}

export const IdInput = ({ disabled }) => {
    return (
        <div className='w-full md:w-1/2 px-2 mt-4 relative'>
            <Label htmlFor={'id'} className={'text-gray-800'} content={'Schüler ID:'} />

            <input type='number'
                name='id'
                placeholder='123456'
                required
                disabled={disabled}
                className='w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none'
            />

            <ErrorMessage content={'Inkorrekte Schüler ID.'} />
        </div>
    );
}

export const EmailInput = ({ disabled }) => {
    return (
        <div className='flex flex-col relative'>
            <Label htmlFor={'email'} className={'text-gray-800'} content={'Email:'} />

            <input type='email'
                name='email'
                placeholder='max@example.com'
                required
                disabled={disabled}
                className='w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none' />

            <ErrorMessage content={'Inkorrekte Schüler Email'} />
        </div>
    );
}

export const GradeInputs = () => {
    return (
        <>
            <GradeInput isWritten={true} />
            <GradeInput isWritten={false} />
        </>
    );
}

const GradeInput = ({ isWritten }) => {
    const [grades, setGrades] = useState([1]);

    const addGrades = () => {
        setGrades([...grades, 1])
    }

    const removeGrades = (index) => {
        const newGrades = [...grades];
        newGrades.splice(index, 1);
        setGrades(newGrades);
    }

    return (
        <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-3/4 px-2">
                <div className="flex flex-col max-h-[400px] overflow-y-auto">

                    <Label
                        htmlFor={'writtenGrade[]'}
                        className={'text-gray-800'}
                        content={isWritten ? 'Schriftliche Noten:' : 'Mündliche Noten:'}
                    />

                    {grades.map((_, index) => (
                        <input type="number"
                            key={index}
                            name={isWritten ? 'writtenGrade[]' : 'oralGrade[]'}
                            placeholder={index === 0 ? Math.round(Math.random() * 5) + 1 : ''}
                            className="writtenGrade w-full px-4 py-2 mb-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none"
                        />
                    ))}
                </div>
            </div>

            <div className="w-full md:w-1/4 px-2 mb-2 flex items-end">
                <AddGradeButton onClick={addGrades} />
                {grades.length > 0 && <RemoveGradeButton onClick={() => removeGrades(grades.length - 1)} />}
            </div>
        </div>
    );
}