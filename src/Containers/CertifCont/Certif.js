import React from "react";
import Card from "react-bootstrap/Card";
import "../../Components/TakeQuizScreen/Css/TakeQuizComponent.scss";
import imagecertif from "./images/Imagecertif.png";

const Certif = (props) => {
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <Card className="bg-white text-black">
      <Card.Img className="imgcertif" src={imagecertif} alt="Card image" />
      <Card.ImgOverlay>
        <div className="lastfirstbook">
          <Card.Title className="certifbook">
            {capitalize(props.FirstName)}{" "}
          </Card.Title>
          <Card.Title className="certifbook">
            {capitalize(props.LastName)}{" "}
          </Card.Title>
        </div>
        <div style={{ maxWidth: "150px" }}>
          <Card.Title className="titlebook">{props.title} by </Card.Title>
          <Card.Title className="authorbook">{props.author} </Card.Title>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Certif;
