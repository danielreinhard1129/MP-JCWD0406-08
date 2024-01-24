// import { excludeFields } from '@/helpers/excludeFields';
// import { comparePasswords, hashPassword } from '@/lib/bcrypt';
// import { nanoid } from '@/lib/nanoid';
import { createToken } from '@/lib/jwt';
import { transporter } from '@/lib/nodemailer';
import { findUserByEmail } from '@/repositories/users/finUserByEmail';

export const forgotPasswordAction = async (email: string) => {
  try {
    const user = await findUserByEmail(email);
    if (!user) throw new Error('account not found');
    const token = createToken({ email: user.email });
    const baseUrl = 'http://localhost:3000';
    const link = baseUrl + `/reset-password?token=${token}`;
    await transporter.sendMail({
      from: 'sender',
      to: email,
      subject: 'Reset Password Link',
      html: `<a href="${link}" target="_blank">Reset Password Here</a>`,
    });
    return {
      message: 'send email success',
    };
  } catch (error) {
    throw error;
  }
};
