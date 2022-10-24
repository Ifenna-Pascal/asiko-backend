import { AppError } from "../core/AppError";
import { Response, NextFunction } from 'express';
import { HttpCode } from "../interface/server.interface";

const middleware = (schema:any, property = "body") => {
    return (req:any, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[property] );
        const valid = error == null;
        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map((i:{message: string}) => i.message).join(",");
            console.log("error", message);
            next(new AppError({ httpCode: HttpCode.BAD_REQUEST, description: message }));
        }
    };
};

export default  middleware;
