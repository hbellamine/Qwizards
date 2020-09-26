import React,{useState,useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paragraph from '../../Components/QuizComponents/ParagraphField'
import Button from '@material-ui/core/Button';
import SummaryModal from '../../Components/CreateQuizzScreen/Modal'
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';
import firebase from "../../base"
import {withRouter,Redirect} from "react-router";
import {AuthContext} from "../../Auth"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'auto',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    marginLeft:'0',
    //width:'100%'
  },
}));



const Layout = props => {
const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [questions,setQuestions] = useState([])
  const [QuizzUploaded,setQuizUploaded]=useState(false)


  const {currentUser} = useContext(AuthContext);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleSubmit = (question,answer1,answer2,answer3,answer4,rightanswer) => {

    setQuestions([...questions, {
      questionnumber : value,
      question: question,
      answer1: answer1,
      answer2:answer2,
      answer3:answer3,
      answer4:answer4,
      rightanswer:rightanswer
    }])
    


    const db = firebase.firestore()
    db.collection("quiztovalidate").doc(props.id).set({"listequestions":[...questions,{
        questionnumber : value,
        question: question,
        answer1: answer1,
        answer2:answer2,
        answer3:answer3,
        answer4:answer4,
        rightanswer:rightanswer
      }],
    "UserId":currentUser.uid})

 

      setQuizUploaded(true)
      
    
  }
  


  const handleClick = (question,answer1,answer2,answer3,answer4,rightanswer) =>{

 
       setQuestions([...questions, {
        questionnumber : value,
        question: question,
        answer1: answer1,
        answer2:answer2,
        answer3:answer3,
        answer4:answer4,
        rightanswer:rightanswer
      }])
      
      
 
      setValue(value+1)
    



      }
    
   



  const bannertop = (        <div style={{justifyContent:"space-around"}}>
<img  style={{display:"block",marginLeft:"auto",marginRight:"auto", marginBottom:15}} src={props.image} alt="Logo" />
<h4 style={{marginTop:10}}>Let's create the quizz for <strong>"{props.title}"</strong></h4>
</div>)

if (QuizzUploaded === true) {

  alert("The quiz has been successfully uploaded Thank You !")

  return <Redirect to="/" />
}

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Q1" {...a11yProps(0)} />
        <Tab label="Q2" {...a11yProps(1)} />
        <Tab label="Q3" {...a11yProps(2)} />
        <Tab label="Q4" {...a11yProps(3)} />
        <Tab label="Q5" {...a11yProps(4)} />
        <Tab label="Q6" {...a11yProps(5)} />
        <Tab label="Q7" {...a11yProps(6)} />
        <Tab label="Q8" {...a11yProps(7)} />
        <Tab label="Q9" {...a11yProps(8)} />
        <Tab label="Q10" {...a11yProps(9)} />
        <Tab label="Q11" {...a11yProps(10)} />
        <Tab label="Q12" {...a11yProps(11)} />
      </Tabs>
      <TabPanel value={value} index={0}>
       
        {bannertop}
          <SummaryModal summary={props.summary} />
        
          <Paragraph handleNext={handleClick} q='Question one' />
        
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      {bannertop}
          <SummaryModal summary={props.summary} />
        
          <Paragraph handleNext={handleClick} q='Question two'/>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
      {bannertop}
          <SummaryModal summary={props.summary} />
        
          <Paragraph handleNext={handleClick} q='Question three' />
        
      </TabPanel>
      <TabPanel value={value} index={3}>
      {bannertop}
          <SummaryModal summary={props.summary} />
        
          <Paragraph handleSubmit={handleSubmit}  handleNext={handleClick} q='Question four' />
        
      
      </TabPanel>
      <TabPanel value={value} index={4}>
      {bannertop}
          <SummaryModal summary={props.summary} />
        
          <Paragraph handleSubmit={handleSubmit}  handleNext={handleClick} q='Question five'/>
        
      </TabPanel>
      <TabPanel value={value} index={5}>
      {bannertop}
          <SummaryModal summary={props.summary} />
        
          <Paragraph handleSubmit={handleSubmit}  handleNext={handleClick} q='Question six'/>
        
      </TabPanel>
      <TabPanel value={value} index={6}>
      {bannertop}
          <SummaryModal summary={props.summary} />
        
          <Paragraph handleSubmit={handleSubmit}  handleNext={handleClick} q='Question seven'/>
        
      </TabPanel>
      <TabPanel value={value} index={7}>
      {bannertop}
          <SummaryModal summary={props.summary} />
        
          <Paragraph handleSubmit={handleSubmit}  handleNext={handleClick} q='Question Eight'/>
        
      </TabPanel>
      <TabPanel value={value} index={8}>
      {bannertop}
          <SummaryModal summary={props.summary} />
        
          <Paragraph handleSubmit={handleSubmit}  handleNext={handleClick} q='Question nine'/>
        
      </TabPanel>
      <TabPanel value={value} index={9}>
      {bannertop}
          <SummaryModal summary={props.summary} />
        
          <Paragraph handleSubmit={handleSubmit}  handleNext={handleClick} q='Question ten'/>
        
      </TabPanel>
      <TabPanel value={value} index={10}>
      {bannertop}
          <SummaryModal summary={props.summary} />
        
          <Paragraph handleNext={handleClick} handleSubmit={handleSubmit}  q='Question eleven' />
        
      </TabPanel>
      <TabPanel value={value} index={11}>
      {bannertop}
        
          <Paragraph handleNext={handleClick} handleSubmit={handleSubmit}   q='Question twelve'/>
          
          <Button onClick = {handleSubmit} variant="contained" size='small' color='primary'>Submit</Button>
        
      </TabPanel>
    </div>
  );
}
export default withRouter(Layout)