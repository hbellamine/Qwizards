import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Accordeon.css"
import CertifAdmin from './CertifAdmin'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin:'5%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    marginLeft:"6px"
  },
}));

const Accordeon = (props) =>  {
  const classes = useStyles();

  if (props.result>=50) { 
        return (  
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >   
              <div className= "accordeon">
                  <img width="150px" height="auto" src ={props.cover} />
              <Typography className={classes.heading}><strong>Date :</strong> {props.date} <br /> <strong>Book Title : </strong>{props.title} </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
            <strong>Result :</strong> {props.result} %
            <CertifAdmin 
                  FirstName = {props.firstlast} 
                  LastName = {props.lastname} 
                  title = {props.title}
                  author = {props.author} />

              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      )
    }
  else {
    return( 
    <div className={classes.root}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >   
        <div className= "accordeon">
            <img width="150px" height="auto" src ={props.cover} />
        <Typography className={classes.heading}><strong>Date :</strong> {props.date} <br /> <strong>Book Title : </strong>{props.title} </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
      <strong>Result :</strong> {props.result} %
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div> )
  }

}

export default Accordeon