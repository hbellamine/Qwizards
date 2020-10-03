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
         books: books
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
        const db = firebase.firestore()
        const bookslisting=  await db.collection("bookslist").get()        
        dispatch(setBooks(Object.values((bookslisting.docs.map(doc => doc.data())))))
        dispatch(FilteredBooks(Object.values((bookslisting.docs.map(doc => doc.data())))))
        const quizlisting= await db.collection("quiz").get() 
        dispatch(setIdquizzes((quizlisting.docs.map(doc => doc.id))))
        dispatch(setQuizzes(quizlisting.docs.map(doc => doc.data())))
        dispatch(FetchedOk())
    }

}


export const FetchisAdmin = (currentUser) => {
    return async dispatch => {
        const db = firebase.firestore()
        const ifadmin= await db.collection("users").doc(currentUser.uid).collection("admin").doc("accesstype").get()
        dispatch(isAdmin(ifadmin.data()["admin"]))

    }
}
export const isAdmin = (ifadmin) => {
    return {
        type: actionTypes.SET_ISADMIN,
        isAdmin : ifadmin
    }

}

export const FetchPoints = (currentUser) => {
    return async dispatch => {
        const db = firebase.firestore()
        const Pts= await db.collection("users").doc(currentUser.uid).collection("points").doc("quizpoints").get()
        dispatch(Points(Pts.data()["QuizPoints"]))

    }
}
export const Points = (Pts) => {
    return {
        type: actionTypes.SET_POINTS,
        Points : Pts
    }

}

export const FetchFirstLast = (currentUser) => {
    return async dispatch => {
        const db = firebase.firestore()
        const firstlast= await db.collection("users").doc(currentUser.uid).collection("firstlast").doc("firstlast").get()
        dispatch(FirstLast(firstlast.data()["FirstName"],firstlast.data()["LastName"]))


    }
}
export const FirstLast = (firstlast,lastname) => {
    return {
        type: actionTypes.SET_FIRSTLAST,
        FirstLast : firstlast,
        LastName:lastname
    }

}


export const FetchQuizListing = () => {
    return async dispatch => {
        const db = firebase.firestore()
        const quizlisting= await db.collection("quiztovalidate").get()
        dispatch(QuizListing(quizlisting.docs.map(doc => doc.data())))
        dispatch(IdQuizz(quizlisting.docs.map(doc => doc.id)))
    }
}
export const QuizListing = (quizlisting) => {
    return {
        type: actionTypes.SET_QUIZTOVALIDATE,
        QuizzToValidate : quizlisting
    }

}

export const IdQuizz = (idQuizz) => {
    return {
        type: actionTypes.SET_IDQUIZTOVALIDATE,
        IdQuizzToValidate : idQuizz
    }

}

export const FetchOkQuiz =(currentUser) => {
    return async dispatch =>  {
        const db= firebase.firestore ()
        const okquiz = await db.collection("users").doc(currentUser.uid).collection("quizes").get()
        dispatch(OkQuiz(okquiz.docs.map(doc => doc.data())))
    }
}

export const OkQuiz = (okquiz) => {
    return {

        type: actionTypes.SET_USEROKQUIZ,
        OkQuiz : okquiz


    }
}