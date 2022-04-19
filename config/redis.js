require('dotenv').config();
const { createClient } = require('redis');

const redis = async (key, value) => {
    const client = createClient({
        port: process.env.REDPORT,
    });
    
    await client.connect();
    await client.set(key, JSON.stringify(value), 'EX', 300);

    const res = await client.get(key);
    console.log(res);
};

module.exports = { redis };