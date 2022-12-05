
const fs = require('fs');
let prompt = require('prompt');

console.log('CLI de gastos | Nucba');

const listaGastos = [150,200,400,660,100]

const sumarGastos = (listaGastos) =>{
  fs.readFile('./data/gastos.txt', (error, data) =>{

    if (error) console.log(error);


    let gastos = '';
    let suma = 0;
      for (let i = 0; i< listaGastos.length ; i++){
        suma = suma + listaGastos[i];
        gastos += `\n Gasto Número ${i+1} = ${listaGastos[i]} \n Gastos Actualizados: ${suma}`;
        fs.writeFile('./data/gastos.txt', gastos ,(error, data) => {
     })
      }
      console.log(data.toString());
});
}
sumarGastos(listaGastos);







