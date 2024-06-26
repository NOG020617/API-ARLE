import { createConnection } from 'typeorm';

export const connectDB = async () => {
  try {
    await createConnection();
    console.log('MySQL conectado');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
