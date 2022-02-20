import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, ListGroupItem } from "react-bootstrap";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiempoActual: 100,
            procesoCont: 9,
            pags: 0,
            ejec: 0,
            ready: [1, 2, 3],
            running: 8,
            blocked: [6, 7],
            finished: [4, 5],
            quantum: 5,
            algoritmo: "Round Robin",
            pcb: [{
                nombre: 1,
                llegada: 0,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 0,
                quantumRestante: 0
            },
            {
                nombre: 2,
                llegada: 0,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 0,
                quantumRestante: 0
            },
            {
                nombre: 3,
                llegada: 0,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 0,
                quantumRestante: 0
            }, {
                nombre: 4,
                llegada: 0,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 0,
                quantumRestante: 0
            }, {
                nombre: 5,
                llegada: 0,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 0,
                quantumRestante: 0
            }, {
                nombre: 6,
                llegada: 0,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 0,
                quantumRestante: 0
            }, {
                nombre: 7,
                llegada: 0,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 0,
                quantumRestante: 0
            }, {
                nombre: 8,
                llegada: 0,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 0,
                quantumRestante: 0
            }, {
                nombre: 9,
                llegada: 0,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 0,
                quantumRestante: 0
            }]
        };
    }

    render() {
        return (
            <Container className="my-5 border border-secondary">
                <Row style={{ backgroundColor: "black", color: "white" }}>
                    <Col className="text-center">
                        My Little SO
                    </Col>
                </Row>
                <Row style={{ backgroundColor: "white" }}>
                    <Col className="py-2">
                        <Form onSubmit={(e) => e.preventDefault()}>
                            <Row>
                                <Col>
                                    <Form.Label column style={{ fontSize: 14, minWidth: "135px" }}>Tiempo Actual</Form.Label></Col>
                                <Col>
                                    <Form.Control style={{ fontSize: 14, minWidth: 70, maxWidth: 70 }} type="number" value={this.state.tiempoActual} />
                                </Col>

                                <Col>
                                    <Button variant="secondary" type="submit" className="" style={{ fontSize: 14, minWidth: "140px" }}>
                                        Ejecutar página
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col xs={1}>
                    </Col>
                    <Col className="py-2 pl-4 ml-3 mt-2" style={{ fontSize: 14, maxWidth: "120px" }}>
                        Interrupción
                    </Col>
                    <Col className="py-2" style={{ fontSize: 14 }}>
                        <Form.Select className="py-2">
                            <option>Seleccionar</option>
                            <option value="1">SVC de solicitud I/O</option>
                            <option value="2">SVC de terminación normal</option>
                            <option value="3">SVC de solicitud de fecha</option>
                            <option value="4">Error de programa</option>
                            <option value="5">Externa de quantum expirado</option>
                            <option value="6">Dispositivo de I/O</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="" style={{ backgroundColor: "mediumturquoise" }}>
                    <Col className="pt-3">
                        Procesos
                    </Col>
                    <Col>
                        <Container className="p-3">
                            <Row style={{ backgroundColor: "black", color: "white" }}>
                                <Col className="text-center">
                                    New
                                </Col>
                            </Row>
                            <Row style={{ minHeight: "200px", backgroundColor: "white", color: "black" }}>
                                <Form onSubmit={(e) => e.preventDefault()}>
                                    <Form.Group as={Row} controlId="nombre" className="p-2">
                                        <Form.Label column style={{ fontSize: 12 }}>Nombre</Form.Label>
                                        <Col>
                                            <Form.Control disabled style={{ fontSize: 12, maxWidth: 70 }} type="number" value={this.state.procesoCont} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="paginas" className="p-2">
                                        <Form.Label column style={{ fontSize: 12 }}>Páginas</Form.Label>
                                        <Col>
                                            <Form.Control style={{ fontSize: 12, maxWidth: 70 }} type="number" value={this.state.pags} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="ejec" className="p-2">
                                        <Form.Label column style={{ fontSize: 12 }}>Ejec total</Form.Label>
                                        <Col>
                                            <Form.Control style={{ fontSize: 12, maxWidth: 70 }} type="number" value={this.state.ejec} />
                                        </Col>
                                    </Form.Group>
                                    <Col className="text-center px-2">
                                        <Button variant="secondary" type="submit" className="py-1 w-100 mt-2">
                                            +
                                        </Button>
                                    </Col>
                                </Form>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-3">
                            <Row style={{ backgroundColor: "black", color: "white" }}>
                                <Col className="text-center">
                                    Ready
                                </Col>
                            </Row>
                            <Row style={{ minHeight: "200px", backgroundColor: "white", color: "black" }}>
                                <Col className="pt-2">
                                    <ListGroup style={{ fontSize: 12 }}>
                                        {this.state.ready.map((proc) => <ListGroup.Item className="p-1 w-100 text-center">{proc}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-3">
                            <Row style={{ backgroundColor: "black", color: "white" }}>
                                <Col className="text-center">
                                    Running
                                </Col>
                            </Row>
                            <Row style={{ minHeight: "200px", backgroundColor: "white", color: "black" }}>
                                <Col className="pt-2">
                                    <ListGroup style={{ fontSize: 12 }}>
                                        <ListGroup.Item className="p-1 w-100 text-center" style={{ backgroundColor: "darkorange" }}>{this.state.running}</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-3">
                            <Row style={{ backgroundColor: "black", color: "white" }}>
                                <Col className="text-center">
                                    Blocked
                                </Col>
                            </Row>
                            <Row style={{ minHeight: "200px", backgroundColor: "white", color: "black" }}>
                                <Col className="pt-2">
                                    <ListGroup style={{ fontSize: 12 }}>
                                        {this.state.blocked.map((proc) => <ListGroup.Item className="p-1 w-100 text-center">{proc}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-3">
                            <Row style={{ backgroundColor: "black", color: "white" }}>
                                <Col className="text-center">
                                    Finished
                                </Col>
                            </Row>
                            <Row style={{ minHeight: "200px", backgroundColor: "white", color: "black" }}>
                                <Col className="pt-2">
                                    <ListGroup style={{ fontSize: 12 }}>
                                        {this.state.finished.map((proc) => <ListGroup.Item className="p-1 w-100 text-center">{proc}</ListGroup.Item>)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Col>

                </Row>
                <Row style={{ backgroundColor: "gold" }}>
                    <Col xs={2} className="pt-3">
                        CPU
                    </Col>
                    <Col xs={6}>
                        <Container className="p-3">
                            <Row style={{ backgroundColor: "black", color: "white" }}>
                                <Col className="text-center">
                                    Scheduling
                                </Col>
                            </Row>
                            <Row style={{ minHeight: "200px", backgroundColor: "white", color: "black", fontSize: 14 }}>
                                <Col className="pt-2 ml-2">
                                    <Row>Nombre: {this.state.pcb[this.state.running - 1].nombre}</Row>
                                    <Row>Tiempo Llegada: {this.state.pcb[this.state.running - 1].llegada}</Row>
                                    <Row>CPU Asignado: {this.state.pcb[this.state.running - 1].cpuAsignado}</Row>
                                    <Row>Envejecimiento: {this.state.pcb[this.state.running - 1].envejecimiento}</Row>
                                    <Row>CPU Restante: {this.state.pcb[this.state.running - 1].cpuRestante}</Row>
                                    <Row>Quantum Restante: {this.state.pcb[this.state.running - 1].quantumRestante}</Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-3">
                            <Row style={{ backgroundColor: "black", color: "white" }}>
                                <Col className="text-center">
                                    CPU
                                </Col>
                            </Row>
                            <Row style={{ minHeight: "200px", backgroundColor: "white", color: "black", fontSize: 14 }}>
                                <Col className="pt-2">
                                    <Row className="px-3">
                                        <Form.Select className="py-2 w-100">
                                            <option>Seleccionar</option>
                                            <option value="1">FIFO</option>
                                            <option value="2">Round Robin</option>
                                            <option value="3">SJF</option>
                                            <option value="4">SRT</option>
                                            <option value="5">HRRN</option>
                                        </Form.Select>

                                    </Row>
                                    <Row className="mt-2">
                                        <Form onSubmit={(e) => e.preventDefault()}>
                                            <Col>
                                                <Row>
                                                    <Col className="pl-0">
                                                        <Form.Label column style={{ fontSize: 14, minWidth: "135px" }}>Tam Quantum</Form.Label>
                                                    </Col>
                                                    <Col>
                                                        <Form.Control style={{ fontSize: 14, minWidth: 70, maxWidth: 70 }} type="number" value={this.state.quantum} />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Form>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: "yellowgreen" }}>
                    <Col xs={2} className="pt-3">
                        Memoria
                    </Col>
                    <Col xs={6}>
                        <Container className="p-3">
                            <Row style={{ backgroundColor: "black", color: "white" }}>
                                <Col className="text-center">
                                    TBD
                                </Col>
                            </Row>
                            <Row style={{ minHeight: "200px", backgroundColor: "white", color: "black" }}>
                                <Col className="pt-2">

                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-3">
                            <Row style={{ backgroundColor: "black", color: "white" }}>
                                <Col className="text-center">
                                    Memoria
                                </Col>
                            </Row>
                            <Row style={{ minHeight: "200px", backgroundColor: "white", color: "black" }}>
                                <Col className="pt-2">

                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;