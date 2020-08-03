const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient({
    host: 'redis-server', // we can refer to host here by the service name we assigned at docker-compose
    port: 6379 // default port redis works on
});
client.set('visits', 0);

const PORT_NUMBER = 8080


app.get('/', (req, res) => {
    console.log("received a request");
    
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });

    console.log("just served the request.\n--------------------")
});

app.listen(PORT_NUMBER, () => {
    console.log('listening on ', PORT_NUMBER.toString());
});
