import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Informacion from "./Informacion";

const Formulario = () => {
    //en esta variable guardamos los datos buscados en el input del form en el evento change (funcion handleChange).
    const [ciudad, setCiudad] = useState("");
    //en esta variable guardamos el valor de ciudad para que cuando haga la peticion a la API la ciudad vaya escrita completa.
    const [ciudadOk, setCiudadOk] = useState("");
    //en esta variable guardamos los datos que obtendremos de la API y la enviaremos por props al componente Informacion (la inicializo con valores vacios)
    const [datosClima, setDatosClima] = useState({
        coord: {},
        weather: [{ id: "", main: "", description: "", icon: "" }],
        base: "",
        main: { temp: "", feels_like: "", temp_min: "", temp_max: "", pressure: "", humidity: "" },
        visibility: "",
        wind: { speed: "", deg: "" },
        clouds: { all: "" },
        dt: "",
        sys: { type: "", id: "", country: "", sunrise: "", sunset: "" },
        timezone: "",
        id: "",
        name: "",
        cod: "",
    });

    useEffect(() => {
        if (ciudad.trim().length > 0) {
            consultarAPI().then((respuestaDatosClima) => {
                setDatosClima(respuestaDatosClima);
            });
        }
    }, [ciudadOk]);

    const consultarAPI = async () => {
        try {
            let respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadOk}&APPID=370fd6c1a4ad7f1281fc4876c646d91d`);
            const respuestaClima = await respuesta.json();
            return respuestaClima;
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCiudadOk(ciudad.trim());
        console.log(ciudadOk);
        consultarAPI();
    };

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <Form className="p-2 my-3" onSubmit={handleSubmit}>
                            <Form.Control
                                name="ciudad"
                                value={ciudad}
                                placeholder="Buscar ciudad"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={(e) => {
                                    setCiudad(e.target.value);
                                }}
                            />
                            <Button type="submit">Buscar</Button>
                        </Form>
                    </Col>
                </Row>
                <Informacion datosClima={datosClima} />
            </Container>
        </>
    );
};

export default Formulario;
