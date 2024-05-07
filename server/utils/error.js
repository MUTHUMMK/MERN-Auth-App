export const errorhandler = (statuscode, message)=> {
    const error = new Error(message);
    error.statuscode = statuscode;
    error.message = message;
    return error;
}