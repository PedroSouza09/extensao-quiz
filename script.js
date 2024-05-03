const perguntas = [
  {
    pergunta: 'Qual é o objrtivo principal do inglês intrumental?',
    respostas: [
      'A) Desenvolver habilidades de conversação em inglês',
      'B) Aprender a gramática inglesa de forma avançada',
      'C) Capacitar os alunos a compreender texto em inglês'
    ],
    correta: 1
  },
  {
    pergunta:
      'Qual das afirmações está correta sobre inclusão digital no ensino fundamental?',
    respostas: [
      'A) Uso de computadores por professores',
      'B) jogar videogame após as aulas',
      'C) garantir acesso e habilidades em tecnologia para aprendizado e comunicação'
    ],
    correta: 2
  },
  {
    pergunta:
      'Qual é a medida de dispersão que representa a diferença que representa a diferença entre o maior e o menor valor em um conjunto de dados ?',
    respostas: ['A) média', 'B) amplitude', 'C) mediana'],
    correta: 2
  },
  {
    pergunta:
      'Qual é o tipo de gráfico usado para representar a relação entre duas variáveis numéricas?',
    respostas: [
      'A) histograma',
      'B) gráfico de pizza',
      'C) gráfico de dispersão'
    ],
    correta: 1
  },
  {
    pergunta:
      'Qual das seguintes afirmações está correta sobre inclusão digital no novel de ensino fundamental?',
    respostas: [
      'A) ensino exclusivo de programação de computadores',
      'B) uso de dispositivos digitais apenas durante as aulas de educação física',
      'C) garantir que todos os alunos tenham acesso a tecnologia par aprendizado e comunicação'
    ],
    correta: 2
  }
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute(
      'name',
      'pergunta-' + perguntas.indexOf(item)
    )
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = event => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
