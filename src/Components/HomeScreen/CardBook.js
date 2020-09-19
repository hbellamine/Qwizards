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
    maxWidth: '30%',
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

const CardBook = props => {
  const classes = useStyles();

 

  const queryParams = encodeURIComponent(props.id)
  const createquizz =() => {
   props.history.push(
     {
      pathname: '/createquiz',
      search: '?'+queryParams,
      state: {books: props.books}

     }
   )
  }


  const takequizz =() => {
    props.history.push(
      {
       pathname: '/takequiz',
       search: '?'+queryParams,
       state: {quizz: props.quizzes, books:props.books}
 
      }
    )
   }

  

  return (
    <Card className={classes.root}>

      <CardMedia
        className={classes.media}
        image={props.image}
      />
 
      <CardContent>
                    {
                      
                      props.ready? 
                      <Button onClick = {takequizz} variant="contained" size='small' color='primary'>
                      Take the quiz
                    </Button> : 
                    <Button onClick = {createquizz} variant="contained" size='small' color='secondary'>
                    Create the quiz
                  </Button>

                    }
      </CardContent>

    </Card>
  );
}

export default withRouter(CardBook);
