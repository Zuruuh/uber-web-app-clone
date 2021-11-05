import type { UserCredential } from 'firebase/auth';

export interface AuthInterface {
  email: string;
  password: string;
}

export interface RegisterInterface extends AuthInterface {
  repeatPassword: string;
}

export interface AuthError {
  field: string;
  message: string;
}

export interface AuthResponse {
  error?: AuthError;
  credentials?: UserCredential;
}

export interface Car {
  imgUrl: string;
  service: string;
  multiplier: number;
}
