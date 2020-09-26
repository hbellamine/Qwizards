import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { red } from '@material-ui/core/colors';

import { Button } from '@material-ui/core';

import {withRouter} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    marginBottom:'5%',
  },
  media: {
    height: 0,
    padding:'10%',
    paddingTop: '120.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ToValidateCard = props => {

  const validateQuiz =() => {
    const queryParams = encodeURIComponent(props.Id)
    props.history.push(
      {
       pathname: '/validatequiz',
       search: '?'+queryParams,
       state: {quizz: props.Quizzes, books:props.Books}
 
      }
    )
   }
        const classes = useStyles();

        console.log(props.Book)

       
            

            return (
              <Card className={classes.root}>

              <CardMedia
                className={classes.media}
                image={props.Book[0].src}
              />
         
              <CardContent style={{display:'flex',justifyContent:"space-around"}}>
                            
                              
              <Button onClick = {validateQuiz} variant="contained" size='small' color='primary'>
                     Check the quiz
                    </Button>
        
                            
              </CardContent>
        
            </Card>
            );

}

export default withRouter(ToValidateCard)
