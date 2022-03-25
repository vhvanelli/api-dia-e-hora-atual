const express = require('express');
const app = express();
const PORT = process.env.PORT || 8877;

const now = new Date;
let horarioDeAtendimento;

//DIA DA SEMANA
const daysOfWeek = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]
const day = daysOfWeek[now.getDay()];

//HORA DO DIA
const hour =  now.getHours() - 3;

//VALIDAÇÃO DE DE HORARIO DE ATENDIMENTO
if(day != "Domingo" && hour >= 8 && hour <= 18){
    horarioDeAtendimento = true;
} else {
    horarioDeAtendimento = false;
}


app.get('/', (req, res) => {
    res.send("Funcionando");
})
app.post('/dia-hora', (req, res) => {
    res.status(202).json({ dia: day, hora: hour, horarioAtendimento : horarioDeAtendimento });
})

 app.listen(PORT);