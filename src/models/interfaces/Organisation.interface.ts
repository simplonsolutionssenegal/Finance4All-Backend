import { Types } from 'mongoose';
import { IUser } from './User.interface'; // assure-toi que ce fichier existe

export interface IOrganisation {
  _id?: string;
  nom: string;
  description?: string;
  logoUrl?: string;
  siteWeb?: string;
  email?: string;
  telephone?: string;
  adresse?: string;
  createdBy: Types.ObjectId | IUser;
  isActive: boolean;
  isValidated: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
