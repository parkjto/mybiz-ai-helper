import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.ae3db1c5b114440089f6823812d4cc53',
  appName: 'mybiz-ai-helper',
  webDir: 'dist',
  server: {
    url: 'https://ae3db1c5-b114-4400-89f6-823812d4cc53.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;