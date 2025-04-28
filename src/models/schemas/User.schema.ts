import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/User.interface';

const UserSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['super_admin', 'admin', 'organisation', 'beneficiaire'],
      required: true,
    },
    phone: { type: String },
    otp: { type: String },
    otpExpires: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.model<IUser>('User', UserSchema);
