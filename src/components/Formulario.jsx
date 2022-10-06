import { useEffect, useState } from "react";
import { InputGroup, Form, Button, Container, Row, Col } from "react-bootstrap";
import Informacion from "./Informacion";

const Formulario = () => {
    //en esta variable meteremos los datos buscados en el input del form en el evento change (funcion handleChange).
    const [ciudad, setCiudad] = useState("");

    useEffect(() => {
        // consultarAPI();
    }, []);

    const handleChange = (e) => {
        setCiudad(e.target.value);
    };

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <Form className="p-2 my-3">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Buscar ciudad"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={handleChange}
                                />
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
