

const errorHandler = (error, req, res) => {

    const status = error.status || 500
    const message = error.message || 'Unknown error'
    const stack = error.stack

    res.status(status).json({status, message, stack})
}


export default errorHandler