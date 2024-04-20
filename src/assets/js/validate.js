
export const validateName = (value) => {
    if (value.length <= 0) {
        return 'Name ist erforderlich';
    }
    if (value.length > 40) {
        return 'Name überschreitet maximale Länge';
    }
    return '';
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
    return '';
}

export const validateEmail = (value) => {
    if (value.length < 1) {
        return 'E-Mail ist erforderlich';
    }
    if (!validateEmailPattern(value)) {
        return 'Ungültige E-Mail';
    }
    return '';
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