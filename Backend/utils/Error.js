
export const createError = (error, req, res, next) => {
    error.message = error.message || "Internal Server Error";
    error.statusCode = error.statusCode || 500;

    return res.status(error.statusCode).json({
        msg: error.message,
        success: false
    });
}

export const asyncError = (passedFn) => (req , res , next) => {
    Promise.resolve(passedFn(req,res,next)).catch(next)
}