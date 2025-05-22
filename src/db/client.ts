import postgres from 'postgres'

if(!process.env.POSTGRES_URL) throw new Error('Environment variable not set!')

export const sql = postgres(process.env.POSTGRES_URL.toString());