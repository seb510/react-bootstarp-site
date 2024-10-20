import React from 'react';
import { Card, Col, Row } from "react-bootstrap";

const PostItem = ({ title, body, imageUrl }) => {
    return (
        <Card className="mb-4">
            <Row noGutters>
                <Col md={4}>
                    <Card.Img src={imageUrl} alt={title} style={{ objectFit: 'cover', height: '100%' }} />
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{body}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default PostItem;
