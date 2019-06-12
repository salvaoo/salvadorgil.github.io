import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import avatarContacto from './images/avatar-contacto.png';
import Estudios from './estudios';
import Experiencia from './experiencia';
import Competencias from './competencias';

class SobreMi extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="animacion-principal" transitionAppear={true} transitionAppearTimeout={300} transitionEnter={false} transitionLeave={false}>
                <div>
                    <Grid className="grid-sobreMi">
                        <Cell className="sobreMi-izquierda" col={4}>
                            <div style={{ textAlign: 'center' }}>
                                <img src={avatarContacto} alt="sobreMi-img" style={{ height: '400px', borderRadius: '5px', border: 'black 2px solid' }} />
                            </div>
                            <div className="informacion-sobreMi" style={{textAlign: 'center'}}>
                                <h2 style={{ paddingTop: '32px', fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }}>Salvador Gil</h2>
                                <h4 style={{ color: '#212f3d', fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }}>Mi Historia</h4>
                                <hr style={{ borderTop: '3px solid #883fb2', width: '70%', margin: 'auto' }} />
                                <p>Se podría decir que soy un friki del <b>desarrollo</b>, la <b>seguridad</b>, el <b>software</b> y la <b>tecnología</b>. Unas de mis primeras pasiones por las que sigo muy interesado y que me sumergieron en el mundo de la informática y el desarrollo fue la <b>Seguridad Informática</b> y el <b>Hacking</b>.</p>
                                <p>Después de realizar un curso de hacking y adentrarme en este mundo, descubrí que la informática era mi pasión. Decidí estudiar y aprender programación para convertirme en lo que poco a poco estoy consiguiendo.. <b>DESARROLLADOR FULL STACK</b>.</p>
                                <hr style={{ borderTop: '3px solid #883fb2', width: '50%', margin: 'auto' }} />
                                <h5>Dirección</h5>
                                <p>Peñalara 23, Sevilla, España</p>
                                <h5>Telefono</h5>
                                <p>+34 647 288 896</p>
                                <h5>Email</h5>
                                <p>salvadorgilrosales@gmail.com</p>
                                <hr style={{ borderTop: '3px solid #883fb2', width: '50%', margin: 'auto' }} />
                            </div>
                        </Cell>
                        <Cell className="sobreMi-derecha" col={8}>
                            <h2 style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}}>Estudios</h2>
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

                            <hr style={{ borderTop: '3px solid #883fb2', width: '80%' }} />

                            <h2 style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}}>Experiencia Laboral</h2>
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
                            <Experiencia
                                añoInicio="2019"
                                empresa="Nuevas Profesiones"
                                descripcion="Desarrollo de una skill con GAS para el tratamiento de duplicados en las hojas de cálculo excel. Proyecto realizado para el profesorado de Nuevas Profesiones."
                            />
                            <Experiencia
                                añoInicio="2019"
                                empresa="Nuevas Profesiones"
                                descripcion="Desarrollo de una skill con GAS para volcar datos de un HTML a una hoja de Excel realizando los filtros y ordenando los datos de la forma solicitada. Proyecto realizado para el profesorado de Nuevas Profesiones."
                            />

                            <hr style={{ borderTop: '3px solid #883fb2', width: '80%' }} />

                            <h2 style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}}>Habilidades</h2>
                            <Competencias
                                competencia="JavaScript"
                                progreso={100}
                            />
                            <Competencias
                                competencia="HTML/CSS"
                                progreso={100}
                            />
                            <Competencias
                                competencia="PHP"
                                progreso={80}
                            />
                            <Competencias
                                competencia="Java"
                                progreso={80}
                            />
                            <Competencias
                                competencia="SQL"
                                progreso={80}
                            />
                            <Competencias
                                competencia="NodeJS"
                                progreso={60}
                            />
                            <Competencias
                                competencia="TypeScript"
                                progreso={65}
                            />
                            <Competencias
                                competencia="React"
                                progreso={60}
                            />
                            <Competencias
                                competencia="Angular"
                                progreso={50}
                            />
                            <Competencias
                                competencia="MongoDB"
                                progreso={50}
                            />
                            <Competencias
                                competencia="Python"
                                progreso={40}
                            />
                        </Cell>
                    </Grid>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default SobreMi;