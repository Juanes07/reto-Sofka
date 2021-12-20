class Category {
    constructor(id, name, points) {
        this.id = id; 
        this.name = name; 
        this.points = points;
    }
}


class Question extends Category {
    constructor(id, description, category, answers) {
        super(id, description, category, answers);

        this.id = id; 
        this.description = description;
        this.category = category;
        this.answers = answers;
    }

    getPoints() {
        return this.category.points;
    }
}


class Answer {
    constructor(id, description, isTrue) {
        this.id = id; 
        this.description = description; 
        this.isTrue = isTrue;
    }
}

const categories = [];
const questions = [];
const pointsByCategory = 1000;
const amountQuestionsByCategory = 5;

function setup (amountCategories) {
    for(let i=1; i<=amountCategories; i++) {
        const category = new Category(i, `Categoria${i}`, i*pointsByCategory);
        categories.push(category);
        
        console.log('categories', categories);

        createQuestions(amountQuestionsByCategory, category);

    }
}

function createQuestions (amount, category) {
    for(let i=1; i<=amount; i++) {
        const answers = [];

        for (let j=1; j<=4; j++) {
            answers.push(new Answer(i, `Answer${j}`, j === 1 ? true : false));
        }

        questions.push(new Question(i, `Question${category.id}${i}`, category, answers));
        console.log('questions', questions);
    }
}

function run () {
}

setup(5);
run();