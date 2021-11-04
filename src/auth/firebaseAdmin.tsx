import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { config } from 'dotenv';
import type { ServiceAccount } from 'firebase-admin/lib/app/credential';
config();

const {
  type,
  project_id,
  private_key_id,
  private_key,
  client_email,
  client_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
  client_x509_cert_url,
} = process.env;

const account = {
  type,
  project_id,
  private_key_id,
  private_key,
  client_email,
  client_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
  client_x509_cert_url,
} as ServiceAccount;

export const authenticate = (token: string) => {
  if (!getApps().length) {
    initializeApp({
      credential: cert(account),
      databaseURL: 'https://zuruh-uber-webapp.firebaseio.com',
    });
  }

  return getAuth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      return decodedToken.uid;
    })
    .catch((error) => {
      throw error;
    });
};
