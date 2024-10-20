import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import airImg from '../assets/air.jpg';
import carImg from '../assets/car.jpg';
import routImg from '../assets/rout.jpg';
import '../assets/CarouselBox.css'; // Підключення CSS

class CarouselBox extends Component {
    render() {
        return (
            <Carousel interval={5000} className="carousel-container">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={airImg}
                        alt="Airplane"
                    />
                    <Carousel.Caption>
                        <h3>Airplane Image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad illo itaque sequi veritatis!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={carImg}
                        alt="Car"
                    />
                    <Carousel.Caption>
                        <h3>Car Image</h3>
                        <p>Car ipsum dolor sit amet, consectetur adipisicing elit. Ad illo itaque sequi veritatis!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={routImg}
                        alt="Route"
                    />
                    <Carousel.Caption>
                        <h3>Route Image</h3>
                        <p>Rout ipsum dolor sit amet, consectetur adipisicing elit. Ad illo itaque sequi veritatis!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;
