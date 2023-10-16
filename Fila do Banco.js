// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let N = 0;
let clientes = 0;
let cof = 0;

N = parseInt(gets());

let filas = Array(N);
let cad = Array(N);
let ordem = Array(N);

//implemente aqui o seu código
  while (clientes < N){
    id = gets();
    line = gets();
    
    filas[clientes] = line.split(" ");
    cad[clientes] = line.split(" ");
    
    clientes++;
  };

cad.forEach(i => i.sort((a, b) => b - a));

while (cof < N) {
  ordem[cof] = cad[cof].filter((i, d) => d === filas[cof].indexOf(i));
  
  cof++
};

ordem.forEach(i => console.log(i.length));