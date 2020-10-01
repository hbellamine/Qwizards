import * as actionTypes from './actionTypes'
import firebase from '../../../src/base'

export const FilteredBooks = (filteredBook) => {
    return {
        type: actionTypes.FILTERED_BOOKS,
        filteredBook: filteredBook
    }
}

export const FetchedOk = () => {
    return {
        type: actionTypes.SET_FETCHOK,
        fetchedok: true
    }
}

export const setBooks = (books) => {
     return {
         type: actionTypes.SET_BOOKS,
         books: Object.values((books.docs.map(doc => doc.data())))
     }
}

export const setIdquizzes = (Idquizzes)=> {
    return {
        type: actionTypes.SET_IDQUIZZES, 
        Idquizzes: Idquizzes
    }
}

export const setQuizzes = (quizzes)=> {
    return {
        type: actionTypes.SET_QUIZZES, 
        quizzes: quizzes
    }
}
export const FetchBooks = () => {
   
    return async dispatch => {
        console.log('test')
        const db = firebase.firestore()
        const bookslisting=  await db.collection("bookslist").get()        
        dispatch(setBooks(bookslisting))
        dispatch(FilteredBooks(Object.values((bookslisting.docs.map(doc => doc.data())))))
        const quizlisting= await db.collection("quiz").get() 
        dispatch(setIdquizzes((quizlisting.docs.map(doc => doc.id))))
        dispatch(setQuizzes(quizlisting.docs.map(doc => doc.data())))
        dispatch(FetchedOk())
    }

}
