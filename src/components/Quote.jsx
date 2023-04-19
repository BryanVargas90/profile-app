import { Col, Container, Row } from "react-bootstrap";

export default function Quote () {
    return (
        <section>
        <Container className="quote-container bg-info">
            <Row className="text-center">
                <Col>
                <p><q>
                I am the night, I am vengeance
                </q></p> - Batman
                </Col>
            </Row>
        </Container>
        </section>
    )
}