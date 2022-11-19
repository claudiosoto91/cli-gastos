
const fs = require('fs');

console.log('CLI de gastos | Nucba');

fs.writeFile('./data/gastos.txt', 'Generando .txt de gastos', (error, data) => {
    if (error) console.log(error);
    console.log(data);
});
