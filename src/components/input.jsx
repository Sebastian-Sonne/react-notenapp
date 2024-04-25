import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { AddGradeButton, RemoveGradeButton } from './Button';
import * as validateModule from '../assets/js/validate';

/**
 * generic Label for input component react component
 * @param {*} htmlFor for attribute
 * @param {*} content content of label
 * @param {*} className classes of label
 * @return Label JSX component
 */
const Label = ({ htmlFor, content, className }) => {
    return (
        <label htmlFor={htmlFor} className={className}>{content}</label>
    );
}
Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    className: PropTypes.string
}

/**
 * Error Message for input component react component
 * @param {*} content error message
 * @param {*} isVisible initial false, true if visible
 * @return Error Message JSX component
 */
const ErrorMessage = ({ content, isVisible = false }) => {
    return (
        <>
            {isVisible && (
                <p className='absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-md rounded-lg px-3 py-1 mt-1 text-red-500 z-30' >
                    {content}
                </p >
            )}
        </>
    );
}
ErrorMessage.propTypes = {
    content: PropTypes.string.isRequired,
    isVisible: PropTypes.bool
}

/**
 * Name input field react component
 * @param {*} disabled true if input field disabled
 * @param {*} name value of input field
 * @param {*} setName function to set name (useState together with name in parent component)
 * @returns Name input field JSX component
 */
export const NameInput = ({ disabled = false, name, setName }) => {
    const [error, setError] = useState('');

    /**
     * function to handle Name change
     * @param {*} event onChange event
     */
    const handleNameChange = (event) => {
        setName(event.target.value);
        setError(validateModule.validateName(event.target.value));
    };

    return (
        <div className='w-full md:w-1/2 px-2 mt-4 relative'>
            <Label htmlFor={'name'} className={'text-gray-800'} content={'Name:'} />

            <input type='text'
                name='name'
                placeholder='Max Musterman'
                value={name}
                onChange={handleNameChange}
                required={true}
                disabled={disabled}
                className={
                    (disabled) ? 'w-full px-4 py-2 rounded-lg text-gray-900 border border-gray-300 bg-gray-200 focus:outline-none'
                    : (error === '') ? 'w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none'
                    : (error === 'valid') ? 'w-full px-4 py-2 rounded-lg border border-green-600 focus:border-green-600 focus:outline-none'
                    : 'w-full px-4 py-2 rounded-lg border border-red-500 focus:border-red-500 focus:outline-none'}
            />

            {!disabled && (
                <ErrorMessage content={error} isVisible={(error === 'valid' || error === '') ? false : true} />
            )}
        </div>
    );
}
NameInput.propTypes = {
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired
}

/**
 * Id input field react component
 * @param {*} disabled true if input field disabled
 * @param {*} id value of input field
 * @param {*} setName function to set id (useState together with id in parent component)
 * @returns Id input field JSX component
 */
export const IdInput = ({ disabled = false, id, setId }) => {
    const [error, setError] = useState('');

     /**
     * function to handle Id change
     * @param {*} event onChange event
     */
    const handleIdChange = (event) => {
        setId(event.target.value);
        setError(validateModule.validateId(event.target.value));
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
                className={
                    (disabled) ? 'w-full px-4 py-2 rounded-lg text-gray-900 border border-gray-300 bg-gray-200 focus:outline-none'
                    : (error === '') ? 'w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none'
                    : (error === 'valid') ? 'w-full px-4 py-2 rounded-lg border border-green-600 focus:border-green-600 focus:outline-none'
                    : 'w-full px-4 py-2 rounded-lg border border-red-500 focus:border-red-500 focus:outline-none'}
            />

            {!disabled && (
                <ErrorMessage content={error} isVisible={(error === 'valid' || error === '') ? false : true} />
            )}
        </div>
    );
}
IdInput.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    setId: PropTypes.func.isRequired
}

/**
 * Email input field react component
 * @param {*} disabled true if input field disabled
 * @param {*} email value of input field
 * @param {*} setName function to set email (useState together with email in parent component)
 * @returns Email input field JSX component
 */
export const EmailInput = ({ disabled = false, email, setEmail }) => {
    const [error, setError] = useState('');

     /**
     * function to handle Email change
     * @param {*} event onChange event
     */
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setError(validateModule.validateEmail(event.target.value));
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
                className={
                    (disabled) ? 'w-full px-4 py-2 rounded-lg text-gray-900 border border-gray-300 bg-gray-200 focus:outline-none'
                    : (error === '') ? 'w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none'
                    : (error === 'valid') ? 'w-full px-4 py-2 rounded-lg border border-green-600 focus:border-green-600 focus:outline-none'
                    : 'w-full px-4 py-2 rounded-lg border border-red-500 focus:border-red-500 focus:outline-none'}
            />

            {!disabled && (
                <ErrorMessage content={error} isVisible={(error === 'valid' || error === '') ? false : true} />
            )}
        </div>
    );
}
EmailInput.propTypes = {
    disabled: PropTypes.bool,
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired
}

/**
 * Written and Oral grade input field react component
 * @param {*} writtenGrades array of written grades
 * @param {*} setWrittenGrades function to set written grades (useState together with writtenGrades in parent component)
 * @param {*} oralGrades array of oral grades
 * @param {*} setOralGrades function to set oral grades (useState together with oralGrades in parent component)
 * @returns Written and Oral grade input field JSX component
 */
export const GradeInputs = ({ writtenGrades, setWrittenGrades, oralGrades, setOralGrades }) => {
    return (
        <>
            <GradeInput grades={writtenGrades} setGrades={setWrittenGrades} isWritten={true} />
            <GradeInput grades={oralGrades} setGrades={setOralGrades} isWritten={false} />
        </>
    );
}
GradeInputs.propTypes = {
    writtenGrades: PropTypes.arrayOf(PropTypes.number).isRequired,
    setWrittenGrades: PropTypes.func.isRequired,
    oralGrades: PropTypes.arrayOf(PropTypes.number).isRequired,
    setOralGrades: PropTypes.func.isRequired
}

/**
 * Grade input field react component
 * @param {*} isWritten true if component is for written grades
 * @param {*} grades array of grades
 * @param {*} setGrades function to set grades (useState together with grades in parent component)
 * @returns Grade input field JSX component
 */
const GradeInput = ({ isWritten = false, grades, setGrades }) => {
    const inputRef = useRef(null);

    const addGrades = () => {
        setGrades([...grades, '']);
        //timeout to give DOM time to render the new input fully befor applying focus
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 0);
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
        <div className='flex flex-wrap -mx-2'>
            <div className='w-full md:w-3/4 px-2'>
                <div className='flex flex-col max-h-[400px] overflow-y-auto'>

                    <Label
                        htmlFor={'writtenGrade[]'}
                        className={'text-gray-800'}
                        content={isWritten ? 'Schriftliche Noten:' : 'Mündliche Noten:'}
                    />

                    {grades.map((grade, index) => (

                        <input type='number'
                            ref={index === grades.length - 1  ? inputRef : null}
                            name={isWritten ? 'writtenGrade[]' : 'oralGrade[]'}
                            key={index}
                            value={grade}
                            onChange={(e) => handleGradeChange(index, e.target.value)}
                            placeholder={index === 0 ? Math.round(Math.random() * 5) + 1 : ''}
                            className='writtenGrade w-full px-4 py-2 mb-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none'
                        />

                    ))}
                </div>
            </div>

            <div className='w-full md:w-1/4 px-2 mb-2 flex items-end'>
                <AddGradeButton onClick={addGrades} />
                {grades.length > 0 && <RemoveGradeButton onClick={() => removeGrades(grades.length - 1)} />}
            </div>
        </div>
    );
}
GradeInput.propTypes = {
    isWritten: PropTypes.bool,
    grades: PropTypes.arrayOf(PropTypes.number).isRequired,
    setGrades: PropTypes.func.isRequired
}