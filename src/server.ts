import express from 'express'
const app = express();
app.use(express.json());
app.get('/vanya', (req, res) => {
    return res.status(200).json("Vanya");
});
app.get('/nikita',  (req, res) => {
    console.log(5);
    return res.status(200).json("nikita");
});
app.post('/name',  (req, res) => {
    const {name} = req.body;
    return res.status(200).json(name);
});
app.listen('7070', () =>console.log('Server at 7070'));
