import * as actionsTypes from '../actions/actionTypes'
import firebase from '../../../src/base'

const initialState = {

    AllBooks: null,
    FilteredBooks : null,
    Quizzes : null,
    IdQuizzes : null,
    Fetchedok:false,
    isAdmin : false,
    Points : null,
    FirstName: null, 
    QuizToValidate : null,
    IdQuizzToValidate: [],



}


const reducer = (state = initialState, action) => {
     switch (action.type) {
         case actionsTypes.SET_BOOKS : 
         return {
            ...state,
            AllBooks: action.books
         }
         case actionsTypes.SET_QUIZZES : 
         return {
             ...state,
             Quizzes: action.quizzes

         }

         case actionsTypes.SET_IDQUIZZES : 
         return {
             ...state,
             IdQuizzes : action.Idquizzes,

         }

         case actionsTypes.FILTERED_BOOKS : 

         return {
             ...state, 
             FilteredBooks : action.filteredBook

         }

         case actionsTypes.SET_FETCHOK : 

         return {
             ...state, 
             Fetchedok : action.fetchedok

         }

         case actionsTypes.SET_ISADMIN: 
         return {
             ...state,
             isAdmin: action.isAdmin
         }

         case actionsTypes.SET_POINTS: 
         return {
             ...state,
             Points: action.Points
         }

         case actionsTypes.SET_FIRSTLAST: 
         return {
             ...state,
             FirstName: action.FirstLast
         }

         case actionsTypes.SET_QUIZTOVALIDATE: 
         return {
             ...state,
             QuizToValidate: action.QuizzToValidate
         }

         case actionsTypes.SET_IDQUIZTOVALIDATE: 
         return {
             ...state,
             IdQuizzToValidate: action.IdQuizzToValidate
         }

         default : 
         return state; 
     }
}
export default reducer; 