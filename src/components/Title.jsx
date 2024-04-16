import React from 'react';

export default function Title({title}) {
    return (
        <>
            <h1 className="text-gray-700 text-2xl font-semibold mt-4">
                {title}
            </h1>
        </>
    );
}