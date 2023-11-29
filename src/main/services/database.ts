import { Pool } from 'pg'

export const pool = new Pool({
  connectionString: process.env.ICB_DATABASE_URL
})
