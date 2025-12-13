import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.653215b860f248c5be0e971fce03a1dc',
  appName: 'Raha',
  webDir: 'dist',
  server: {
    url: 'https://653215b8-60f2-48c5-be0e-971fce03a1dc.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'automatic'
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
