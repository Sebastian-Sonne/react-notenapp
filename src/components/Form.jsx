import React from "react";
import Button from './Button';
import { EmailInput, GradeInputs, IdInput, NameInput } from './Input';

export const StudentForm = () => {
    return (
        <form id="add-student-form" className="flex flex-col space-y-4">

            {/* Name & ID */}
            <div className="flex flex-wrap -mx-2">
                <NameInput />
                <IdInput />
            </div>

            {/* email */}
            <EmailInput />

            {/* grades */}
            <GradeInputs />

            <br /><br />

            <Button type={'submit'}
                content={'Schüler Hinzufügen'}
                className={'mt-20 px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-500 transition-all'}
            />

        </form>
    );
}

export const InfoForm = () => {
    return (
        <form id="add-student-form" className="flex flex-col space-y-4">
            {/* Name & ID */}
            <div className="flex flex-wrap -mx-2">
                <NameInput disabled={true}/>
                <IdInput disabled={true}/>
            </div>

            {/* email */}
            <EmailInput disabled={true}/>
        </form>
    );
}