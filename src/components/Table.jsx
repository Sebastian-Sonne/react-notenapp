import PropTypes from 'prop-types';
import { InfoButton } from './Button';
import { sortStudents } from '../assets/js/students';

/**
 * Table Head react component
 * @returns Table Head JSX component
 */
export const TableHead = () => {
    return (
        <thead>
            <tr className='bg-gray-200 text-gray-700'>
                <th className='px-4 py-2 w-10 text-start'>ID</th>
                <th className='px-4 py-2 whitespace-nowrap text-start'>Schüler Name</th>
                <th className='px-4 py-2 whitespace-nowrap text-start'>Schüler Email</th>
                <th className='px-4 py-2'>&Oslash;</th>
                <th className='px-4 py-2 w-12'></th>
            </tr>
        </thead>
    );
}

/**
 * Table Body react component
 * @param {*} students array of all students who are displayed
 * @param {*} toggleInfo function to toggle visibility of student info box
 * @param {*} setStudent function to set the current student
 * @returns Table Body JSX component
 */
export const TableBody = ({ students, toggleInfo, setCurrentStudent }) => {

    const sortedStudents = sortStudents(students);

    return (
        <tbody className='text-gray-600 bg-white'>
            {sortedStudents.map((_, index) => (
                <Tr 
                    key={index}
                    student={sortedStudents[index]} 
                    toggleInfo={toggleInfo} 
                    setCurrentStudent={setCurrentStudent}
                />
            ))}
        </tbody>
    );
}
TableBody.propTypes = {
    students: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleInfo: PropTypes.func.isRequired,
    setCurrentStudent: PropTypes.func.isRequired
}

/**
 * Table Row react component
 * @param {*} students array of all students who are displayed
 * @param {*} toggleInfo function to toggle visibility of student info box
 * @param {*} setStudent function to set the current student
 * @returns Table Row JSX component
 */
const Tr = ({ student, toggleInfo, setCurrentStudent }) => {

    const handleClick = () => {
        setCurrentStudent(student);
        toggleInfo();
    }

    return (
        <tr tabIndex='0' className='hover:bg-gray-100 cursor-pointer' onClick={handleClick}>
            <Td content={student.id} />
            <Td content={student.name} />
            <Td content={student.email} />
            <Td content={student.average} className={'border px-4 py-2 text-center'} />
            <Td content={<InfoButton />} className={'border-y'} />
        </tr>
    );
}
Tr.propTypes = {
    student: PropTypes.object.isRequired,
    toggleInfo: PropTypes.func.isRequired,
    setCurrentStudent: PropTypes.func.isRequired
}

/**
 * Table Cell react component
 * @param {*} className className of component
 * @param {*} content content of component
 * @returns Table Cell JSX component
 */
const Td = ({ className, content }) => {
    return (
        <td className={(className) ? className : 'border px-4 py-2 whitespace-nowrap'}>
            {content}
        </td>
    );
}
Td.propTypes = {
    className: PropTypes.string,
    content: PropTypes.any
}