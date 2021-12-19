let rounds = 1
let pointsTotal = 0
let endGame = false

const categories = [
	{
  	id: 1,
  	name: 'animals',
    points: 100
  },
  {
  	id: 2,
  	name: 'people',
    points: 200
  },
  {
  	id: 3,
  	name: 'maths',
    points: 300
  }
]

const questions = [
  {
    description: 'cuanto es 2x2?',
    category: 1,
    answers: [
			{
        description: '4',
        isTrue: true
      },
      {
        description: '2',
        isTrue: false
      },
      {
        description: '2',
        isTrue: false
      },
      {
        description: '6',
        isTrue: false
      }
    ]
  },
  {
    description: 'que son los numeros primos?',
    category: 1,
    answers: [
			{
        description: 'son primos de los impares',
        isTrue: true
      },
      {
        description: 'yo que se',
        isTrue: false
      },
      {
        description: 'preguntale a tu profesor',
        isTrue: false
      },
      {
        description: '12',
        isTrue: false
      }
    ]
  },
  {
    description: 'cuanto es 3x3?',
    category: 2,
    answers: [
			{
        description: '9',
        isTrue: true
      },
      {
        description: '5',
        isTrue: false
      },
      {
        description: '3',
        isTrue: false
      },
      {
        description: '8',
        isTrue: false
      }
    ]
  },
  {
    description: 'cuanto es 1x1?',
    category: 3,
    answers: [
			{
        description: '4',
        isTrue: false
      },
      {
        description: '2',
        isTrue: false
      },
      {
        description: '1',
        isTrue: true
      },
      {
        description: '6',
        isTrue: false
      }
    ]
  }
]

for (let category of categories) {
	if (!endGame) {
    console.log('ESTOY EN LA CATEGORIA', category.id)

    // buscar las preguntas de la categoria en la estamos y la pasamos a un array
    const questionCategory = questions.filter(question => question.category === category.id)

    console.log('questionCategory', questionCategory)


    // seleccionamos un pregunta aleatoria
    const random = Math.floor(Math.random() * questionCategory.length);
    const questionSelected = questionCategory[random]
    console.log('questionSelected', questionSelected)

    // sacamos las respuestas
    const answers = questionSelected.answers
    console.log('answers', answers)

    // mostrarlas
    console.log('PREGUNTA: ', questionSelected.description)

     let text =  `${questionSelected.description} \n \n`

    for (let [i, answer] of answers.entries()) {
      console.log(`${i+1}. ${answer.description}`)

      text += `${i+1}. ${answer.description} \n`
    }

    // creamos un input para que nos diga cual es el correcto

    const answerUser = parseInt(window.prompt(text))
    console.log('answerUser: ', answerUser)


    // validamos si es el correcto
    if (answers[answerUser-1].isTrue) {
      // si es correcto seguimos flujo
      pointsTotal += category.points
      
      if (category.id === categories.length) {
        alert(`TUS PUNTOS TOTALES FUERON = ${pointsTotal}`)
      }
    } else {
      // si no terminamos el juego
      console.log('TUS PUNTOS TOTALES FUERON = ', pointsTotal)
      alert('Es incorrecto, termina el juego')
      endGame = true
    }
  } else {
  	console.log('TUS PUNTOS TOTALES FUERON = ', pointsTotal)
  }
}

