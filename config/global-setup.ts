import dotenv from 'dotenv';

export default function globalSetup() {
  dotenv.config({ path: './config/.env' });

  const requiredEnvVars = ['UI_BASE_URL', 'STANDARD_USER', 'PASSWORD'];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  }
}
