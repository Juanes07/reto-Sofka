var prompt = require('prompt') // importamos una libreria llamada prompt que nos ayudara a interactuar con el usuario por consola

class Category {
    constructor(id, name, points) {
        this.id = id 
        this.name = name 
        this.points = points
    }
}

class Question extends Category {
    constructor(id, description, category, answers) {
        super(id, description, category, answers)

        this.id = id 
        this.description = description 
        this.category = category
        this.answers = answers
    }

    getDescription() {
        return this.description
    }

    getPoints() {
        return this.category.points
    }

    getAnswers() {
        return this.answers
    }
}

class Answer {
    constructor(id, description, isTrue) {
        this.id = id 
        this.description = description 
        this.isTrue = isTrue
    }

    getDescription() {
        return this.description
    }

    getIsTrue () {
        return this.isTrue
    }
}

const categories = []
const questions = []
const pointsByCategory = 1000
const amountQuestionsByCategory = 5

function setup (amountCategories) {
    for(let i=1; i<=amountCategories; i++) {
        const category = new Category(i, `Categoria${i}`, i*pointsByCategory)
        categories.push(category)

        createQuestions(amountQuestionsByCategory, category)

    }
}

function createQuestions (amount, category) {
    for(let i=1; i<=amount; i++) {
        const answers = []

        for (let j=1; j<=4; j++) {
            answers.push(new Answer(i, `Answer${j}`, j === 1 ? true : false))
        }

        questions.push(new Question(i, `Question${category.id}${i}`, category, answers))
    }
}

async function run () {
    let pointsTotal = 0
    let endGame = false

    // recorer todas categorias

    for (let category of categories) { 
        // preguntamos si el juego ya acabo
        if (!endGame) {
            // buscar las preguntas de la categoria en la estamos y la pasamos a un array
            const questionsCategory = questions.filter(question => question.category.id === category.id)

            // seleccionamos un pregunta aleatoria de esa categoria
            const random = Math.floor(Math.random() * questionsCategory.length) // sacamos un numero random dependiendo las posiciones de las preguntas de esa categoria
            const questionSelected = questionsCategory[random]
            
            // pedimos las respuestas de la pregunta seleccionada.
            const answers = questionSelected.getAnswers()

            // Mostramos la pregunta
            console.log('PREGUNTA: ', questionSelected.getDescription())

            // Mostrar las respuestas
            for (let [i, answer] of answers.entries()) {
                console.log(`[${i+1}]. ${answer.getDescription()}`)
            }

            prompt.start()

            const schema = {
                description: 'Por favor ingresa el numero de tu respuesta aqui'
            }

            const promptAnswer = await prompt.get(schema)

            const userAnswer = parseInt(promptAnswer.question)


            // validamos si es el correcto
            if (answers[userAnswer-1].getIsTrue()) {

                // si es correcto seguimos flujo
                pointsTotal += questionSelected.getPoints()
                
                // revisamos si es la ultma categoria para saber si se termino el juego
                if (category.id === categories.length) {
                    console.log(` GANASTE!!! TUS PUNTOS TOTALES FUERON = ${pointsTotal}`)
                }
            } else {
                // si no terminamos el juego
                console.log('Es incorrecto, tu juego termino :(')
                console.log('TUS PUNTOS TOTALES FUERON = ', pointsTotal)
                endGame = true
            }
        } else {
            return
        }
    }
}

setup(5)
run()
