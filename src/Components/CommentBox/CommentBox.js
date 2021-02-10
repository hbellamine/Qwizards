import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import "./CommentBox.scss";
const CommentBox = (props) => {
  const [showComments, SetShowComments] = useState(false);
  const [Comments, SetComments] = useState([
    {
      id: 1,
      author: "landiggity",
      body: "This is my first comment on this forum so don't be a dick",
    },
    {
      id: 2,
      author: "scarlett-jo",
      body:
        "That's a mighty fine comment you've got there my good looking fellow...",
    },
    {
      id: 3,
      author: "rosco",
      body: "What is the meaning of all of this 'React' mumbo-jumbo?",
    },
  ]);

  const addComment = (author, body) => {
    const comment = {
      id: Comments.length + 1,
      author,
      body,
    };
    SetComments(Comments.concat([comment])); // *new array references help React stay fast, so concat works better than push here.
  };

  const handleClick = () => {
    SetShowComments(!showComments);
  };

  const getComments = () => {
    return Comments.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id} />
      );
    });
  };

  const getCommentsTitle = (commentCount) => {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  };

  const comments = getComments();
  let commentNodes;
  let buttonText = "Show Comments";

  if (showComments) {
    buttonText = "Hide Comments";
    commentNodes = <div className="comment-list">{comments}</div>;
  }

  return (
    <div className="comment-box">
      <h2>Join the Discussion!</h2>
      <CommentForm addComment={addComment} />
      <button id="comment-reveal" onClick={handleClick}>
        {buttonText}
      </button>
      <h3>Comments</h3>
      <h4 className="comment-count">{getCommentsTitle(comments.length)}</h4>
      {commentNodes}
    </div>
  );
}; // end render

// end CommentBox component

const CommentForm = (props) => {
  const [authorinput, setAuthorinput] = useState();
  const [bodyinput, setBodyinput] = useState();
  const handleSubmit = (event) => {
    event.preventDefault(); // prevents page from reloading on submit

    let author = authorinput;
    let body = bodyinput;
    props.addComment(author.value, body.value);
  };
  // end CommentForm component

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div id="comment-form-fields">
        <Form.Control
          onChange={(event) => {
            setAuthorinput(event.target);
          }}
          style={{ marginTop: 10 }}
          type="text"
          placeholder="Author"
        />
        <br />
        <Form.Control
          onChange={(event) => {
            setBodyinput(event.target);
          }}
          style={{ marginTop: 10 }}
          rows="4"
          type="text"
          placeholder="Comment"
        />
      </div>
      <div className="comment-form-actions">
        <Button
          onClick={handleSubmit}
          variant="contained"
          size="small"
          color="primary"
        >
          Post Comment
        </Button>
      </div>
    </form>
  );
}; // end render

const Comment = (props) => {
  const deleteComment = () => {
    alert("-- DELETE Comment Functionality COMMING SOON...");
  };
  return (
    <div className="comment">
      <p className="comment-header">{props.author}</p>
      <p className="comment-body">- {props.body}</p>
      <div className="comment-footer">
        <a href="#" className="comment-footer-delete" onClick={deleteComment}>
          Delete Comment
        </a>
      </div>
    </div>
  );
};

export default CommentBox;
