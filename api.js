const express = require('express');
const app = express();
const port = 3003;

const now = new Date;

//DIA DA SEMANA
const daysOfWeek = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]
const day = daysOfWeek[now.getDay()];

//HORA DO DIA
const hour =  now.getHours();

app.get('/', (req, res) => {
    res.send("Funcionando")
})
app.post('/dia-hora', (req, res) => {
    res.status(202).json({ dia: day, hora: hour })
})

 app.listen(port, () => console.log('Rodando na no localhost:3000'));