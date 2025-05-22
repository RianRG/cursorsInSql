import { Transform } from "node:stream";
import { sql } from "./db/client.ts";
import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";

const prompt = sql`
  SELECT * FROM products
`

const cursor = prompt.cursor(500);

const transformStream = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback){

    for(const item of chunk){
      this.push(JSON.stringify(item).concat('\n'));
    }

    callback();
  }
})


await pipeline(
  cursor,
  transformStream,
  createWriteStream('./export.jsonl')
)
await sql.end();
console.log('ok')