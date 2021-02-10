import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Searchbar.css";
import { connect } from "react-redux";
import * as BooksActions from "../../../store/actions/books";

const Searchbar = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();

  const ChangeHandler = (event) => {
    //event.preventDefault();

    let listedbooks = props.books.filter((book) =>
      book.Title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    props.onFilteredBook(listedbooks);
  };

  return (
    <div className="Searchbar">
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            onChange={ChangeHandler}
            id="standard-basic"
            label="Book"
          />
        </form>
      </div>

      <div style={{ marginTop: 20 }}>
        <Button variant="contained" color="primary">
          Search
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    FilteredBooks: state.FilteredBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilteredBook: (filteredBook) =>
      dispatch(BooksActions.FilteredBooks(filteredBook)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
