import prisma from '@/prisma';
import { IUser } from '@/types/user.type';

export const createUser = async (data: IUser) => {
  try {
    const { email, firstName, lastName, password, codeReferral } = data;
    const result = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password,
        codeReferral,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
