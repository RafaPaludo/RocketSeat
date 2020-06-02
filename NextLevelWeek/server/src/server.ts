import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Lista de usuários');

    response.json([
        'Rafael',
        'Kevinzao',
        'Suzileide',
        'Adgao'
    ]);
});

app.listen(3333);