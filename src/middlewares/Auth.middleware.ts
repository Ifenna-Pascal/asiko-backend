import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IGetUserAuthInfoRequest } from '../interface/auth.interface';

export const isAuth = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    if (req.headers['Authorization']) {
      const token:any = req.headers['Authorization'];
      const decoded = jwt.decode(token);
      if (decoded) {
        req.user = decoded;
        next();
      } else {
        throw new Error("Token Not Valid")
      }
    }else{
      throw new Error("UnAuthorized");
  }
}