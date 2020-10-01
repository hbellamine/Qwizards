import * as actionsTypes from '../actions/actionTypes'
import firebase from '../../../src/base'

const initialState = {

    AllBooks: null,
    FilteredBooks : null,
    Quizzes : null,
    IdQuizzes : null,
    Fetchedok:false

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
         default : 
         return state; 
     }
}
export default reducer; 