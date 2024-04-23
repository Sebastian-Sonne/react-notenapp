import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button React Component
 * @param {*} content content of button
 * @param {*} onClick onclick action of button
 * @param {*} className classes of button
 * @param {*} type type of button
 * @returns button JSX component
 */
export const Button = ({ content, onClick, className, type }) => {
    return (
        <button onClick={onClick} className={className} type={type}> {content} </button>
    );
}
Button.propTypes = {
    content: PropTypes.any,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

export default Button


/**
 * Exit Button react component
 * @param {*} onClick onclick action of button
 * @returns button JSX component
 */
export const ExitButton = ({ onClick }) => {
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
ExitButton.propTypes = {
    onClick: PropTypes.func.isRequired
}


/**
 * Info Button react component
 * @param {*} onClick onclick action of button
 * @returns button JSX component
 */
export const InfoButton = ({ onClick }) => {
    return (
        <Button content={'Info'} type={'button'} onClick={onClick}
            className={'mx-2 my-1 py-[3px] px-2 text-center text-white font-semibold bg-notenapp-blue hover:bg-notenapp-blue-hover focus:bg-notenapp-blue-hover rounded-lg cursor-pointer transition-all'} />
    );
}
InfoButton.propTypes = {
    onClick: PropTypes.func
}


/**
 * Add Grade Button react component
 * @param {*} onClick onclick action of button
 * @returns button JSX component
 */
export const AddGradeButton = ({ onClick }) => {
    return (
        <Button
            type={'button'}
            onClick={onClick}
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
AddGradeButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

/**
 * Remove Grade Button react component
 * @param {*} onClick onclick action of button
 * @returns button JSX component
 */
export const RemoveGradeButton = ({ onClick }) => {
    return (
        <Button
            type={'button'}
            onClick={onClick}
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
RemoveGradeButton.propTypes = {
    onClick: PropTypes.func.isRequired
}