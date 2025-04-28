import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/schemas/User.schema';
import { IUser } from '../models/interfaces/User.interface';

export const registerUser = async (userData: Partial<IUser>) => {
  const hashedPassword = await bcrypt.hash(userData.password as string, 10);
  const user = new User({
    ...userData,
    password: hashedPassword
  });
  return user.save();
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Utilisateur non trouvé');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Mot de passe incorrect');

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: process.env.TOKEN_EXPIRATION as string }
  );

  return { user, token };
};
