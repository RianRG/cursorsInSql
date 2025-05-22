# Export big data volume to a file

It is a simple example about extracting a big volume of data from a database (About 200.000 registries).

## Tecnologies
  * Docker (we're using postgres for database)
  * Typescript
  * NodeJS Streams/Promises

## Approach
Instead of using "appendFile" method from node:f, our approach uses the Cursors concept from sql to define 
a set of data rows (It is so important when we have a large amount of data)

It is important to say that the cursor can only reference one row at a time (On this case, we're catching 500 registries per time).

If we used appendFile, we would manipulate the large amount of data just one time and wait a lot.
But with cursor, we can perform actions on each line individually :D

Thank you <3