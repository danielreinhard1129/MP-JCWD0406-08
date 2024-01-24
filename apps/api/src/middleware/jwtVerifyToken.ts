import { NextFunction, Request, Response } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY!;

interface PayloadToken {
  email: string;
  roleId: Number;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).send({
      message: `Authentication Failed, Token is Missing`,
    });
  }

  jwt.verify(token, secretKey, (err, payload) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        return res.status(403).send({
          message: `Token Expired`,
        });
      } else {
        return res.status(403).send({
          message: `Invalid Token`,
        });
      }
    }
    req.body.user = payload as PayloadToken;

    next();
  });
};
