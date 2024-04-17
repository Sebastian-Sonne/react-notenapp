import React from 'react';
import Title from './Title';
import { ExitButton } from './Button';

export default function NewStudentForm({ isVisible, toggleForm }) {

    return (
        <>
            {isVisible && (
                <section id="create-new-student-box"
                    className="flex justify-center fixed top-0 left-0 w-full h-full backdrop-brightness-50 backdrop-blur-sm overflow-y-auto z-20">
                    <div className="sm:max-w-4xl w-full mx-auto my-auto p-4">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                            <div className="flex justify-between">
                                <Title title={'Schüler Hinzufügen'} className={'text-2xl font-semibold text-gray-800'} />
                                <ExitButton onClick={toggleForm}/>
                            </div>

                            <form id="add-student-form" className="flex flex-col space-y-4">
                                {/* Name & ID */}
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full md:w-1/2 px-2 mt-4 relative">
                                        <label htmlFor="name" className="text-gray-800">Name:</label>
                                        <input type="text" id="name" name="name" placeholder="Max Musterman" required
                                            className="w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none" />
                                        <p id="name-error"
                                            className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-lg px-3 py-1 mt-1 text-red-500 hidden z-30">
                                            Inkorrekter Schülername</p>
                                    </div>
                                    <div className="w-full md:w-1/2 px-2 mt-4 relative">
                                        <label htmlFor="id" className="text-gray-800">Schüler ID:</label>
                                        <input type="number" id="id" name="id" placeholder="123456" required
                                            className="w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none" />
                                        <p id="id-error"
                                            className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-lg px-3 py-1 mt-1 text-red-500 hidden z-30">
                                            Inkorrekte Schüler ID.</p> {/* default error message */}
                                    </div>
                                </div>

                                {/* email */}
                                <div className="flex flex-col relative">
                                    <label htmlFor="email" className="text-gray-800">Email:</label>
                                    <input type="email" id="email" name="email" placeholder="max@example.com" required
                                        className="w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none" />
                                    <p id="email-error"
                                        className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-lg px-3 py-1 mt-1 text-red-500 hidden z-30">
                                        Inkorrekte Schüler Email</p> {/* default error message */}
                                </div>

                                {/* written grades */}
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full md:w-3/4 px-2">
                                        <div id="writtenGradesContainer" className="flex flex-col max-h-[400px] overflow-y-auto">
                                            <label htmlFor="writtenGrade[]" className="text-gray-800">Schriftliche Noten:</label>
                                            <input type="number" name="writtenGrade[]" placeholder="2"
                                                className="writtenGrade w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none" />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/4 px-2 flex items-end">
                                        <button id="add-written-grade-button" type="button"
                                            className="flex items-center justify-center mt-2 md:mt-0 w-full px-4 py-2 rounded-lg bg-notenapp-blue text-white hover:bg-notenapp-blue-hover transition-all">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="2" />
                                                <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" />
                                            </svg>
                                        </button>
                                        <button id="remove-written-grade-button" type="button"
                                            className="flex items-center justify-center mt-2 md:mt-0 w-full px-4 py-2 ml-4 rounded-lg bg-red-700 text-white hover:bg-red-600 transition-all">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" />
                                                <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* oral grades */}
                                <div className="flex flex-wrap -mx-2 mb-6">
                                    <div className="w-full md:w-3/4 px-2">
                                        <div id="oralGradesContainer" className="flex flex-col max-h-[400px] overflow-y-auto">
                                            <label htmlFor="oralGrade[]" className="text-gray-800">Mündliche Noten:</label>
                                            <input type="number" name="oralGrade[]" placeholder="1"
                                                className="oralGrade w-full px-4 py-2 rounded-lg border border-transparent focus:border-green-600 focus:outline-none" />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/4 px-2 flex items-end">
                                        <button id="add-oral-grade-button" type="button"
                                            className="flex items-center justify-center mt-2 md:mt-0 w-full px-4 py-2 rounded-lg bg-notenapp-blue text-white hover:bg-notenapp-blue-hover transition-all">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="2" />
                                                <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" />
                                            </svg>
                                        </button>
                                        <button id="remove-oral-grade-button" type="button"
                                            className="flex items-center justify-center mt-2 md:mt-0 w-full px-4 py-2 ml-4 rounded-lg bg-red-700 text-white hover:bg-red-600 transition-all">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" />
                                                <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <br /><br />

                                <button type="submit"
                                    className="mt-20 px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-500 transition-all">
                                    Schüler Hinzufügen
                                </button>
                            </form>
                        </div>
                    </div>
                </section >
            )}
        </>
    );
}