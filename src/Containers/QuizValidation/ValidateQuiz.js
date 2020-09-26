import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../Components/CreateQuizzScreen/Layout'
import Banner from '../../Components/CreateQuizzScreen/Banner/Banner'
import NavBar from '../../Components/HomeScreen/NavBar/NavBar'
import TakeQuizComponent from '../../Components/TakeQuizScreen/TakeQuizComponent'
import firebase from '../../base'
import { AuthContext } from "../../Auth"
import {Spinner} from 'react-bootstrap'
import { Button } from '@material-ui/core';



const TakeQuiz = props => {

    const [ChangedBook, setChangedBook] = useState(0)
    const [Book, setBook] = useState({})
    const [BookId, setBookId] = useState()
    const [SelectedQuiz, setSelectedQuiz] = useState()
    const [QuizSelected, setQuizSelected] = useState()


    useEffect(() => {

        const query = new URLSearchParams(props.location.search)
        for (let param of query.entries()) {
            const bookid = param[0]
            const book = props.location.state.books.filter(elem =>
                (elem.id == bookid))
            setBook(book[0])
            setBookId(bookid)

            const fetchData = async () => {
                const db = firebase.firestore()
                const quizselected = await db.collection("quiztovalidate").doc(bookid).get()
                setQuizSelected(quizselected)
                setSelectedQuiz(quizselected.data()["listequestions"])
            }


            fetchData()
        }

    }, []);

    const handlesubmit = () => {
        const db = firebase.firestore()
                db.collection("quiz").doc(BookId).set(QuizSelected.data())
                db.collection("quiztovalidate").doc(BookId).delete()
                alert("Done")
                props.history.push('/adminpanel')

    }


    const handledelete = () => {
        const db = firebase.firestore()
                db.collection("quiztovalidate").doc(BookId).delete()
                alert("The quiz has been refused and deleted")
                props.history.push('/adminpanel')

    }

    const quiz = () => {
        if (props.location.state.quizz !== undefined) {
            return (props.location.state.quizz)
        }
        else {
            return ("")
        }
    }

    const { currentUser } = useContext(AuthContext);


    if (!SelectedQuiz) {
        return (
            <div style={{ position: 'fixed',
                top: "50%",
                left: "50%",
                }}>
                    <Button variant="primary" disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    Loading...
                </Button>
        </div>
      )
    } else { 
        return (
        <div>
            <NavBar />
            <Banner title={Book.Title} />

            {SelectedQuiz.map((item, i) => {
               return( <div key = {i}>
                        <h1>question {i+1} : {item.question}</h1>
                            <p>Anwser 1 : {item["answer1"]}</p>
                            <p>Anwser 2 : {item["answer2"]}</p>
                            <p>Anwser 3 : {item["answer3"]}</p>
                            <p>Anwser 4 : {item["answer4"]}</p>
                        <h2>Right Answer : {item["rightanswer"]}</h2>
            </div>)

            })}

                <Button onClick = {handlesubmit} variant="contained" size='small' color='primary'>
                                      Validate the quiz
                </Button>
                <Button onClick = {handledelete} variant="contained" size='small' color='secondary'>
                                      Delete the quiz
                </Button>

        </div>
                                      
                                     
    ) }
}

export default TakeQuiz