import { useState, useEffect } from 'react';
import * as storageModule from './assets/js/storage.js';
import * as Components from './components/Components.jsx';
import * as Notify from './components/Notification.jsx';

/**
 * App (main) react component
 * @returns App (main) JSX component
 */
export const App = () => {

    const [students, setStudents] = useState((typeof (Storage) === 'undefined') ? storageModule.loadData('students') : []);
    const [currentStudent, setCurrentStudent] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [notification, setNotification] = useState(''); //setNofitication('') to hide component

    const addStudent = (student) => {
        storageModule.saveStudent(student);
        setStudents(storageModule.loadData('students'));
        setNotification('Schüler Erfolgreich Hinzugefügt');
    }

    const deleteStudent = () => {
        storageModule.deleteStudent(currentStudent);
        setStudents(storageModule.loadData('students'));
        setNotification('Schüler Erfolgreich Gelöscht');
    }

    const toggleForm = () => { setShowForm(!showForm) };
    const toggleInfo = () => { setShowInfo(!showInfo) };

    useEffect(() => {
        (showForm || showInfo) ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden');

        return () => { document.body.classList.remove('overflow-hidden') };
    }, [showForm, showInfo]);

    return (
        <>
            {typeof (Storage) === 'undefined' ? (<Notify.NoLocalStorage />) : (
                <div className={'flex justify-center min-h-screen'}>
                    <div className='flex flex-col max-w-6xl w-full'>

                        <Components.Header />

                        <Notify.Notification
                            notification={notification}
                            setNotification={setNotification} />

                        <Components.SubHeader
                            toggleForm={toggleForm} />

                        <Components.TableContainer
                            students={students}
                            toggleInfo={toggleInfo}
                            setCurrentStudent={setCurrentStudent} />

                        <Components.Footer />

                        <Components.NewStudentBox
                            isVisible={showForm}
                            toggleForm={toggleForm}
                            addStudent={addStudent} />

                        <Components.StudentInfoBox
                            isVisible={showInfo}
                            toggleInfo={toggleInfo}
                            student={currentStudent}
                            deleteStudent={deleteStudent} />
                    </div>
                </div>
            )}
        </>
    );
}

export default App