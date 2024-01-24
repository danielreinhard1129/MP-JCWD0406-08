import { excludeField } from '@/helper/excludeFields';
import { comparePasswords, hashPassword } from '@/lib/bcrypt';
import { createToken } from '@/lib/jwt';
import { findUserByEmail } from '@/repositories/users/finUserByEmail';

import { IUser } from '@/types/user.type';

export const loginAction = async (data: IUser) => {
  try {
    const { email, password } = data;
    const user = await findUserByEmail(email);
    if (!user) throw new Error('account not found');

    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid password');
    const dataWithoutPassword = excludeField(user, ['password']);

    const token = createToken({ email: user.email });

    return {
      message: 'Login success',
      data: dataWithoutPassword,
      token,
    };
  } catch (error) {
    throw error;
  }
};
