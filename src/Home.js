import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

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
            algoritmo: 2,
            maxProc: 10,
            concurrentes: 6,
            otroEjecCont: 1,
            pcb: [{
                nombre: 1,
                llegada: 10,
                cpuAsignado: 0,
                envejecimiento: 5,
                cpuRestante: 10,
                quantumRestante: 0,
                numPags: 29
            },
            {
                nombre: 2,
                llegada: 14,
                cpuAsignado: 0,
                envejecimiento: 8,
                cpuRestante: 3,
                quantumRestante: 0,
                numPags: 22
            },
            {
                nombre: 3,
                llegada: 28,
                cpuAsignado: 0,
                envejecimiento: 1,
                cpuRestante: 43,
                quantumRestante: 0,
                numPags: 26
            }, {
                nombre: 4,
                llegada: 39,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 12,
                quantumRestante: 0,
                numPags: 9
            }, {
                nombre: 5,
                llegada: 40,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 8,
                quantumRestante: 0,
                numPags: 10
            }, {
                nombre: 6,
                llegada: 57,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 90,
                quantumRestante: 0,
                numPags: 17
            }, {
                nombre: 7,
                llegada: 62,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 128,
                quantumRestante: 0,
                numPags: 109
            }, {
                nombre: 8,
                llegada: 77,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 6,
                quantumRestante: 5,
                numPags: 2
            }]
        };
    }

    handleNew() {
        if (this.state.concurrentes < this.state.maxProc) {
            let newProc = {
                nombre: this.state.procesoCont,
                llegada: this.state.tiempoActual,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: this.state.ejec,
                quantumRestante: 0,
                numPags: this.state.pags
            }
            this.state.pcb.push(newProc);
            this.state.ready.push(this.state.procesoCont);
            this.prioritizeReady(this.state.algoritmo);
            this.setState({ procesoCont: this.state.procesoCont + 1, ejec: 0, pags: 0, concurrentes: this.state.concurrentes + 1 });
            this.handleEjec();
        } else {
            alert("solo se pueden " + this.state.maxProc + " procesos concurrentes");
        }
    }

    handleInterrupt(interrupt) {
        let num = parseInt(interrupt);
        switch (num) {
            case 1:
                console.log("solicitud IO");
                this.state.blocked.push(this.state.running);
                this.state.pcb.map((proc) => {
                    if (proc.nombre === this.state.ready[0]) {
                        proc.quantumRestante = this.state.quantum;
                    }
                })
                this.setState({ running: this.state.ready[0] });
                this.state.ready.shift();
                this.prioritizeReady(this.state.algoritmo);
                break;
            case 2:
                console.log("terminacion normal");
                this.state.finished.push(this.state.running);
                this.setState({ concurrentes: this.state.concurrentes - 1 });
                this.state.pcb.map((proc) => {
                    if (proc.nombre === this.state.ready[0]) {
                        proc.quantumRestante = this.state.quantum;
                    }
                })
                this.setState({ running: this.state.ready[0] });
                this.state.ready.shift();
                this.prioritizeReady(this.state.algoritmo);
                break;
            case 3:
                console.log("solicitud fecha");
                this.state.blocked.push(this.state.running);
                this.state.pcb.map((proc) => {
                    if (proc.nombre === this.state.ready[0]) {
                        proc.quantumRestante = this.state.quantum;
                    }
                })
                this.setState({ running: this.state.ready[0] });
                this.state.ready.shift();
                this.prioritizeReady(this.state.algoritmo);
                break;
            case 4:
                console.log("error programa");
                this.state.finished.push(this.state.running);
                this.setState({ concurrentes: this.state.concurrentes - 1 });
                this.state.pcb.map((proc) => {
                    if (proc.nombre === this.state.ready[0]) {
                        proc.quantumRestante = this.state.quantum;
                    }
                })
                this.setState({ running: this.state.ready[0] });
                this.state.ready.shift();
                this.prioritizeReady(this.state.algoritmo);
                break;
            case 5:
                console.log("quantum expirado");
                this.state.ready.push(this.state.running);
                this.prioritizeReady(this.state.algoritmo);
                this.state.pcb.map((proc) => {
                    if (proc.nombre === this.state.ready[0]) {
                        proc.quantumRestante = this.state.quantum;
                    }
                })
                this.setState({ running: this.state.ready[0] });
                this.state.ready.shift();
                this.prioritizeReady(this.state.algoritmo);
                break;
            case 6:
                console.log("disp IO");
                if (this.state.blocked.length != 0) {
                    this.state.ready.push(this.state.running);
                    this.state.ready.push(this.state.blocked[0]);
                    this.prioritizeReady(this.state.algoritmo);
                    this.state.blocked.shift();
                    this.state.pcb.map((proc) => {
                        if (proc.nombre === this.state.ready[0]) {
                            proc.quantumRestante = this.state.quantum;
                        }
                    })
                    this.setState({ running: this.state.ready[0] });
                    this.state.ready.shift();
                    this.prioritizeReady(this.state.algoritmo);
                }

                break;
            default:
                console.log(interrupt);
                break;
        }
        this.handleEjec();
    }

    ejecutarPagina() {
        this.handleEjec();
        this.state.pcb.map((proc) => {
            if (proc.nombre === this.state.running) {
                if (proc.cpuRestante === 0) {
                    this.handleInterrupt(2);
                }
                else if (proc.quantumRestante === 0 && this.state.algoritmo != 1) {
                    this.handleInterrupt(5);
                } else {
                    proc.quantumRestante = this.state.algoritmo != 1 ? proc.quantumRestante - 1 : proc.quantumRestante;
                    proc.cpuAsignado = proc.cpuAsignado + 1;
                    proc.cpuRestante = proc.cpuRestante - 1;
                    this.setState({ otroEjecCont: this.state.otroEjecCont + 1 });
                    if (this.state.otroEjecCont === 5) {
                        this.handleInterrupt(6);
                        this.setState({ otroEjecCont: 1 });
                    }
                }
            }
        })
    }

    handleEjec() {
        this.setState({ tiempoActual: this.state.tiempoActual + 1 });
        this.state.ready.map((proc) => {
            this.state.pcb[proc - 1].envejecimiento += 1;
        })
    }

    sortFIFO(a, b) {
        if (a.llegada < b.llegada) {
            return -1;
        }
        if (a.llegada > b.llegada) {
            return 1;
        }
        return 0;
    }

    sortSRT(a, b) {
        if (a.cpuRestante < b.cpuRestante) {
            return -1;
        }
        if (a.cpuRestante > b.cpuRestante) {
            return 1;
        }
        return 0;
    }

    sortSJF(a, b) {
        if (a.numPags < b.numPags) {
            return -1;
        }
        if (a.numPags > b.numPags) {
            return 1;
        }
        return 0;
    }

    sortHRRN(a, b) {
        if (a.hrrn > b.hrrn) {
            return -1;
        }
        if (a.hrrn < b.hrrn) {
            return 1;
        }
        return 0;
    }

    prioritizeReady(algoritmo) {
        let num = parseInt(algoritmo);
        switch (num) {
            case 1:
                console.log("fifo");
                let arrFIFO = [];
                this.state.ready.map((proc) => {
                    arrFIFO.push(this.state.pcb[proc - 1]);
                });
                arrFIFO.sort(this.sortFIFO);
                let readyFIFO = [];
                arrFIFO.map((proc) => {
                    readyFIFO.push(proc.nombre);
                })
                this.setState({ ready: readyFIFO });
                break;
            case 2:
                console.log("round robin");
                break;
            case 3:
                console.log("sjf");
                let arrSJF = [];
                this.state.ready.map((proc) => {
                    arrSJF.push(this.state.pcb[proc - 1]);
                });
                arrSJF.sort(this.sortSJF);
                let readySJF = [];
                arrSJF.map((proc) => {
                    readySJF.push(proc.nombre);
                })
                this.setState({ ready: readySJF });
                break;
            case 4:
                console.log("srt");
                let arrSRT = [];
                this.state.ready.map((proc) => {
                    arrSRT.push(this.state.pcb[proc - 1]);
                });
                arrSRT.sort(this.sortSRT);
                let readySRT = [];
                arrSRT.map((proc) => {
                    readySRT.push(proc.nombre);
                })
                this.setState({ ready: readySRT });
                break;
            case 5:
                console.log("hrrn");
                let arrHRRN = [];
                this.state.ready.map((proc) => {
                    arrHRRN.push(this.state.pcb[proc - 1]);
                });
                arrHRRN.map((proc) => {
                    let serv = proc.cpuAsignado + proc.cpuRestante;
                    proc.hrrn = (proc.envejecimiento + serv) / serv;
                })
                arrHRRN.sort(this.sortHRRN);
                let readyHRRN = [];
                arrHRRN.map((proc) => {
                    readyHRRN.push(proc.nombre);
                })
                this.setState({ ready: readyHRRN });
                break;
            default:
                console.log(algoritmo);
                break;
        }
    }

    handleAlgorithmChange(algoritmo) {
        this.setState({ algoritmo: algoritmo });
        this.prioritizeReady(algoritmo);
    }

    handleQuantumChange(quantum) {
        this.setState({ quantum: quantum });
        if (quantum != "") {
            this.state.pcb.map((proc) => {
                if (proc.nombre === this.state.running) {
                    if (proc.quantumRestante > quantum) {
                        proc.quantumRestante = this.state.algoritmo != 1 ? quantum : proc.quantumRestante;
                    }
                }
            })
        }
    }

    handleFile(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            let text = e.target.result;
            let nums = text.split("\n").map((line) => { return line.split(",").map((num) => { return parseInt(num.trim()) }) });
            let numProc = nums[1][0];
            this.setState({
                maxPags: nums[0][0],
                tiempoActual: nums[0][1],
                concurrentes: numProc,
                procesoCont: numProc + 1,
                pags: 0,
                ejec: 0,
                ready: [],
                running: undefined,
                blocked: [],
                finished: [],
                maxProc: 10,
                otroEjecCont: 1,
                pcb: []
            });
            let contPags = 0;
            for (let i = 0; i < numProc; i++) {
                let numPags = nums[3 + (7 * i)][0];

                let newProc = {
                    nombre: (i + 1),
                    llegada: nums[(2 * (i + 1)) + contPags][0],
                    cpuAsignado: 0,
                    envejecimiento: 0,
                    cpuRestante: nums[(2 * (i + 1)) + contPags][1],
                    quantumRestante: 0,
                    numPags: numPags
                };
                this.state.pcb.push(newProc);

                let estado = nums[(2 * (i + 1)) + contPags][2];
                switch (estado) {
                    case 1:
                        this.setState({ running: (i + 1) });
                        this.state.pcb[i].quantumRestante = this.state.quantum;
                        break;
                    case 2:
                        this.state.blocked.push((i + 1));
                        break;
                    case 3:
                        this.state.ready.push((i + 1));
                        break;
                    default:
                        console.log(estado);
                        break;
                }

                contPags += numPags;
            }
            console.log(nums);
            this.prioritizeReady(this.state.algoritmo);
            this.setState({});
        };
        reader.readAsText(file);
    }

    render() {
        return (
            <Container className="my-5 border border-secondary">
                <Row style={{ backgroundColor: "black", color: "white" }}>
                    <Col className="text-center">
                        <b>KERN<span style={{ color: "gold"}}>EL-i</span> SISTEMAS <span style={{ color: "mediumturquoise"}}>ponc-E</span>RATIVOS</b>
                    </Col>
                </Row>
                {/* <Row style={{ backgroundColor: "black", color: "white" }}>
                    <Col className="text-center">
                        Victor Ponce 518755 50%  |  Elizabeth Treviño 554199 50%
                    </Col>
                </Row> */}
                <Row style={{ backgroundColor: "white" }}>
                    <Col className="py-2">
                        <Form onSubmit={(e) => e.preventDefault()}>
                            <Row>
                                <Col style={{ maxWidth: "fit-content" }}>
                                    <Form.Label column style={{ fontSize: 14, minWidth: "135px" }} className="p-0 py-2">
                                        Tiempo Actual
                                    </Form.Label>
                                </Col>
                                <Col className="p-0 pr-3" style={{ maxWidth: "fit-content" }}>
                                    <Form.Control style={{ fontSize: 14, minWidth: 70, maxWidth: 70 }} type="number"
                                        disabled value={this.state.tiempoActual} /* onChange={e => this.setState({ tiempoActual: e.target.value })}  *//>
                                </Col>

                                <Col style={{ maxWidth: "fit-content" }}>
                                    <Button variant="secondary" type="submit" style={{ fontSize: 14, minWidth: "140px" }}
                                        onClick={() => { this.ejecutarPagina(); }}>
                                        Ejecutar página
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col className="py-2 pl-4 ml-3 mt-2" style={{ fontSize: 14, maxWidth: "120px" }}>
                        Interrupción
                    </Col>
                    <Col className="py-2" style={{ fontSize: 14, maxWidth: "fit-content" }}>
                        <Form onSubmit={(e) => e.preventDefault()}>
                            <Form.Select className="py-2"
                                value={this.state.interrupt} onChange={e => this.handleInterrupt(e.target.value)}>
                                <option>Seleccionar</option>
                                <option value={1}>SVC de solicitud I/O</option>
                                <option value={2}>SVC de terminación normal</option>
                                <option value={3}>SVC de solicitud de fecha</option>
                                <option value={4}>Error de programa</option>
                                <option value={5}>Externa de quantum expirado</option>
                                <option value={6}>Dispositivo de I/O</option>
                            </Form.Select>
                        </Form>
                    </Col>
                    <Col className="py-2 ml-4" style={{ fontSize: 14, maxWidth: "fit-content" }}>
                        <Form onSubmit={(e) => e.preventDefault()}>
                            <Form.Group controlId="formFile" >
                                <Form.Control type="file" accept=".txt" className="h-100" style={{ maxWidth: "250px", fontSize: 14 }}
                                    value={this.state.file} onChange={e => this.handleFile(e.target.files[0])} />
                            </Form.Group>
                        </Form>
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
                                            <Form.Control disabled style={{ fontSize: 12, maxWidth: 70 }} type="number"
                                                value={this.state.procesoCont} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="paginas" className="p-2">
                                        <Form.Label column style={{ fontSize: 12 }}>Páginas</Form.Label>
                                        <Col>
                                            <Form.Control style={{ fontSize: 12, maxWidth: 70 }} type="number"
                                                value={this.state.pags} onChange={e => this.setState({ pags: e.target.value })} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="ejec" className="p-2">
                                        <Form.Label column style={{ fontSize: 12 }}>Ejec total</Form.Label>
                                        <Col>
                                            <Form.Control style={{ fontSize: 12, maxWidth: 70 }} type="number"
                                                value={this.state.ejec} onChange={e => this.setState({ ejec: e.target.value })} />
                                        </Col>
                                    </Form.Group>
                                    <Col className="text-center px-2">
                                        <Button variant="secondary" type="submit" className="py-1 w-100 mt-2"
                                            onClick={() => { this.handleNew(); }} >
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
                                <Col className="py-2">
                                    <ListGroup style={{ fontSize: 12 }}>
                                        {this.state.ready.map((proc, key) => <ListGroup.Item className="p-1 w-100 text-center" key={key}>{proc}</ListGroup.Item>)}
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
                                <Col className="py-2">
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
                                <Col className="py-2">
                                    <ListGroup style={{ fontSize: 12 }}>
                                        {this.state.blocked.map((proc, key) => <ListGroup.Item className="p-1 w-100 text-center" key={key}>{proc}</ListGroup.Item>)}
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
                                <Col className="py-2">
                                    <ListGroup style={{ fontSize: 12 }}>
                                        {this.state.finished.map((proc, key) => <ListGroup.Item className="p-1 w-100 text-center" key={key}>{proc}</ListGroup.Item>)}
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
                                    {this.state.running && <>
                                        <Row>Nombre: {this.state.pcb[this.state.running - 1].nombre}</Row>
                                        <Row>Tiempo Llegada: {this.state.pcb[this.state.running - 1].llegada}</Row>
                                        <Row>CPU Asignado: {this.state.pcb[this.state.running - 1].cpuAsignado}</Row>
                                        <Row>Envejecimiento: {this.state.pcb[this.state.running - 1].envejecimiento}</Row>
                                        <Row>CPU Restante: {this.state.pcb[this.state.running - 1].cpuRestante}</Row>
                                        <Row>Quantum Restante: {this.state.pcb[this.state.running - 1].quantumRestante}</Row>
                                    </>}
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
                                        <Form onSubmit={(e) => e.preventDefault()} className="w-100">
                                            <Form.Select className="py-2 w-100"
                                                value={this.state.algoritmo} onChange={e => this.handleAlgorithmChange(e.target.value)}>
                                                <option>Seleccionar</option>
                                                <option value={1}>FIFO</option>
                                                <option value={2}>Round Robin</option>
                                                <option value={3}>SJF</option>
                                                <option value={4}>SRT</option>
                                                <option value={5}>HRRN</option>
                                            </Form.Select>
                                        </Form>

                                    </Row>
                                    <Row className="mt-2">
                                        <Form onSubmit={(e) => e.preventDefault()}>
                                            <Col>
                                                <Row>
                                                    <Col className="pl-1">
                                                        <Form.Label column style={{ fontSize: 14, minWidth: "135px" }}>Tam Quantum</Form.Label>
                                                    </Col>
                                                    <Col>
                                                        <Form.Control style={{ fontSize: 14, minWidth: 70, maxWidth: 70 }} type="number"
                                                            value={this.state.quantum} onChange={e => { this.handleQuantumChange(e.target.value); }} />
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