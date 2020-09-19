import React,{useState, useEffect,useContext} from 'react';
import Layout from '../../Components/CreateQuizzScreen/Layout'
import Banner from '../../Components/CreateQuizzScreen/Banner/Banner'
import NavBar from '../../Components/HomeScreen/NavBar/NavBar'
import TakeQuizComponent from '../../Components/TakeQuizScreen/TakeQuizComponent'
import firebase from '../../base'
import {AuthContext} from "../../Auth"



const TakeQuiz = props => {

const [ChangedBook,setChangedBook]=useState(0)
 const [Book,setBook]=useState({})
 const [BookId, setBookId] = useState()
 const [SelectedQuiz,setSelectedQuiz]= useState()


    useEffect(() => {
        
        const query = new URLSearchParams(props.location.search)
        for (let param of query.entries()){
            const bookid = param[0]
            const book = props.location.state.books.filter(elem=>
                         (elem.id == bookid))
                         setBook(book[0])
                         setBookId(bookid)

        const fetchData = async () => {
        const db = firebase.firestore()    
        const quizselected= await db.collection("quiz").doc(bookid).get()
        setSelectedQuiz(quizselected.data()["listequestions"])
        }
    
                                         
        fetchData()
    }

    },[]);

    const quiz = ()=>{
        if (props.location.state.quizz !== undefined) {
            return(props.location.state.quizz)}
             else {
                return("")
            }
        }
        
        const {currentUser} = useContext(AuthContext);

    


return (
    <div>
        <NavBar />
        <Banner title={Book.Title} />
      
        { BookId && SelectedQuiz && <TakeQuizComponent  book= {Book} quiz = {SelectedQuiz } />  }
        
    </div>
)
}

export default TakeQuiz