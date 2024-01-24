import { excludeField } from '@/helper/excludeFields';
import { findUserByEmail } from '@/repositories/users/finUserByEmail';

export const keepLoginAction = async (email: string) => {
  try {
    const user = await findUserByEmail(email);
    if (!user) throw new Error('account not found');
    const dataWithoutPassword = excludeField(user, ['password']);

    return {
      message: 'keeplogin success',
      data: dataWithoutPassword,
    };
  } catch (error) {
    throw error;
  }
};
