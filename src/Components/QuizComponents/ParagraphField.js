import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button'

const Paragraph = props => {
  const [Question,SetQuestion ] = useState()
  const [Answer1,SetAnswer1 ] = useState(" ")
  const [Answer2,SetAnswer2 ] = useState(" ")
  const [Answer3,SetAnswer3 ] = useState(" ")
  const [Answer4,SetAnswer4 ] = useState(" ")
  const [RightAnswer,SetRightAnswer] = useState()


  return (
      <div>
<Form.Group>
  <Form.Control onChange={(event)=>{SetQuestion(event.target.value)}} style={{marginTop:10}} as="textarea" rows="3" size="lg" type="text" placeholder={props.q} />
  <br />
 <Form.Control onChange={(event)=>{SetAnswer1(event.target.value)}} id="A1" type="text" placeholder="First answer" />
  <br />
  <Form.Control onChange={(event)=>{SetAnswer2(event.target.value)}} id="A2" type="text" placeholder="Second answer" />
  <br />
  <Form.Control onChange={(event)=>{SetAnswer3(event.target.value)}} id="A3"type="text" placeholder="Third answer" />
  <br />
  <Form.Control onChange={(event)=>{SetAnswer4(event.target.value)}} id="A4" type="text" placeholder="Four answer" />
  
  </Form.Group>

    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
    <Form.Label>Select the correct answer </Form.Label>
    <Form.Control onChange={(event)=>{SetRightAnswer(event.target.value)}} as="select" htmlSize={3} custom>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    </Form.Control>
    </Form.Group>
     <Button 
          onClick = {()=>{props.handleNext(Question,Answer1,Answer2,Answer3,Answer4,RightAnswer)}} 
          variant="contained" 
          size='small' 
          color='primary'>
            Next
      </Button>
      {props.handleSubmit && <Button 
          onClick = {()=>{props.handleSubmit(Question,Answer1,Answer2,Answer3,Answer4,RightAnswer)}} 
          variant="contained" 
          size='small' 
          color='primary'>
            Submit
      </Button>}
</div>

  );
}
export default Paragraph;
