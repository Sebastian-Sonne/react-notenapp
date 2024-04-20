import React from 'react';
import { InfoButton } from './Button';

export default function TableContainer({ students, toggleInfo, setStudent }) {
    return (
        <div className='w-full px-4'>
            <div className='w-full p-4 bg-gray-50 rounded-lg'>
                <div className="w-full rounded-t-lg overflow-x-auto">
                    <table className="table-auto border-collapse w-full">

                        <TableHead />
                        <TableBody toggleInfo={toggleInfo} students={students} setStudent={setStudent} />
                        
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

function TableBody({ toggleInfo, students, setStudent }) {
    return (
        <tbody id="students-table-body" className="text-gray-600 bg-white">
            {students.map((_, index) => (
                <Tr student={students[index]} toggleInfo={toggleInfo} />
            ))}
        </tbody>
    );
}

const Tr = ({ student, toggleInfo }) => {
    return (
        <tr tabIndex='0' className='hover:bg-gray-100 cursor-pointer' onClick={toggleInfo}>
            <Td content={student.id}/>
            <Td content={student.name}/>
            <Td content={student.email}/>
            <Td content={student.avg} className={'border px-4 py-2 text-center'}/>
            <Td content={<InfoButton />} className={'border-y'}/>
        </tr>
    );
}

const Td = ({ className, content }) => {
    return (
        <td className={(className) ? className : 'border px-4 py-2 whitespace-nowrap'}>
            {content}
        </td>
    );
}