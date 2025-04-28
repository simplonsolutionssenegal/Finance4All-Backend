import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'super_admin' | 'admin' | 'organisation' | 'beneficiaire';
  phone?: string;
  otp?: string;
  otpExpires?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
