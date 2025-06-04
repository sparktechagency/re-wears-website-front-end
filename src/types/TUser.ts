export type TStripeAccountInfo = {
  status: string;
  stripeAccountId: string;
  externalAccountId: string;
  currency: string;
};

export type TAuthenticationProps = {
  isResetPassword: boolean;
  oneTimeCode: number;
  expireAt: Date;
};

export type TUser = {
  _id: string;
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  image: string;
  location: string;
  gender: string;
  dob: Date;
  isVacation: boolean;
  isVerified: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
  authentication?: TAuthenticationProps;
  accountInformation?: TStripeAccountInfo;
  appId?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
