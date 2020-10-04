import React from 'react'
import Card from 'react-bootstrap/Card'
import '../../Components/TakeQuizScreen/Css/TakeQuizComponent.scss'


const Certif = props => {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

    return(
        <Card className="bg-white text-black">
        <Card.Img className="imgcertif" src="https://firebasestorage.googleapis.com/v0/b/qwizards-5b134.appspot.com/o/Certif.png?alt=media&token=52d8ae8a-4a7d-42e3-b426-80c89ad421f2" alt="Card image" />
            <Card.ImgOverlay>
                <div className="lastfirstbook">
                <Card.Title className="certifbook">{capitalize(props.FirstName)} </Card.Title>
                <Card.Title className="certifbook">{capitalize(props.LastName)} </Card.Title>
                </div>
        <div style = {{maxWidth:'150px'}}>
                <Card.Title className="titlebook">{props.title} by </Card.Title>
                <Card.Title className="authorbook">{props.author} </Card.Title>
        </div>
            </Card.ImgOverlay>
        </Card>
)

}

export default Certif
