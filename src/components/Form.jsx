import React, { useState } from "react";
import Button from './Button';
import { EmailInput, GradeInputs, IdInput, NameInput } from './Input';
import { calculateAverage } from "../assets/js/students";

export const StudentForm = ({ addStudent, toggleForm }) => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    const [writtenGrades, setWrittenGrades] = useState(['']);
    const [oralGrades, setOralGrades] = useState(['']);

    const handleSubmit = (event) => {
        event.preventDefault();

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
                <NameInput name={name} setName={setName}/>
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


export const InfoForm = ({ student }) => {

    console.log(student);

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
                            <tr className="hover:bg-gray-50 cursor-pointer">
                                <td className="border px-4 py-2">-</td>
                                <td className="border px-4 py-2">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </form>
    );
}