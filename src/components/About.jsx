
import {Col, Container, Row} from 'react-bootstrap'

export default function About () {

    return(
        <main>
        <Container className='bg-danger' >
            <Row className='justify-content-center'>
            <Col sm={12} md={6}>
                <img src= "https://picsum.photos/300/300"
                className='rounded-circle'
                alt="Profile Pic " />
            </Col>


            <Col>
        <h1 className="m-3">Bryan Vargas</h1>
        <p>Bryan is known for his mastery of martial arts, 
            detective skills, and advanced technology, as well as his iconic 
            costume and the symbol of a bat that he uses to strike fear into 
            the hearts of criminals.
        </p>
         </Col>
        </Row>
        </Container>
        </main>
    );
}