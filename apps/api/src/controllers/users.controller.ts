import { NextFunction, Request, Response } from 'express';
import { registerAction } from '@/actions/register.action';
// import { forgotPasswordAction } from '@/actions/forgotPassword.Action';
// import { keepLoginAction } from '@/actions/keepLogin';
// import { loginAction } from '@/actions/login.action';
// import { resetPasswordAction } from '@/actions/resetPassword.Action';

export class UserController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const result = await registerAction(data);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  // async loginUser(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const result = await loginAction(req.body);
  //     return res.status(200).send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async keepLogin(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const email = req.user!.email;
  //     const result = await keepLoginAction(email as string);
  //     return res.status(200).send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async forgotPassword(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const result = await forgotPasswordAction(req.body.email);
  //     return res.status(200).send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  // async resetPassword(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const email = req.user!.email;
  //     const result = await resetPasswordAction(email, req.body);
  //     return res.status(200).send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}
