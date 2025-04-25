export interface IUser {
    _id?: string;
    email: string;
    password: string;
    role: 'super_admin' | 'admin' | 'organisation' | 'beneficiaire';
    nom?: string;
    prenom?: string;
    telephone?: string;
    organisationId?: string; // Pour les bénéficiaires
    isActive: boolean;
    isVerified: boolean;
    verificationCode?: string; // Code à 6 chiffres
    verificationCodeExpires?: Date;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
    createdAt?: Date;
    updatedAt?: Date;
  }
  