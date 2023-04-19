import { Container, Row, Col } from "react-bootstrap";

export default function Quote () {
    return (
        <section>
           <Container className="bg-warning grid-container">
            <Row>
                <Col sm={12} md={4}>
                <h2>Why Boca Code</h2>
                <p>can tell you that some people choose to attend coding bootcamps 
                    as a way to quickly gain skills and experience in programming, web development,
                     or other tech-related fields. 
                    Coding bootcamps are typically intensive, 
                    short-term programs that focus on hands-on learning and often provide students with career services and job placement assistance. 
                    They can be a good option for individuals who want to transition into a tech career but don't have a formal computer science or engineering degree, 
                    or for those who want to 
                    enhance their skills and stay current in a rapidly changing field.</p>
                </Col>

                <Col>
                <h2>Exiciting Project</h2>
                <p>coolllllllllllll</p>
                </Col>

                <Col>
                <h2>Ideal work place</h2>
                <p>lllllllllllllll</p>
                </Col>
            </Row>
           </Container>
        </section>
    )
}



