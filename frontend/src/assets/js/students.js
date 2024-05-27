/**
 * function to calculate weighted the average grade of student
 * @param {*} oralGradesData array of oral grades
 * @param {*} writtenGradesData array of written grades
 * @returns average weighted 2written:1oral, or '-' if no grades
 */
export const calculateAverage = (oralGradesData, writtenGradesData) => {
    const oralGradesLength = oralGradesData.length;
    const writtenGradesLength = writtenGradesData.length;

    var sumOral = oralGradesData.reduce((acc, grade) => acc + parseFloat(grade), 0);
    var sumWritten = writtenGradesData.reduce((acc, grade) => acc + parseFloat(grade), 0);

    var average = 0;
    if (oralGradesLength + writtenGradesLength > 0) {
        average = (2 * sumWritten + sumOral) / (oralGradesLength + 2 * writtenGradesLength);
    }

    return (average === 0) ? '-' : Number(average.toFixed(2));
}

/**
 * function to sort an array of students in increasing order
 * @param {*} students students
 * @returns sorted array
 */
export const sortStudents = (students) => {

    const compareStudents = (student1, student2) => {
        if (student1.average === 0 && student2.average !== 0) {
            return 1;
        } else if (student1.average !== 0 && student2.average === 0) {
            return -1;
        }
        return student1.average - student2.average;
    }

    return students.sort(compareStudents);
}

