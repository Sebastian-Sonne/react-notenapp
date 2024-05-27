/**
 * function to get data from local storage
 * @param {*} key key of data
 * @returns data
 */
export function loadData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

/**
 * function to save data at key to local storage
 * @param {*} key data key
 * @param {*} data data
 */
export function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

/**
 * function to save a student to data
 * @param {*} student 
 */
export function saveStudent(student) {
    var data = loadData('students');
    data.push(student);
    saveData('students', data);
}

/**
 * function to delete a student
 * @param {*} student student
 */
export function deleteStudent(student) {
    var data = loadData('students');
    const index = findStudent(student.id, data);

    if (index !== -1) {
        data.splice(index, 1);
    }

    saveData('students', data);
}

/**
 * function to find a student in student array
 * @param {*} studentId id of student
 * @param {*} data students
 * @returns index of student in data array
 */
function findStudent(studentId, data) {
    var index = -1;
    for (var i = 0; i < data.length; i++) {
        if (data[i].id === studentId) {
            index = i;
            break;
        }
    }
    return index;
}