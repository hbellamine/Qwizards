import React,{useState} from 'react';
import {Form } from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './ContainerNewBookForm.css'
import firebase from '../../base'


const NewBookForm = props => {

    const [CoverImg,setCoverImg] = useState("")
    const [Title,setTitle] = useState("")
    const [Summary,setSummary] = useState("")
    const [Author,setAuthor]= useState("")
    const [Uploaded, setUploaded]=useState(true)
    const [Post,SetPost] = useState()

    const handleSubmit = () =>{
        let formdata = new FormData()
        formdata.append('image',CoverImg)
       const id  = Math.floor(Math.random() * 1000000000).toString()
        const post = {
            id: id,
            src: CoverImg,
            author: Author,
            Title: Title,
            summary: Summary,
            quizzavailable: false,
        }



        
      const db = firebase.firestore()
      db.collection("bookslist").doc(id).set(post)
        SetPost(post)
      setUploaded(false)
  

   
     }

     const handleCreate = () => {
        const queryParams = encodeURIComponent(Post["id"])
  
        props.history.push(
            {
            pathname: '/createquiz',
            search: '?'+queryParams,
            state: {book: Post}

            }
        )
     }

    const handleChange = async(event)=> {

        

        const file = event.target.files[0]

        const storageRef = firebase.storage().ref()
        const fileRef = storageRef.child(file.name)
         await fileRef.put(file)
         setCoverImg(await fileRef.getDownloadURL())
    }

    const ChangeAuthor = (event)=> {
        setAuthor(event.target.value)
    }

    const ChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const ChangeSummary =(event) => {
        setSummary(event.target.value)
    }




        if(Uploaded) {return (
            <div className='ContainerNewBookForm' >
                    <Form.Group>
                    <Form.File
                    className="position-relative"
                    required
                    name="file"
                    label="Book Cover Image"
                    onChange={handleChange}
                    //   isInvalid={!!errors.file}
                    //   feedback={errors.file}
                    id="validationFormik107"
                    feedbackTooltip
                    />
                    <br />
                    <Form.Control onChange={ChangeAuthor} style={{marginTop:10}}  type="text" placeholder="Author" />
                    <br />
                    <Form.Control onChange={ChangeTitle} id="A1" type="text" placeholder="Title" />
                    <br />
                    <Form.Control onChange={ChangeSummary} style={{marginTop:10}}  type="text"  as="textarea" rows="5" placeholder="Summary" />
                    <br />
                    <Button onClick = {handleSubmit} variant="contained" size='small' color='primary'>Submit</Button>
                </Form.Group>
        </div>
            )
        } return (
        
        <div>
            <h1>Uploaded</h1>
            <Button onClick = {handleCreate} variant="contained" size='small' color='primary'>Create the quiz</Button>
        </div>)
    }

export default withRouter(NewBookForm); 
