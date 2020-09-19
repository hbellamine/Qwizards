import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Slides = props => { 

    return(
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://s3.amazonaws.com/prod.assets.thebanner/styles/article-large/s3/article/large/TIN-332%20Books%20from_large.jpg?itok=goIsOQs0"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://image.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            );
}

export default Slides;
