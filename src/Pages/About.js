import React, {Component} from 'react';
import {Col, Container, Nav, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <div className="section">
                <Container>
                    <TabContainer id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-3">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Team</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Programming</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <TabContent className="mt-3">
                                    <TabPane eventKey="first">
                                        <div className="thumb">
                                            <img
                                                src="https://freebiesbug.com/wp-content/uploads/2023/01/free-figma-ui-kit-for-website-design.png"
                                                alt="Airplane flying in the sky" width="600" height="600"/>
                                        </div>
                                        <h3 className="mt-3 mb-3">This is the design content.</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facere nobis
                                            perferendis qui unde. Adipisci cumque distinctio eum id itaque libero magni
                                            maxime nesciunt quo.</p>

                                    </TabPane>
                                    <TabPane eventKey="second">
                                        <div className="thumb">
                                            <img
                                                src="https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg"
                                                alt="More People"/>
                                        </div>
                                        <h3  className="mt-3 mb-3">This is the team content.</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id ipsum
                                            molestias quibusdam reiciendis soluta? Amet ex excepturi nisi possimus
                                            recusandae repellat rerum soluta tempora tenetur, ut. Aut, eaque itaque!
                                        </p>
                                    </TabPane>
                                    <TabPane eventKey="third">
                                        <div className="thumb">
                                            <img
                                                src="https://bairesdev.mo.cloudinary.net/blog/2022/01/programming-languages-1.jpg?tx=w_1920,q_auto"
                                                alt="Programing"/>
                                        </div>
                                        <h3 className="mt-3 mb-3">This is the programming content.</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id ipsum
                                            molestias quibusdam reiciendis soluta? Amet ex excepturi nisi possimus
                                            recusandae repellat rerum soluta tempora tenetur, ut. Aut, eaque itaque!
                                        </p>
                                    </TabPane>
                                    <TabPane eventKey="fourth">
                                        <div className="thumb">
                                            <img
                                                src="https://www.digitalogy.co/blog/wp-content/uploads/2020/11/JAVA-frameworks.png"
                                                alt="Frameworks"/>
                                        </div>
                                        <h3 className="mt-3 mb-3">This is the frameworks content.</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id ipsum
                                            molestias quibusdam reiciendis soluta? Amet ex excepturi nisi possimus
                                            recusandae repellat rerum soluta tempora tenetur, ut. Aut, eaque itaque!
                                        </p>
                                    </TabPane>
                                    <TabPane eventKey="fifth">
                                        <div className="thumb">
                                            <img
                                                src="https://externlabs.com/blogs/wp-content/uploads/2021/11/1634192303205.png"
                                                alt="Libraries"/>
                                        </div>
                                        <h3>This is the libraries content.</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id ipsum molestias quibusdam reiciendis soluta? Amet ex excepturi nisi possimus recusandae repellat rerum soluta tempora tenetur, ut. Aut, eaque itaque!
                                        </p>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </TabContainer>
                </Container>
            </div>
        );
    }
}

export default About;
