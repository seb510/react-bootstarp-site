import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import teamImg1 from '../assets/team1.jpg';
import teamImg2 from '../assets/team2.jpg';
import teamImg3 from '../assets/team3.jpg';

class CardsTeam extends Component {
    render() {
        return (
            <div className="cards-grid mb-4">
                <Card border="primary">
                    <Card.Img variant="top" src={teamImg1} />
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et nostrum totam?
                        </Card.Text>
                        <Button variant="primary">About Developers</Button>
                    </Card.Body>
                </Card>

                <Card border="primary">
                    <Card.Img variant="top" src={teamImg2} />
                    <Card.Body>
                        <Card.Title>Designers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et nostrum totam?
                        </Card.Text>
                        <Button variant="primary">About Designers</Button>
                    </Card.Body>
                </Card>

                <Card border="primary">
                    <Card.Img variant="top" src={teamImg3} />
                    <Card.Body>
                        <Card.Title>Managers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et nostrum totam?
                        </Card.Text>
                        <Button variant="primary">About Managers</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CardsTeam;
