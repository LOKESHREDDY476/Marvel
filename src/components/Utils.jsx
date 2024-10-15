export function validateName(fname){
    const regexName=/^[A-Z][a-z]{2,14}$/;
    return regexName.test(fname);
}
export function validateEmail(email){
    const regexEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}
export function validatePhoneNumber(phoneNumber){
    const regexphoneNumber=/^[6-9][0-9]{9}$/;
    return regexphoneNumber.test(phoneNumber);
}
export function validatePassword(password){
    const regexPassword= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@_-])[A-Za-z\d@_-]{8,}$/;
    return regexPassword.test(password);
}