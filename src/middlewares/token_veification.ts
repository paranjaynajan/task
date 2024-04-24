
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';



export const auth = async(req: Request, res: Response, next: NextFunction) => {
try{
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Token not provided' });
  }

  const decoded =  jwt.verify(token, process.env.ACCESS_TOKEN as string);

    next();
  } catch (error) {

    return res.status(403).json({ message: 'Forbidden: Invalid token' });
  }
};
