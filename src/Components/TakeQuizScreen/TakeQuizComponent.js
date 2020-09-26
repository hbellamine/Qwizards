import React,{useState,Component,Fragment} from 'react'
import {Helmet} from 'react-helmet';
import './Css/TakeQuizComponent.scss'
import FinalResult from './FinalResult'

const TakeQuizComponent = props => {
    const [Counter,SetCounter] = useState(0)
    const [Points, SetPoints] = useState(0)
    const [Last,SetLast] = useState(true)
    const [RightAnswers, SetRightAnswers] = useState([])
    const [WrongAnswers, SetWrongAnswers] = useState([])
    const [WrongUserAnswers,SetWrongUserAnswers]=useState([])


    const IncreaCount = () => {
        SetCounter(Counter+1)
    }

    const numberofquestions = props.quiz.length
    const onClickHandle = (event) => {

       
        const right = "answer"+props.quiz[Counter].rightanswer
        if (event.target.textContent === props.quiz[Counter][right]) {
            SetRightAnswers([...RightAnswers,props.quiz[Counter]])
         
            SetPoints(Points+1)
            SetCounter(Counter+1)
            if (Counter == numberofquestions-1) {
                SetLast(false)
            }

        } else { 
            SetCounter(Counter+1)
            SetWrongAnswers([...WrongAnswers,props.quiz[Counter]])
            SetWrongUserAnswers([...WrongUserAnswers,event.target.textContent])
            if (Counter == numberofquestions-1) {
                SetLast(false)
            }

        }

        
    }
    
 


    if (Last) { return(
         <Fragment>
            <Helmet><title>Quizz</title></Helmet>
            <div className ="questions">
                <h2>Quizz mode</h2>
                <div>
                    <p>
        <span className= "left">{Counter+1} of {numberofquestions}</span>
                        <span className="right">-</span>
                        <span className="mdi mdi-clock-outline-mdi-24px"></span>
                    </p>
                </div>
                <h5>{props.quiz[Counter].question}</h5>
                <div className="options-container">
                    <p onClick = {onClickHandle} target={props.quiz[Counter].answer1} className ='option'>{props.quiz[Counter].answer1}</p>
                    <p onClick = {onClickHandle} className="option">{props.quiz[Counter].answer2}</p>
                </div>
                <div className="options-container">
                <p onClick = {onClickHandle} className ='option'>{props.quiz[Counter].answer3}</p>
                    <p onClick = {onClickHandle} className="option">{props.quiz[Counter].answer4}</p>
                </div>
 
            </div>
        </Fragment> 

        ) } 
    else {
        return(
            <FinalResult CurrentUser = {props.currentUser} Book = {props.book} Result ={(Points/numberofquestions)*100} Rightanswers = {RightAnswers} Wronganswers = {WrongAnswers} WrongUserAnswers = {WrongUserAnswers} />

        )
    }
}

export default TakeQuizComponent