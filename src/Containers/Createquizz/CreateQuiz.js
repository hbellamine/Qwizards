import React,{useState, useEffect} from 'react';
import Layout from '../../Components/CreateQuizzScreen/Layout'
import Banner from '../../Components/CreateQuizzScreen/Banner/Banner'
import NavBar from '../../Components/HomeScreen/NavBar/NavBar'



const CreateQuiz = props => {

const [ChangedBook,setChangedBook]=useState(0)
 const [Book,setBook]=useState({})

    useEffect(() => {
        
        const query = new URLSearchParams(props.location.search)
        for (let param of query.entries()){
            const bookid = param[0]
            if (props.location.state.books) 
                { const book = props.location.state.books.filter(elem=>
                         (elem.id == bookid))
                         setBook(book[0])
                         setChangedBook(1)
                }
                else {

                    setBook(props.location.state.book)
                    setChangedBook(1)

                }
                         
                //console.log(props.location)                           
        }
    },[ChangedBook]);
   
return (
    <div>
        <NavBar />
        <Banner title={Book.Title} />
        <Layout id={Book.id} title={Book.Title} image={Book.src} summary={Book.summary} />
    </div>
)
}

export default CreateQuiz