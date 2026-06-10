const http = require('http');

const alunos = [
  { id: 1, nome: 'Maria', idade: 18 },
  { id: 2, nome: 'João', idade: 20 },
  { id: 3, nome: 'Ana', idade: 19 }
];

const cursos = [
  { id: 1, curso: 'Desenvolvimento Web' },
  { id: 2, curso: 'Banco de Dados' },
  { id: 3, curso: 'Redes de Computadores' }
];

const professor = {
  nome: 'Carlos',
  disciplina: 'Desenvolvimento Web'
};

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url === '/') {
    res.end(JSON.stringify({ mensagem: 'Bem-vindo à API da Escola' }));

  } else if (req.url === '/alunos') {
    res.end(JSON.stringify(alunos));

  } else if (req.url === '/cursos') {
    res.end(JSON.stringify(cursos));

  } else if (req.url === '/professor') {
    res.end(JSON.stringify(professor));

  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});