import { Request, Response, NextFunction } from 'express';
import { AppError } from '../core/AppError';

// Request logger
export const requestLogger = (request: Request, response: Response, next: NextFunction) => {
    console.log(`${request.method} url:: ${request.url}`);
    next()
}

// Error Logger
export const errorLogger = (error: Error, request: Request, response: Response, next: NextFunction) => {
    console.log(`error ${error.message}`)
    next(error) // calling next middleware
}

// export const invalidPathHandler = (request: Request, response: Response, next: NextFunction) => {
//     response.status(400)
//     response.send('invalid path')
//   }

// Actual Error Handler
export const errorResponder = (error: AppError, request: Request, response: Response, next: NextFunction) => {
    response.header("Content-Type", 'application/json')
    response.status(error.httpCode).json({
        status: error.name,
        message: error.message
    })
}







