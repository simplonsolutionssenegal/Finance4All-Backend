import mongoose, { Schema, Document } from 'mongoose';
import { IOrganisation } from '../interfaces/Organisation.interface';

export interface IOrganisationDocument extends Omit<IOrganisation, '_id'>, Document {}

const OrganisationSchema: Schema<IOrganisationDocument> = new Schema({
  nom: { type: String, required: true, trim: true },
  description: { type: String },
  logoUrl: { type: String },
  siteWeb: { type: String },
  email: { type: String },
  telephone: { type: String },
  adresse: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isActive: { type: Boolean, default: true },
  isValidated: { type: Boolean, default: false },
}, {
  timestamps: true
});

export const OrganisationModel = mongoose.model<IOrganisationDocument>('Organisation', OrganisationSchema);
