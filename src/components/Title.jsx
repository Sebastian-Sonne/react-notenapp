import React from 'react';

/**
 * Title react component
 * @param {*} title content of header
 * @param {*} className classNames of header component
 * @returns Title JSX component
 */
export const Title = ({ title, className}) => {
    return (
        <>
            <h1 className={className}>
                {title}
            </h1>
        </>
    );
}

export default Title