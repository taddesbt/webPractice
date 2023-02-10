import React, { useMemo, useState } from "react";
import { useEffect } from "react";

import './quizApp.css'
import { questionsT, Quiz } from './TestDat';


const Nquiz = new Quiz(questionsT)



const TestQ = () => {


    const questionIndexT = Nquiz.getIndex();
    const score = Nquiz.score;
    const questions = Nquiz.getQuestions();
    const guess = Nquiz.guess

    const [questionIndex, setQuestionIndex] = useState(questionIndexT)



    const handleClick = (e) => {
        e.preventDefault();

        guess(e.target.textContent);
        setQuestionIndex(prev=> prev + 1);

    }


    return (<div className="container">
        <div className="quiz-box">

            {(!!Nquiz) &&

                (!Nquiz.isEnded()) ?
                (<div id="quiz">
                    <h1>JavaScript Quiz App</h1>
                    <div className="quiz-header">
                        <p id="progress">Question {questionIndex + 1} of {questions.length}</p>
                        <p id="count-down"></p>
                    </div>
                    {/* <p id="question">{questions[questionIndex].question}</p> */}

                    <div className="buttons">
                        <button onClick={(e) => handleClick(e)} className="btn" id="btn0">A. <span id="choice0">{questions[questionIndex].choices[0]}</span></button>
                        <button onClick={(e) => handleClick(e)} className="btn" id="btn1">B. <span id="choice1">{questions[questionIndex].choices[1]}</span></button>
                        <button onClick={(e) => handleClick(e)} className="btn" id="btn2">C. <span id="choice2">{questions[questionIndex].choices[2]}</span></button>
                        <button onClick={(e) => handleClick(e)} className="btn" id="btn3">D. <span id="choice3">{questions[questionIndex].choices[3]}</span></button>
                    </div>

                    <hr />
                    <footer>
                        <p>ZinoTrust Tutorials</p>

                    </footer>
                </div>) :

                (<>
                    <h1>Quiz Completed</h1>
                    <h2 id='score'> Your scored: {score} of {questions.length}</h2>
                    <div className="quiz-repeat">
                        <a href="index.html">Take Quiz Again</a>
                    </div></>)





            }


        </div>
    </div>



    )

}

export default TestQ;