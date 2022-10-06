import { Container, Table, Row, Col } from "react-bootstrap";

const Informacion = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={8}>
                        <Table striped bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <td>Ciudad</td>
                                    <td>name</td>
                                </tr>
                                <tr>
                                    <td>Pais</td>
                                    <td>sys.country</td>
                                </tr>
                                <tr>
                                    <td>Coordenadas</td>
                                    <td>Longitud:$coord.lon Latitud:$coord.lat</td>
                                </tr>
                                <tr>
                                    <td>Pronostico del Clima</td>
                                    <td>weather.description</td>
                                </tr>
                                <tr>
                                    <td>Temperatura</td>
                                    <td>main.temp</td>
                                </tr>
                                <tr>
                                    <td>Temperatura Max.</td>
                                    <td>main.temp_max</td>
                                </tr>
                                <tr>
                                    <td>Temperatura Min.</td>
                                    <td>main.temp_min</td>
                                </tr>
                                <tr>
                                    <td>Sensacion Tèrmica</td>
                                    <td>main.temp_min</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Informacion;
