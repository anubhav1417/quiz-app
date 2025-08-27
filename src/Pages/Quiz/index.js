import React,{useEffect, useState} from 'react';
import { CircularProgress } from '@material-ui/core';
import './Quize.css';
import Question from '../../Components/Question';

const Quiz = ({
    name,
    questions,
    score, 
    setScore,
    setQuestions
    }) => {
     const [options, setOptions] = useState();
     const [currQues, setCurrQues] = useState(0);    

     const haldleShuffle=(options)=>{
        return options.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        setOptions(questions && haldleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
        ])
        );
    }, [questions, currQues]);

    console.log(questions);

    return (
        <div className="quiz">
            <span className="subtitle">Welcome,{name}</span>
            {
                questions ? ( <>
                    <div className="quizInfo">
                        <span>{questions[currQues].category}</span>
                        <span>Score: {score}</span>
                    </div>
                    <Question 
                    currQues={currQues}
                    setCurrQues={setCurrQues}
                    questions={questions}
                    options={options}
                    correct={questions[currQues]?.correct_answer}
                    score={score}
                    setScore={setScore}
                    />
                    </>
                ): ( 
                  <CircularProgress 
                  style={{
                      margin:100, 
                      color:"inherit"
                    }} 
                 />
                )
            }   
        </div>
    )
}

export default Quiz
