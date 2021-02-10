import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as BooksActions from "../../store/actions/books";
import "./Container.css";
import NavBar from "../../Components/HomeScreen/NavBar/NavBar";
import Searchbar from "../../Components/HomeScreen/Searchbar/Searchbar";
import ShowList from "../../Components/HomeScreen/ShowList";
import Banner from "../../Components/CreateQuizzScreen/Banner/Banner";
import quotes from "../../Components/HomeScreen/Quotes/Quotes";

const Home = (props) => {
  const [rand, setrand] = useState(Math.floor(Math.random() * (2999 + 1)));

  const quote = () => {
    return quotes[rand]["Quote"];
  };

  useEffect(() => {
    props.onFetchBooks();
   

    props.onNewRender(props.AllBooks);
  }, []);

  useEffect(()=>{
    props.IdQuizzes && props.onFetchBooksWithQuiz(props.IdQuizzes);
  },[props.IdQuizzes])

  const bannertext = (
    <div>
      <h1>
        Get the <strong>most </strong>
        <strong>out of your reading!</strong>
      </h1>
    </div>
  );

  const quotebanner = (
    <div>
      <h4>{quote()}</h4>
    </div>
  );

  return (
    <div>
      <NavBar />
      {props.AllBooks && <Banner title={bannertext} quote={quotebanner} />}
      {props.AllBooks && <Searchbar books={props.AllBooks} />}
      
      {props.FilteredBooks && props.IdQuizzes && props.Quizzes && <div className="latesteQuizes">
        <h2 className="titleH2">Latest quizzes available</h2>
        <ShowList
          Quizzes={props.Quizzes}
          Idquizzes={props.IdQuizzes}
          AllBooks={props.booksWithQuizz}
          List={props.booksWithQuizz.slice(0, 10)}
        />
      </div>}
      {props.FilteredBooks && props.IdQuizzes && props.Quizzes && (
        <ShowList
          Quizzes={props.Quizzes}
          Idquizzes={props.IdQuizzes}
          AllBooks={props.FilteredBooks}
          List={props.FilteredBooks.slice(0, 50)}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    AllBooks: state.AllBooks,
    FilteredBooks: state.FilteredBooks,
    Quizzes: state.Quizzes,
    IdQuizzes: state.IdQuizzes,
    Fetchedok: state.Fetchedok,
    booksWithQuizz: state.booksWithQuizz
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBooks: () => dispatch(BooksActions.FetchBooks()),
    onFetchBooksWithQuiz: (quizesIDS)=>dispatch(BooksActions.FetchBooksWithQuiz(quizesIDS)),
    onNewRender: (filteredBook) =>
      dispatch(BooksActions.FilteredBooks(filteredBook)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
