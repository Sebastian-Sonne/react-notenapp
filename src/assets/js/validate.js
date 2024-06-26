/**
 * function to validate a from based on their inputs
 * @param {*} id id
 * @param {*} name name
 * @param {*} email email
 * @returns true if valid
 */
export const validateForm = (id, name, email) => {
    const idEval = (validateId(id) === 'valid') ? true : false;
    const nameEval = (validateName(name) === 'valid') ? true : false;
    const emailEval = (validateEmail(email) === 'valid') ? true : false;

    return (idEval && nameEval && emailEval);
}

export const validateName = (value) => {
    if (value.length <= 0) {
        return 'Name ist erforderlich';
    }
    if (value.length > 40) {
        return 'Name überschreitet maximale Länge';
    }
    return 'valid';
}

export const validateId = (value) => {
    if (value.length < 6) {
        if (!/^\d+$/.test(value)) {
            return 'ID darf nur aus Zahlen bestehen';
        }
        return 'ID muss mindestens 6 Zeichen lang sein';
    }
    if (value.length > 16) {
        return 'ID darf maximal 16 Zeichen lang sein';
    }
    return 'valid';
}

export const validateEmail = (value) => {
    if (value.length < 1) {
        return 'E-Mail ist erforderlich';
    }
    if (!validateEmailPattern(value)) {
        return 'Ungültige E-Mail';
    }
    return 'valid';
}

/**
 * function to validate an email
 * @param {*} email email to be validated
 * @returns true if correct
 */
function validateEmailPattern(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email regular expression
    return emailPattern.test(email);
}