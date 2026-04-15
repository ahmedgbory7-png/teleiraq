import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.teleiraq.app',
  appName: 'تليعراق',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
