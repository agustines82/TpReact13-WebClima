import { InputGroup, Form, Button, Container, Row, Col } from "react-bootstrap";
import Informacion from "./Informacion";

const Formulario = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <Form className="p-2 my-3">
                            <InputGroup className="mb-3">
                                <Form.Control placeholder="Buscar ciudad" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <Button type="submit">Buscar</Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
                <Informacion />
            </Container>
        </>
    );
};

export default Formulario;
