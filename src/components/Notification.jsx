import PropTypes from 'prop-types';
import { ExitButton } from "./Button";
import { Title, Footer } from "./Components";

/**
 * default Notification react component (useState to close)
 * @param {*} notification notification that is displayed 
 * @param {*} setNofitication change notification (use State) -> setNotification('') to hide
 * @returns Notification JSX component
 */
export const Notification = ({ notification, setNotification }) => {
    const hideNotification = () => { setNotification('') }

    return (
        <>
            {notification != '' && (
                <div className='w-full max-w-6xl fixed top-0'>
                    <div className="flex flex-row w-min ml-auto mr-4 my-2 p-1 bg-gray-50 border-2 border-green-600 rounded-lg shadow-lg z-10">

                        <Title title={notification} className={'text-xl font-semibold m-1 px-2 pb-2 pt-1 whitespace-nowrap'} />
                        <ExitButton onClick={hideNotification} />

                    </div>
                </div>
            )}
        </>
    );
}
Notification.propTypes = {
    notification: PropTypes.string.isRequired,
    setNotification: PropTypes.func
}
export default Notification

/**
 * NotLocalStorage react component if not storage is not available
 * @returns NoLocalStorage JSX component
 */
export const NoLocalStorage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <Title title={'Lokaler Speicher nicht Erreichbar'} className={'font-bold text-3xl text-center text-gray-800'} />
            <p className="text-xl text-center text-gray-700">Verwende einen unterstützten Browser.</p>

            <Footer />
        </div>
    );
}

/**
 * NoStudents react component if no students are found
 * @returns NoStudents JSX component
 */
export const NoStudents = () => {
    return (
        <div className="flex-col align-middle w-full">
            <h2 className="font-bold text-3xl text-center text-gray-800">Keine Schüler Gefunden</h2>
            <p className="text-center text-lg text-gray-700">Füge einen neuen Schüler hinzu!</p>
        </div>
    );
}