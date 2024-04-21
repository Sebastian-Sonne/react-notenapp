import React, { useState } from "react";
import Button from './Button';
import { EmailInput, GradeInputs, IdInput, NameInput } from './Input';
import { calculateAverage } from "../assets/js/students";
import { validateForm } from "../assets/js/validate";

/**
 * New StudentForm React Component
 * @param {*} addStudent onSubmit function to add student to students
 * @param {*} toggleForm function to toggle visibility of form
 * @returns jsx component
 */
export const StudentForm = ({ addStudent, toggleForm }) => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    const [writtenGrades, setWrittenGrades] = useState(['']);
    const [oralGrades, setOralGrades] = useState(['']);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm(id, name, email)) return;

        const writtenGradesData = writtenGrades.filter(value => value.trim() !== '');
        const oralGradesData = oralGrades.filter(value => value.trim() !== '');

        const student = {
            'name': name,
            'id': id,
            'email': email,
            'writtenGrades': writtenGradesData,
            'oralGrades': oralGradesData,
            'average': calculateAverage(oralGradesData, writtenGradesData)
        };

        addStudent(student);
        toggleForm();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

            {/* Inputs */}
            <div className="flex flex-wrap -mx-2">
                <NameInput name={name} setName={setName} />
                <IdInput id={id} setId={setId} />
            </div>

            <EmailInput email={email} setEmail={setEmail} />

            <GradeInputs
                writtenGrades={writtenGrades}
                setWrittenGrades={setWrittenGrades}
                oralGrades={oralGrades}
                setOralGrades={setOralGrades}
            />

            <br /><br />

            <Button type={'submit'}
                content={'Schüler Hinzufügen'}
                className={'mt-20 px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-500 transition-all'}
            />

        </form>
    );
};

/**
 * Student InfoForm React Component
 * @param {*} param0 student whos data is shown
 * @returns jsx component
 */
export const InfoForm = ({ student }) => {
    const maxLength = Math.max(student.writtenGrades.length, student.oralGrades.length);

    const rows = [];
    for (var i = 0; i < maxLength; i++) {
        rows.push(generateTr(i, student.writtenGrades, student.oralGrades));
    }

    return (
        <form id="add-student-form" className="flex flex-col space-y-4">

            <div className="flex flex-wrap -mx-2">

                <NameInput
                    name={(student.name) ? student.name : 'N/A'}
                    disabled={true}
                />

                <IdInput
                    id={(student.id) ? student.id : 'N/A'}
                    disabled={true}
                />

            </div>

            <EmailInput
                email={(student.email) ? student.email : 'N/A'}
                disabled={true}
            />

            <div className="w-full">
                <label htmlFor="info-grades" className="text-gray-800">Noten:</label>
                <div className="w-full rounded-t-lg overflow-x-auto max-h-[400px] overflow-y-auto">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="px-4 py-2">Schriftliche Noten</th>
                                <th className="px-4 py-2">Mündliche Noten</th>
                            </tr>
                        </thead>
                        <tbody id="grade-table-body" className="text-gray-600 bg-white">

                            {rows}

                        </tbody>
                    </table>
                </div>
            </div>
        </form>
    );
}

/**
 * function to generate a tr html element for student grades
 * @param {*} index index of grade in array
 * @param {*} writtenGrades writtengrades array
 * @param {*} oralGrades oralgrades array
 * @returns tr element
 */
const generateTr = (index, writtenGrades, oralGrades) => {
    const writtenGrade = index < writtenGrades.length ? writtenGrades[index] : '-';
    const oralGrade = index < oralGrades.length ? oralGrades[index] : '-';

    return (
        <tr key={index}>
            <td className="border px-4 py-2">{writtenGrade}</td>
            <td className="border px-4 py-2">{oralGrade}</td>
        </tr>
    );
}