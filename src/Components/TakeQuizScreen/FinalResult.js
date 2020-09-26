import React,{useContext,useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import firebase from '../../base'
import {AuthContext} from "../../Auth";
import {Certif} from "../../Containers/CertifCont/Certif.png"
import CommentBox from "../CommentBox/CommentBox"
import './Css/TakeQuizComponent.scss'
import {Button} from 'react-bootstrap'


const FinalResult = props => {

    const [FirstName,SetFirstName] = useState()
    const [LastName,SetLastName]=useState()

    const {currentUser} = useContext(AuthContext);

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

    useEffect(()=> {
        const fetchData = async () => {
            const db = firebase.firestore()
            const firstlast= await db.collection("users").doc(currentUser.uid).collection("firstlast").doc("firstlast").get()
            SetFirstName(firstlast.data()["FirstName"])
            SetLastName(firstlast.data()["LastName"])
            
        } 
        
        fetchData()
      
        
    },[])

    let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

    const db = firebase.firestore()
    let isSuccess = true
    if (props.Result >= 50) {
         isSuccess = true
    } else {
         isSuccess = false
    }


    db.collection("users").doc(currentUser.uid).collection("quizes").doc(props.Book.id).set({
        booktitle : props.Book.Title,
        Result: props.Result,
        Success: isSuccess,
        BookId: props.Book.id,
        QuizDate:today
      })

      if(props.Result >= 50) {
      const userRef = db.collection("users").doc(currentUser.uid).collection("points").doc('quizpoints')
      const increaseBy = firebase.firestore.FieldValue.increment(50);

        userRef.update({ QuizPoints: increaseBy });
      }
      let nowrong = false
      if (Math.round(props.Result) === 100) {
          nowrong=false
      } else {
          nowrong=true
      }
      

    if (props.Result >= 50) {
    return(
        <div>
            <Card className="success">
            <div class="img-wrap">
                <Card.Img style={{marginBottom:"5%"}} src="https://images.unsplash.com/photo-1562585398-fbf461aec9a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=725&q=80" alt="Card image" />
            </div>
            <Card.ImgOverlay>
                <Card.Title className="successtxt">
                    <div style={{fontFamily:"Jonathan", textAlign:"center", fontSize:"400%", fontWeight:'Bold'}}>Well done !</div> 
                    <div style={{textAlign:"center"}}>You just added 50 points to your total quiz points</div>
                    <div className="checkbutton"><Button variant="primary"  href="/adminpanel">Check my Dashboard</Button></div>
                </Card.Title>
            <Card.Text style= {{textAlign:"center",fontWeight:"Bold"}}>
                {Math.round(props.Result)} % of your answers are correct
                </Card.Text>
                
            </Card.ImgOverlay>
            
            </Card>

            <Card className="bg-white text-black">
            <Card.Img className="imgcertif" src="https://firebasestorage.googleapis.com/v0/b/qwizards-5b134.appspot.com/o/Certif.png?alt=media&token=52d8ae8a-4a7d-42e3-b426-80c89ad421f2" alt="Card image" />
                <Card.ImgOverlay>
                    <div className="lastfirst">
                    <Card.Title className="certif">{capitalize(FirstName)} </Card.Title>
                    <Card.Title className="certif">{capitalize(LastName)} </Card.Title>
                    </div>
             <div style = {{maxWidth:'150px'}}>
                    <Card.Title className="title">{props.Book.Title} by </Card.Title>
                    <Card.Title className="author">{props.Book.author} </Card.Title>
             </div>
                </Card.ImgOverlay>
            </Card>
            

            {nowrong && <h1 style={{textAlign:"center"}}>Wrong Answers : </h1> }
            <div style={{display:"flex", flexWrap:"wrap",justifyContent:'space-around',margin:"5%"}}>
            
                    {props.Wronganswers.map((item,i)=>{
                        const right = "answer"+item.rightanswer
                   
                                return(
                         
                                    <div className="card" style={{width: '15rem'}} key={i}>
                                        <Card.Img className="card-img-top" src="https://www.flaticon.com/svg/static/icons/svg/3409/3409569.svg" alt="Card image cap">
                                        </Card.Img>
                                        <div className="card-body">
                                            <h5 className="card-title">Question : {item.question}</h5>
                                            <p className="card-text"><strong>Your answer:</strong> {props.WrongUserAnswers[i]}</p>
                                            <p className="card-text"><strong>Right answer :</strong> {item[right]}</p>
                                        </div>
                                    </div>
                               )
                            }) 
                     }
            </div>
            
            
            


            {/* <CommentBox /> */}
         </div>
    )}
    else {

        return(

                <div>
                    <Card className="success">
                    <div class="img-wrap">
                        <Card.Img src="https://image.freepik.com/free-photo/young-man-holding-hands-his-head-white-t-shirt-looking-sorry-front-view_176474-10206.jpg" alt="Card image" />
                    </div>
                    <Card.ImgOverlay>
                    
                        <Card.Title className="successtxt">
                            <div style={{fontFamily:"Arial", textAlign:"center", fontSize:"400%", fontWeight:'Bold'}}>Sorry !</div> 
                            <div style={{textAlign:"center"}}>0 points added to your total quiz points</div>
                            <div className="checkbutton"><Button variant="primary"  href="/adminpanel">Check my Dashboard</Button></div>
                        </Card.Title>
                    <Card.Text style= {{textAlign:"center",fontWeight:"Bold"}}>
                        {Math.round(props.Result)} % 
                        </Card.Text>
                        
                    </Card.ImgOverlay>
                    
                    </Card>
                    
        
                    {nowrong && <h1 style={{textAlign:"center"}}>Wrong Answers : </h1> }
                    <div style={{display:"flex", flexWrap:"wrap",justifyContent:'space-around',margin:"5%"}}>
                    
                            {props.Wronganswers.map((item,i)=>{
                                const right = "answer"+item.rightanswer
                           
                                        return(
                                 
                                            <div className="card" style={{width: '18rem',marginBottom:"5%"}}  key={i}>
                                                <Card.Img className="card-img-top" src="https://www.flaticon.com/svg/static/icons/svg/3409/3409569.svg" alt="Card image cap">
                                                </Card.Img>
                                                <div className="card-body">
                                                    <h5 className="card-title">Question : {item.question}</h5>
                                                    <p className="card-text"><strong>Your answer:</strong> {props.WrongUserAnswers[i]}</p>
                                                    <p className="card-text"><strong>Right answer :</strong> {item[right]}</p>
                                                </div>
                                            </div>
                                       )
                                    }) 
                             }
                    </div>
                </div>
    )

    }
}

export default FinalResult