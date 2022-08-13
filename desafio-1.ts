const funcionario = {
    codigo: 12,
    nome: 'André'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 12,
    nome: 'André'
}

// Respostas 3 e 4
interface Funcionario {  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 12;
funcionarioObj.nome = 'André';

const funcionarioObj2: Funcionario = {
    codigo: 12,
    nome: 'André'
}