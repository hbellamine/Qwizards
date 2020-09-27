import React,{useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import './Container.css';
import NavBar from '../../Components/HomeScreen/NavBar/NavBar';
import Searchbar from '../../Components/HomeScreen/Searchbar/Searchbar';
import ShowList from '../../Components/HomeScreen/ShowList'
import Banner from '../../Components/CreateQuizzScreen/Banner/Banner'
import firebase from '../../../src/base'




const Home = props => {

    const [Bookslist,setBookslist]=useState(false)
    const [AllBooksList,setAllBooksList] = useState("")
    
    const [Idquizzes,setIdquizzes]=useState("")
    const [Quizzes,setQuizzes]=useState("")
 
    useEffect(()=> {
        const fetchData = async () => {
            const db = firebase.firestore()
            const bookslisting= await db.collection("bookslist").get()
            setBookslist(Object.values((bookslisting.docs.map(doc => doc.data()))))
            setAllBooksList(Object.values((bookslisting.docs.map(doc => doc.data()))))

            const quizlisting= await db.collection("quiz").get()
            setIdquizzes((quizlisting.docs.map(doc => doc.id)))
            setQuizzes(quizlisting.docs.map(doc => doc.data()))
            
        } 
        
        fetchData()
      
        
    },[])

    



    
    const bannertext = (<div><h1>
        Get the <strong>most </strong><strong>out of your reading!</strong></h1></div>)
        
    return(
        
        <div>
                <NavBar /> 
                <Banner title={bannertext}/>
            {AllBooksList && <Searchbar setBookslist={setBookslist} books={AllBooksList}/> }
            {Bookslist && Idquizzes && Quizzes && <ShowList Quizzes= {Quizzes} Idquizzes={Idquizzes} AllBooks = {Bookslist} List={Bookslist.slice(0,50)} />}
                        
        </div>
   
    )}




export default withRouter(Home); 


