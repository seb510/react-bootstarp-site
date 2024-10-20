import React, {Component} from 'react';
import {Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <div className="section">
                <Container className="container-form">
                    <h1 className="text-center">Contact Us</h1>
                    <Form>
                        <FormGroup controlId="formBasicEmail" className="mt-2">
                            <FormLabel>Email address</FormLabel>
                            <FormControl type='email' placeholder="Enter email"/>
                            <FormText>
                                We'll never share your email with anyone else
                            </FormText>
                        </FormGroup>
                        <FormGroup controlId="formBasicTextarea" className="mt-2">
                            <FormLabel>Example textarea</FormLabel>
                            <FormControl as='textarea' rows="3" placeholder="Enter message"/>
                        </FormGroup>
                        <FormGroup  controlId="formBasicCheckbox" className="mt-2">
                            <FormCheck type="checkbox" label="Check me out"/>
                        </FormGroup>
                        <Button className="mt-2" variant="primary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Contacts;