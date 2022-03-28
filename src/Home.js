import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Table } from "react-bootstrap";

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
            pgFaults: [],
            finished: [4, 5],
            quantum: 5,
            algoritmo: 2,
            maxProc: 10,
            concurrentes: 6,
            otroEjecCont: 1,
            reemplazo: 4,
            maxPags: 3,
            pcb: [{
                nombre: 1,
                llegada: 10,
                cpuAsignado: 0,
                envejecimiento: 5,
                cpuRestante: 10,
                quantumRestante: 0,
                pc: 0,
                numPags: 4,
                pags: [{
                    num: 0,
                    bitResidencia: 1,
                    llegada: 8,
                    ultAcceso: 13,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 1,
                    bitResidencia: 0,
                    llegada: 0,
                    ultAcceso: 0,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 2,
                    bitResidencia: 1,
                    llegada: 11,
                    ultAcceso: 17,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 3,
                    bitResidencia: 1,
                    llegada: 12,
                    ultAcceso: 16,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                }]
            },
            {
                nombre: 2,
                llegada: 14,
                cpuAsignado: 0,
                envejecimiento: 8,
                cpuRestante: 3,
                quantumRestante: 0,
                pc: 0,
                numPags: 4,
                pags: [{
                    num: 0,
                    bitResidencia: 1,
                    llegada: 8,
                    ultAcceso: 13,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 1,
                    bitResidencia: 0,
                    llegada: 0,
                    ultAcceso: 0,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 2,
                    bitResidencia: 1,
                    llegada: 11,
                    ultAcceso: 17,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 3,
                    bitResidencia: 1,
                    llegada: 12,
                    ultAcceso: 16,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                }]
            },
            {
                nombre: 3,
                llegada: 28,
                cpuAsignado: 0,
                envejecimiento: 1,
                cpuRestante: 43,
                quantumRestante: 0,
                pc: 0,
                numPags: 4,
                pags: [{
                    num: 0,
                    bitResidencia: 1,
                    llegada: 8,
                    ultAcceso: 13,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 1,
                    bitResidencia: 0,
                    llegada: 0,
                    ultAcceso: 0,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 2,
                    bitResidencia: 1,
                    llegada: 11,
                    ultAcceso: 17,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 3,
                    bitResidencia: 1,
                    llegada: 12,
                    ultAcceso: 16,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                }]
            }, {
                nombre: 4,
                llegada: 39,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 12,
                quantumRestante: 0,
                pc: 0,
                numPags: 4,
                pags: [{
                    num: 0,
                    bitResidencia: 1,
                    llegada: 8,
                    ultAcceso: 13,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 1,
                    bitResidencia: 0,
                    llegada: 0,
                    ultAcceso: 0,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 2,
                    bitResidencia: 1,
                    llegada: 11,
                    ultAcceso: 17,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 3,
                    bitResidencia: 1,
                    llegada: 12,
                    ultAcceso: 16,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                }]
            }, {
                nombre: 5,
                llegada: 40,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 8,
                quantumRestante: 0,
                pc: 0,
                numPags: 4,
                pags: [{
                    num: 0,
                    bitResidencia: 1,
                    llegada: 8,
                    ultAcceso: 13,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 1,
                    bitResidencia: 0,
                    llegada: 0,
                    ultAcceso: 0,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 2,
                    bitResidencia: 1,
                    llegada: 11,
                    ultAcceso: 17,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 3,
                    bitResidencia: 1,
                    llegada: 12,
                    ultAcceso: 16,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                }]
            }, {
                nombre: 6,
                llegada: 57,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 90,
                quantumRestante: 0,
                pc: 0,
                numPags: 4,
                pags: [{
                    num: 0,
                    bitResidencia: 1,
                    llegada: 8,
                    ultAcceso: 13,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 1,
                    bitResidencia: 0,
                    llegada: 0,
                    ultAcceso: 0,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 2,
                    bitResidencia: 1,
                    llegada: 11,
                    ultAcceso: 17,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 3,
                    bitResidencia: 1,
                    llegada: 12,
                    ultAcceso: 16,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                }]
            }, {
                nombre: 7,
                llegada: 62,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 128,
                quantumRestante: 0,
                pc: 0,
                numPags: 4,
                pags: [{
                    num: 0,
                    bitResidencia: 1,
                    llegada: 8,
                    ultAcceso: 13,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 1,
                    bitResidencia: 0,
                    llegada: 0,
                    ultAcceso: 0,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 2,
                    bitResidencia: 1,
                    llegada: 11,
                    ultAcceso: 17,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 3,
                    bitResidencia: 1,
                    llegada: 12,
                    ultAcceso: 16,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                }]
            }, {
                nombre: 8,
                llegada: 77,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: 6,
                quantumRestante: 5,
                pc: 0,
                numPags: 4,
                pags: [{
                    num: 0,
                    bitResidencia: 1,
                    llegada: 8,
                    ultAcceso: 13,
                    accesos: 5,
                    lectura: 0,
                    escritura: 0,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 1,
                    bitResidencia: 0,
                    llegada: 0,
                    ultAcceso: 0,
                    accesos: 5,
                    lectura: 1,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                },
                {
                    num: 2,
                    bitResidencia: 1,
                    llegada: 11,
                    ultAcceso: 17,
                    accesos: 5,
                    lectura: 0,
                    escritura: 1,
                    modificacion: 1,
                    contAccesos: 0
                },
                {
                    num: 3,
                    bitResidencia: 1,
                    llegada: 12,
                    ultAcceso: 16,
                    accesos: 5,
                    lectura: 1,
                    escritura: 1,
                    modificacion: 0,
                    contAccesos: 0
                }]
            }]
        };
    }

    handleNew() {
        if (this.state.concurrentes < this.state.maxProc) {
            let newPags = [];

            for(let i=0; i<this.state.pags; i++){
                let newPag = {
                    num: i,
                    bitResidencia: 0,
                    llegada: 0,
                    ultAcceso: 0,
                    accesos: 0,
                    lectura: 0,
                    escritura: 0,
                    modificacion: 0,
                    contAccesos: 0
                }
                newPags.push(newPag)
            }

            let newProc = {
                nombre: this.state.procesoCont,
                llegada: this.state.tiempoActual,
                cpuAsignado: 0,
                envejecimiento: 0,
                cpuRestante: this.state.ejec,
                quantumRestante: 0,
                pc: 0,
                numPags: this.state.pags,
                pags: newPags
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
                this.handleEjec();
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
                this.handleEjec();
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
                this.handleEjec();
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
                this.handleEjec();
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
                this.handleEjec();
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
                this.handleEjec();
                break;
            default:
                console.log(interrupt);
                break;
        }
        
    }

    ejecutarPagina(pagina) {
        if(pagina === "Seleccionar"){
            return;
        }
    
        this.handleEjec();

        if (this.state.pcb[this.state.running - 1].pags[pagina].bitResidencia == 1) {

            this.state.pcb[this.state.running - 1].pags[pagina].lectura = 1;
            this.state.pcb[this.state.running - 1].pags[pagina].contAccesos++;
            this.state.pcb[this.state.running - 1].pags[pagina].accesos++;
            this.state.pcb[this.state.running - 1].pags[pagina].ultAcceso = this.state.tiempoActual;

            if(this.state.pcb[this.state.running - 1].pags[pagina].contAccesos >= 5) {
                this.state.pcb[this.state.running - 1].pags[pagina].modificacion = 1;
                this.state.pcb[this.state.running - 1].pags[pagina].escritura = 1;
                this.state.pcb[this.state.running - 1].pags[pagina].contAccesos = 0;
            }

            //this.setState({ pagina: pagina });

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
        } else {
            this.state.pgFaults.push(this.state.running);
            this.state.pcb.map((proc) => {
                if (proc.nombre === this.state.ready[0]) {
                    proc.quantumRestante = this.state.quantum;
                }
            })
            this.setState({ running: this.state.ready[0] });
            this.state.ready.shift();
            this.prioritizeReady(this.state.algoritmo);
            
            // DUDA: cuando se regresa de blocked a ready? (creo q cuando ya tiene la pg)
            // DUDA: cuando va blocked -> ready, tmb quita al que esta en running? (creo q si)
            // DUDA: cuando se carga, cambias llegada? (creo q si)
            // DUDA: cuando un proceso va ready -> running, qué pg se ejecuta? (creo q en la q se quedo ej pc)
            // DUDA: cuando un proceso va ready -> running, hacemos que en auto se ejecute la pg en pc? (creo q no)
            // todo OK check
            
            this.solicitarPagina(pagina);

            setTimeout(() => {
                if (this.state.pgFaults.length != 0) {
                    this.state.ready.push(this.state.running);

                    this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[pagina].llegada = this.state.tiempoActual;
                    this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[pagina].accesos = 0;
                    this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[pagina].contAccesos = 0;
                    this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[pagina].escritura = 0;
                    this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[pagina].lectura = 0;
                    this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[pagina].modificacion = 0;
                    this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[pagina].ultAcceso = 0;

                    this.state.ready.push(this.state.pgFaults[0]);
                    this.prioritizeReady(this.state.algoritmo);
                    this.state.pgFaults.shift();
                    this.state.pcb.map((proc) => {
                        if (proc.nombre === this.state.ready[0]) {
                            proc.quantumRestante = this.state.quantum;
                        }
                    })
                    this.setState({ running: this.state.ready[0] });
                    this.state.ready.shift();
                    this.setState({});
                    this.prioritizeReady(this.state.algoritmo);
                }
            }, 2000)
            

        }
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

    handleReplaceChange(reemplazo) {
        this.setState({ reemplazo: reemplazo });
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

    resetNUR() {
        // check DUDA: reset bits NUR es a TODOS los procesos o solo el de running? TODOS
        // check DUDA 2: "asume que cada 5 accesos a una página, ésta se modifica" <-- tenemos que guardar contenido en memoria secundaria? o solo cambiar bit de escritura a 1? SOLO ESCRITURA Y MODIFICACION A 1
        // check DUDA 3: cuándo hay fallo de página? NO HAY BOTON
        // check DUDA 4: qué ponemos en el dropdown de "ejecutar pagina"? NUMS DE C PAG DEL PROCESO

        this.state.pcb.map((proc) => {
            proc.pags.map((pag) => {
                pag.lectura = 0;
                pag.escritura = 0;
            })
        })
        this.setState({});
        return;
    }

    solicitarPagina(solicitud) { // esto es si hay fallo de pagina
        let contPags = 0;
        this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags.map((pag) => contPags += pag.bitResidencia);
        if (contPags >= this.state.maxPags) {
            this.replacePage(this.state.reemplazo, solicitud);
        } else {
            this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[solicitud].bitResidencia = 1;
        }
    }

    replacePage(reemplazo, solicitud) {
        let num = parseInt(reemplazo);
        switch (num) {
            case 1:
                console.log("fifo reemplazo");
                let minFIFO = this.state.tiempoActual;
                let minPagFIFO = -1;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags.map((pag) => {
                    if (pag.bitResidencia === 1) {
                        if (pag.llegada < minFIFO) {
                            minFIFO = pag.llegada;
                            minPagFIFO = pag.num;
                        }
                    }
                });
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[minPagFIFO].bitResidencia = 0;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[minPagFIFO].modificacion = 0;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[solicitud].bitResidencia = 1;
                break;
            case 2:
                console.log("lru");
                let minLRU = this.state.tiempoActual;
                let minPagLRU = -1;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags.map((pag) => {
                    if (pag.bitResidencia === 1) {
                        if (pag.ultAcceso < minLRU) {
                            minLRU = pag.ultAcceso;
                            minPagLRU = pag.num;
                        }
                    }
                });
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[minPagLRU].bitResidencia = 0;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[minPagLRU].modificacion = 0;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[solicitud].bitResidencia = 1;
                break;
            case 3:
                console.log("lfu");
                let minLFU = this.state.tiempoActual;
                let minPagLFU = -1;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags.map((pag) => {
                    if (pag.bitResidencia === 1) {
                        if (pag.accesos < minLFU) {
                            minLFU = pag.accesos;
                            minPagLFU = pag.num;
                        }
                    }
                });
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[minPagLFU].bitResidencia = 0;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[minPagLFU].modificacion = 0;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[solicitud].bitResidencia = 1;
                break;
            case 4:
                console.log("nur");
                let nur00 = -1;
                let nur01 = -1;
                let nur10 = -1;
                let nur11 = -1;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags.map((pag) => {
                    if (parseInt(pag.bitResidencia) === 1) {
                        if (parseInt(pag.lectura) === 0) {
                            if (parseInt(pag.escritura) === 0 && nur00 === -1) {
                                nur00 = pag.num; // pag 3
                                console.log("00")
                                console.log(nur00)
                            }
                            else if (nur01 === -1) {
                                nur01 = pag.num; // pag 0
                            }
                        } else {
                            if (parseInt(pag.escritura) === 0 && nur10 === -1) {
                                nur10 = pag.num; // pag 1
                            }
                            else if (nur11 === -1) {
                                nur11 = pag.num; // pag 2
                            }
                        }
                        /* 
                             L E
                         0   0 1
                         1   1 0
                         2   1 1
                         3   0 0 
                         4   0 0
                        */
                    }
                });

                let pagNUR = -1;
                if (nur00 != -1) {
                    console.log("00")
                    pagNUR = nur00;
                } else if (nur10 != -1) {
                    pagNUR = nur10;
                } else if (nur01 != -1) {
                    pagNUR = nur01;
                } else {
                    pagNUR = nur11;
                }

                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[pagNUR].bitResidencia = 0;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[pagNUR].modificacion = 0;
                this.state.pcb[this.state.pgFaults[this.state.pgFaults.length-1]-1].pags[solicitud].bitResidencia = 1;

                break;
            default:
                console.log(reemplazo);
                break;
        }
    }

    handleFile(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            let text = e.target.result;
            let nums = text.split("\n").map((line) => { return line.split(",").map((num) => { return parseInt(num.trim()) }) });
            let numProc = nums[1][0];
            console.log(nums);
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
                pgFaults: [],
                finished: [],
                maxProc: 10,
                otroEjecCont: 1,
                pcb: []
            });
            let contPags = 0;
            for (let i = 0; i < numProc; i++) {
                let numPags = nums[(2 * (i + 1)) + contPags + 1][0];

                let tempPags = [];
                let pc = -1;

                for (let j = 0; j < numPags; j++) {
                    let newPag = {
                        num: j,
                        bitResidencia: nums[(2 * (i + 1)) + contPags + 1 + j + 1][0],
                        llegada: nums[(2 * (i + 1)) + contPags + 1 + j + 1][1],
                        ultAcceso: nums[(2 * (i + 1)) + contPags + 1 + j + 1][2],
                        accesos: nums[(2 * (i + 1)) + contPags + 1 + j + 1][3],
                        lectura: nums[(2 * (i + 1)) + contPags + 1 + j + 1][4],
                        escritura: nums[(2 * (i + 1)) + contPags + 1 + j + 1][5],
                        modificacion: 0,
                        contAccesos: 0
                    }
                    if(nums[(2 * (i + 1)) + contPags + 1 + j + 1][0] == 1 && pc == -1){
                        pc = j;
                    }
                    tempPags.push(newPag);
                }

                if(pc == -1){
                    pc = 0;
                }

                let newProc = {
                    nombre: (i + 1),
                    llegada: nums[(2 * (i + 1)) + contPags][0],
                    cpuAsignado: 0,
                    envejecimiento: 0,
                    cpuRestante: nums[(2 * (i + 1)) + contPags][1],
                    quantumRestante: 0,
                    pc: pc,
                    numPags: numPags,
                    pags: tempPags
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
                        <b>KERN<span style={{ color: "gold" }}>EL-i</span> SISTEMAS <span style={{ color: "mediumturquoise" }}>ponc-E</span>RATIVOS</b>
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
                                    <Form.Control className="h-100" style={{ fontSize: 14, minWidth: 70, maxWidth: 70 }} type="number"
                                        disabled value={this.state.tiempoActual} /* onChange={e => this.setState({ tiempoActual: e.target.value })}  */ />
                                </Col>

                                <Col style={{ maxWidth: "fit-content" }}>

                                    <Form.Select className="py-2 px-2" style={{ fontSize: 14 }}
                                        value={this.state.pagina} onChange={e => this.ejecutarPagina(e.target.value)}>
                                            <option>Seleccionar</option>
                                        {this.state.running && this.state.pcb[this.state.running - 1].pags.map((pag, key) => {
                                            return <option value={pag.num} key={key}>Ejecutar página {pag.num}</option>
                                        })}
                                    </Form.Select>

                                    {/* <Button variant="secondary" type="submit" style={{ fontSize: 14, minWidth: "140px" }}
                                        onClick={() => { this.ejecutarPagina(); }}>
                                        Ejecutar página
                                    </Button> */}
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col className="py-2 pl-2 ml-3 mt-2" style={{ fontSize: 14, maxWidth: "120px" }}>
                        Interrupción
                    </Col>
                    <Col className="py-2 pl-0" style={{ fontSize: 14, maxWidth: "fit-content" }}>
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
                    <Col className="py-2 ml-3" style={{ fontSize: 14, maxWidth: "fit-content" }}>
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
                                        {this.state.pgFaults.map((proc, key) => <ListGroup.Item className="p-1 w-100 text-center" key={key}>{proc}</ListGroup.Item>)}
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
                <Row style={{ backgroundColor: "yellowgreen" }} className="pb-4">
                    <Col xs={2} className="pt-3">
                        Memoria
                    </Col>
                    <Col xs={6}>
                        <Container className="p-3 h-100">
                            <Row style={{ backgroundColor: "black", color: "white" }}>
                                <Col className="text-center">
                                    Datos
                                </Col>
                            </Row>
                            <Row style={{ minHeight: "200px", backgroundColor: "white", color: "black" }} className="h-100">
                                <Col className="pt-2">
                                    {this.state.running && <Table style={{ fontSize: 12 }}>
                                        <thead>
                                            <tr>
                                                <th>pag</th>
                                                <th>r</th>
                                                <th>llegada</th>
                                                <th>ult acceso</th>
                                                <th>accesos</th>
                                                <th>NUR</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.pcb[this.state.running - 1].pags.map((pag, key) => <tr key={key}>
                                                <td>{pag.num}</td>
                                                <td>{pag.bitResidencia}</td>
                                                <td>{pag.llegada}</td>
                                                <td>{pag.ultAcceso}</td>
                                                <td>{pag.accesos}</td>
                                                <td>{pag.lectura}{pag.escritura}</td>
                                            </tr>)}
                                        </tbody>
                                    </Table>}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-3 h-100">
                            <Row style={{ backgroundColor: "black", color: "white" }}>
                                <Col className="text-center">
                                    Memoria
                                </Col>
                            </Row>
                            <Row style={{ minHeight: "200px", backgroundColor: "white", color: "black", fontSize: 14 }} className="h-100">
                                <Col className="pt-2">
                                    <Row className="px-3">
                                        <Form onSubmit={(e) => e.preventDefault()} className="w-100">
                                            <Form.Select className="py-2 w-100"
                                                value={this.state.reemplazo} onChange={e => this.handleReplaceChange(e.target.value)}>
                                                <option>Seleccionar</option>
                                                <option value={1}>FIFO</option>
                                                <option value={2}>LRU</option>
                                                <option value={3}>LFU</option>
                                                <option value={4}>NUR</option>
                                            </Form.Select>
                                        </Form>

                                    </Row>
                                    <Row className="px-3 mt-2">
                                        <Form onSubmit={(e) => e.preventDefault()} className="w-100">

                                            <Button variant="secondary" type="submit" style={{ fontSize: 14, minWidth: "135px" }} className="w-100"
                                                onClick={() => { this.resetNUR(); }}>
                                                Reset a bits NUR
                                            </Button>

                                        </Form>
                                    </Row>
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