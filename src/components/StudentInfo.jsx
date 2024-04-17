import React from "react";
import Title from './Title';
import { ExitButton } from './Button';

export const StudentInfo = ({ isVisible, toggleInfo }) => {

    return (
        <>
            {isVisible && (
                <section id="student-info-box"
                    className="flex justify-center fixed top-0 left-0 w-full h-full backdrop-brightness-50 backdrop-blur-sm overflow-y-auto z-20">
                    <div className="sm:max-w-4xl w-full mx-auto my-auto p-4">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                            <div className="flex justify-between">
                                <Title title={'Schüler Info'} className={'text-2xl font-semibold text-gray-800'} />

                                <ExitButton onClick={toggleInfo} />
                            </div>

                            <form id="student-data-form" className="flex flex-col space-y-4">
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full md:w-1/2 px-2 mt-4">
                                        <label htmlFor="name" className="text-gray-800">Name:</label>
                                        <input type="text" id="info-name" name="info-name" value="Student Name" disabled required
                                            className="w-full px-4 py-2 rounded-lg text-gray-900 border border-gray-300 bg-gray-200 focus:outline-none" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2 mt-4">
                                        <label htmlFor="id" className="text-gray-800">Schüler ID:</label>
                                        <input type="text" id="info-id" name="info-id" value="123456" disabled required
                                            className="w-full px-4 py-2 rounded-lg text-gray-900 border border-gray-300 bg-gray-200 focus:outline-none" />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-800">Email:</label>
                                    <input type="email" id="info-email" name="info-email" value="email@example.com" disabled required
                                        className="w-full px-4 py-2 rounded-lg text-gray-900 border border-gray-300 bg-gray-200 focus:outline-none" />
                                </div>

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

                            <div className="flex w-full mt-6">
                                <button id="edit-student-button" disabled
                                    className="px-6 py-2 mr-3 w-full rounded-lg bg-gray-300 text-gray-400 font-semibold hover:bg-gray-300 transition-all">
                                    Schüler Bearbeiten WIP
                                </button>

                                <button id="confirm-delete-student-button"
                                    className="px-6 py-2 ml-3 w-full md:w-1/3 rounded-lg border-2 border-red-700 text-gray-800 font-semibold hover:border-red-600 hover:bg-red-600 hover:text-white transition-all">
                                    Schüler Löschen
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default StudentInfo;