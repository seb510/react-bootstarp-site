import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import CardsTeam from "../Components/CardsTeam";
import {Container} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
           <div className="section">
               <CarouselBox/>
               <Container>
                   <h2 className="text-center m-4">Our Team</h2>
                   <CardsTeam/>
               </Container>
           </div>
        );
    }
}

export default Home;