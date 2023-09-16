import pg, { ClientConfig } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// nao conseguiu inferir corretamente o tipo; 
// considerou como se fosse um tipo novo;
// solução -> tipagem explicita
const configDatabase: ClientConfig = {
  connectionString: process.env.DATABASE_URL
};

if (process.env.NODE_ENV === "production") configDatabase.ssl = true;

export const db = new Pool(configDatabase);