import React from "react";
import Banner from "../../Components/CreateQuizzScreen/Banner/Banner";
import NavBar from "../../Components/HomeScreen/NavBar/NavBar";
import NewBookForm from "../../Components/NewBookScreen/NewBookForm";

const NewBook = (props) => {
  return (
    <div>
      <NavBar />
      <Banner title="Add a new book" />
      <NewBookForm />
    </div>
  );
};

export default NewBook;
