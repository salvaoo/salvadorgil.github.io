import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import avatarContacto from './images/avatar-contacto.png';
import Estudios from './estudios';
import Experiencia from './experiencia';

class SobreMi extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="animacion-principal" transitionAppear={true} transitionAppearTimeout={300} transitionEnter={false} transitionLeave={false}>
                <div>
                    <Grid>
                        <Cell className="sobreMi-izquierda" col={4}>
                            <div style={{ textAlign: 'center' }}>
                                <img src={avatarContacto} alt="sobreMi-img" style={{ height: '400px' }} />

                            </div>
                            <h2 style={{paddingTop: '32px'}}>Salvador Gil</h2>
                            <h4 style={{color: 'grey'}}>Programador</h4>
                            <hr style={{borderTop: '3px solid #883fb2', width: '50%'}} />
                            <p>Texto de relleno sobre mi</p>
                            <hr style={{borderTop: '3px solid #883fb2', width: '50%'}} />
                            <h5>Dirección</h5>
                            <p>Peñalara 23, Sevilla, España</p>
                            <h5>Telefono</h5>
                            <p>+34 647 288 896</p>
                            <h5>Email</h5>
                            <p>salvadorgilrosales@gmail.com</p>
                            <hr style={{borderTop: '3px solid #883fb2', width: '50%'}} />
                        </Cell>
                        <Cell className="sobreMi-derecha" col={8}>
                            <h2>Estudios</h2>
                            <Estudios 
                                añoInicio="2017 - "
                                añoFin="2019"
                                instituto="EUSA - Sevilla"
                                descripcion="Grado superior de Desarrollo de Aplicaciones Web."
                            />
                            <Estudios 
                                añoInicio="2014 - "
                                añoFin="2017"
                                instituto="LA SALLE - Jerez de la Frontera"
                                descripcion="Grado medio en Sistemas Microinformáticos y Redes."
                            />
                            <Estudios 
                                añoInicio="2008 - "
                                añoFin="2014"
                                instituto="Madre de Dios - Jerez de la Frontera"
                                descripcion="Graduado escolar Secundaria."
                            />
                            <Estudios 
                                añoInicio="2016"
                                instituto="The Security Sentinel"
                                descripcion="Certificado profesional de Hacking Ético."
                            />
                            <hr style={{borderTop: '3px solid #883fb2', width: '80%'}} />
                            <h2>Experiencia Laboral</h2>
                            <Experiencia 
                                añoInicio="2019"
                                empresa="Ayesa - Sevilla"
                                descripcion="Practicas de empresa como desarrollador de software Java."
                            />
                             <Experiencia 
                                añoInicio="2017 -"
                                añoFin="Actualidad"
                                empresa="TDR Networks - Belfast"
                                descripcion="Teletrabajo desde España como Desarrollador Web."
                            />
                        </Cell>
                    </Grid>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default SobreMi;