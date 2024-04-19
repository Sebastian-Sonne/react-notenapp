import React from "react";
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

export const NameInput = ({ disabled = false, name, setName }) => {
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="w-full md:w-1/2 px-2 mt-4 relative">
            <Label htmlFor={'name'} className={'text-gray-800'} content={'Name:'} />

            <input type='text'
                name='name'
                placeholder='Max Musterman'
                value={name}
                onChange={handleNameChange}
                required={true}
                disabled={disabled}
                className={(disabled) 
                    ? 'w-full px-4 py-2 rounded-lg text-gray-900 border border-gray-300 bg-gray-200 focus:outline-none'
                    : 'w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none'}
            />

            {!disabled && (
                <ErrorMessage content={'Inkorrekter Schülername'} />
            )}
        </div>
    );
}

export const IdInput = ({ disabled = false, id, setId }) => {
    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    return (
        <div className='w-full md:w-1/2 px-2 mt-4 relative'>
            <Label htmlFor={'id'} className={'text-gray-800'} content={'Schüler ID:'} />

            <input type='number'
                name='id'
                placeholder='123456'
                value={id}
                onChange={handleIdChange}
                required={true}
                disabled={disabled}
                className={(disabled) 
                    ? 'w-full px-4 py-2 rounded-lg text-gray-900 border border-gray-300 bg-gray-200 focus:outline-none'
                    : 'w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none'}
            />

            {!disabled && (
                <ErrorMessage content={'Inkorrekte Schüler ID.'} />
            )}

        </div>
    );
}

export const EmailInput = ({ disabled = false, email, setEmail }) => {
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className='flex flex-col relative'>
            <Label htmlFor={'email'} className={'text-gray-800'} content={'Email:'} />

            <input type='email'
                name='email'
                placeholder='email@example.com'
                value={email}
                onChange={handleEmailChange}
                required={true}
                disabled={disabled}
                className={(disabled) 
                    ? 'w-full px-4 py-2 rounded-lg text-gray-900 border border-gray-300 bg-gray-200 focus:outline-none'
                    : 'w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none'}
            />
                
            {!disabled && (
                <ErrorMessage content={'Inkorrekte Schüler Email'} />
            )}
        </div>
    );
}

export const GradeInputs = ({ writtenGrades, setWrittenGrades, oralGrades, setOralGrades}) => {
    return (
        <>
            <GradeInput grades={writtenGrades} setGrades={setWrittenGrades} isWritten={true} />
            <GradeInput grades={oralGrades} setGrades={setOralGrades} isWritten={false} />
        </>
    );
}

const GradeInput = ({ isWritten, grades, setGrades }) => {
    const addGrades = () => {
        setGrades([...grades, ''])
    }

    const removeGrades = (index) => {
        const newGrades = [...grades];
        newGrades.splice(index, 1);
        setGrades(newGrades);
    }

    const handleGradeChange = (index, value) => {
        const newGrades = [...grades];
        newGrades[index] = value;
        setGrades(newGrades);
    };

    return (
        <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-3/4 px-2">
                <div className="flex flex-col max-h-[400px] overflow-y-auto">

                    <Label
                        htmlFor={'writtenGrade[]'}
                        className={'text-gray-800'}
                        content={isWritten ? 'Schriftliche Noten:' : 'Mündliche Noten:'}
                    />

                    {grades.map((grade, index) => (
                        <input type="number"
                            key={index}
                            name={isWritten ? 'writtenGrade[]' : 'oralGrade[]'}
                            value={grade}
                            onChange={(e) => handleGradeChange(index, e.target.value)}
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