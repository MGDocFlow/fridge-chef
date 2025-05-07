import dotenv from 'dotenv';
dotenv.config();

const ENV = process.env.NODE_ENV || 'test';

const CONFIGS = {
  production: {
    PORT: 8080,
    BASE_URL: 'https://production.example.com',
  },
  test: {
    PORT: 8081,
    BASE_URL: 'http://localhost:8081',
  },
  development: {
    PORT: 3000,
    BASE_URL: 'http://localhost:3000',
  },
  staging: {
    PORT: 4000,
    BASE_URL: 'https://staging.example.com',
  },
};

export function getConfig(env = ENV) {
  return CONFIGS[env] || CONFIGS['development'];
}

export const CONFIG = CONFIGS[ENV];