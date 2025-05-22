import { sql } from "./client.ts";

await sql`
  CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  )
`

for(let k=0; k<10_000; ++k){
  Array.from({ length: 20 }).forEach(async (cont, idx) =>{
    let productName = `Product ${k}, ${idx}`;
    await sql`
      INSERT INTO products (name)
      VALUES (${productName})
    `
  })
}

const products = await sql`
  SELECT * FROM products
`

console.log(products);

await sql.end();