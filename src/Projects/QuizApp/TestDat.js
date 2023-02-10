
// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer = (choice) => {
        return this.answer === choice;
    }
}



const questionsT = [
    new Question(
        "Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"
    ),
    new Question(
        "Cascading Style sheet stands for?", ["HTML", "JQuery", "CSS", "XML"], "CSS"
    ),
    new Question(
        "Which is a JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"
    ),
    new Question(
        "Which is a backend language?", ["PHP", "HTML", "React", "All"], "PHP"
    ),
    new Question(
        "Which is best for Artificial intelligence?", ["React", "Laravel", "Python", "Sass"], "Python"
    )
];

// CREATE A QUIZ CLASS
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {

        return this.questions[this.questionIndex];

        // return this.questions[this.getIndex()]
    }

    getIndex() {
        return this.questionIndex
    }

  

    getScore() {

        return this.score;
    }

    guess = (answer) => {
        console.log(this.getQuestionIndex())

        if (this.getQuestionIndex().isCorrectAnswer(answer)) {

            this.score++;
            console.log(this.score)
        }

        this.questionIndex++;
     
    }

    getQuestions() {
        return this.questions
    }





    isEnded() {
        // console.log('index is ', this.questionIndex, 'question length is ', this.questions.length)
        return this.questionIndex === this.questions.length;
    }
}




export { questionsT, Quiz };