
const pedacos = ['braçoE', 'braçoD', 'pernaE',
 'pernaD', 'tronco', 'cabeça', 'dedinho'];


// acessar elemtos do array
console.log(pedacos[0]);
console.log('tamanho do array:', pedacos.length);
//alterar um elemento do array
pedacos[6] = 'mindinho';

//remover um elemento
pedacos.splice(2,2) //tirando a perna

//percorrer todos os elementos
for(i=0; i<pedacos.length; i++){
    console.log(pedacos[i])
}


