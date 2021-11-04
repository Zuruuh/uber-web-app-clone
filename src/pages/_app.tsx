import { AuthProvider } from '../hooks/auth/useAuth';

import '../styles/fonts/UberMove.css';
import 'tailwindcss/tailwind.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
