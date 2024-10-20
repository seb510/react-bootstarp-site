import React, { Component } from 'react';
import {Card, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import PostItem from '../Components/PostItem'; // шлях до вашого компонента

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []  // Ініціалізація стану
        };
    }

    // Викликається після монтування компонента
    componentDidMount() {
        this.fetchPosts();
    }

    // Метод для отримання постів з API
    fetchPosts = async () => {
        try {
            const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
            const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
            const postsData = await postsResponse.json();
            const photosData = await photosResponse.json();

            // Об'єднуємо пости з картинками
            const mergedData = postsData.slice(0, 10).map((post, index) => ({
                ...post,
                imageUrl: photosData[index]?.url // Додаємо URL картинки до кожного поста
            }));

            // Оновлюємо стан компоненту
            this.setState({ posts: mergedData });
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    render() {
        const { posts } = this.state;

        return (
            <div className="section">
                <Container className="mt-5">
                    <Row>
                        <Col md="9">
                            {posts.map((post) => (
                                <PostItem
                                    key={post.id}
                                    title={post.title}
                                    body={post.body}
                                    imageUrl={post.imageUrl}
                                />
                            ))}
                        </Col>
                        <Col md="3">
                            <h4 className="text-center">Categories</h4>
                            <ListGroup variant="flush">
                                <ListGroupItem>Html/Css</ListGroupItem>
                                <ListGroupItem>JavaScript</ListGroupItem>
                                <ListGroupItem>Python</ListGroupItem>
                                <ListGroupItem>Java</ListGroupItem>
                                <ListGroupItem>C++</ListGroupItem>
                            </ListGroup>
                            <Card className="mt-3" bg="light">
                                <Card.Body>
                                    <Card.Title>Side widget</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nulla!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Blog;
