import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../core/AppError';
import { IGetUserAuthInfoRequest } from '../interface/auth.interface';
import { HttpCode } from '../interface/server.interface';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['authorization']) {
      console.log(req.headers['authorization'].split(" "));
      const token:any = req.headers['authorization'].split(" ")[1];
      console.log(token,  "tokens");
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) ;
      console.log(decoded, "tokenDs"); 
      
      if (decoded) {
        (req as IGetUserAuthInfoRequest).user = decoded;
        next();
      } else {
        throw new AppError({httpCode:HttpCode.BAD_REQUEST, description: "UnAuthorized"})
      }
    }else{
      throw new AppError({httpCode:HttpCode.BAD_REQUEST, description: "No token found"})
  }
}