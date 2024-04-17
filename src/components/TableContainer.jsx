import React from 'react';
import InfoButton from './Button';

export default function TableContainer() {
    return (
        <div className='w-full px-4'>
            <div className='w-full p-4 bg-gray-50 rounded-lg'>
                <div className="w-full rounded-t-lg overflow-x-auto">
                    <table className="table-auto border-collapse w-full">
                        <TableHead />
                        <TableBody />
                    </table>
                </div>
            </div>
        </div>
    );
}

function TableHead() {
    return (
        <thead>
            <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2 w-10 text-start">ID</th>
                <th className="px-4 py-2 whitespace-nowrap text-start">Schüler Name</th>
                <th className="px-4 py-2 whitespace-nowrap text-start">Schüler Email</th>
                <th className="px-4 py-2">&Oslash;</th>
                <th className="px-4 py-2 w-12"></th>
            </tr>
        </thead>
    );
}

function TableBody() {
    return (
        <tbody id="students-table-body" className="text-gray-600 bg-white">
            <tr tabIndex="0" className="hover:bg-gray-100 cursor-pointer">
                <td className="border px-4 py-2 whitespace-nowrap">000009</td>
                <td className="border px-4 py-2 whitespace-nowrap">Sophia Martinez</td>
                <td className="border px-4 py-2 whitespace-nowrap">sophia.martinez@hotmail.com</td>
                <td className="border px-4 py-2 text-center">1,00</td>
                <td className="border-y">
                    <InfoButton />
                </td>
            </tr>
        </tbody>
    );
}