import React from "react";
import Title from "./Title";
import Button from "./Button";

export const ConfirmDeleteBox = ({ isVisible, toggleBox }) => {

    return (
        <>
            {isVisible && (
                <section id="confirm-delete-box"
                    className="flex justify-center fixed top-0 left-0 w-full h-full backdrop-brightness-50 backdrop-blur-sm z-20">
                    <div id="delete-student-box" className="sm:max-w-2xl w-full mx-auto mb-auto p-4 z-30">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                            <div className="flex flex-col">
                                <Title title={'Möchten Sie den Schüler wirklich löschen?'} className={'text-2xl sm:text-3xl mb-1 font-semibold text-gray-800'} />
                                <Title title={'Dieser Vorgang kann nicht rückgängig gemacht werden.'} className={'text-base font-semibold text-gray-700'} />
                            </div>

                            <div className="flex w-full mt-6">
                                <Button content={'Abbrechen'} onClick={toggleBox}
                                    className={'px-6 py-2 w-full md:w-1/2 rounded-lg bg-green-700 border-2 border-green-700 text-white font-semibold hover:border-green-600 hover:bg-green-600 hover:text-white transition-all'} />
                                <Button content={'Schüler Löschen'}
                                    className={'px-6 py-2 ml-3 w-full md:w-1/2 rounded-lg border-2 border-red-700 text-gray-800 font-semibold hover:border-red-600 hover:bg-red-600 hover:text-white transition-all'} />
                            </div>
                        </div>
                    </div>
                </section>
            )};
        </>
    );
}

export default ConfirmDeleteBox;