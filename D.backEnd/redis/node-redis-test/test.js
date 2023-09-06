import { createClient } from 'redis';

const client = createClient({
    socket: {
        host: 'localhost',
        port: 6379
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

const value = await client.keys('*');

console.log(value);

await client.disconnect();
