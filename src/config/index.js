import dotenv from 'dotenv-safe';

dotenv.config();

const {
  HOST,
  PORT,
  DB_URL,
} = process.env;

export {
  HOST,
  PORT,
  DB_URL,
}
