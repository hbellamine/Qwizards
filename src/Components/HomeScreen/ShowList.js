import React from "react";
import CardBook from "./CardBook";

const Showlist = (props) => {
  return (
    <div className="Container">
      {props.List.map((item, i) => {
        return (
          <CardBook
            key={i}
            books={props.AllBooks}
            quizzes={props.Quizzes}
            BookTitle={item.Title}
            id={item.id}
            image={item.src}
            ready={props.Idquizzes.includes(item.id)}
            author={item.author}
          />
        );
      })}
    </div>
  );
};

export default Showlist;
