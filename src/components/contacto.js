import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatarContacto from './images/avatar-contacto.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Contacto extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="animacion-principal" transitionAppear={true} transitionAppearTimeout={300} transitionEnter={false} transitionLeaveTimeout={300}>
                <div className="body-contacto">
                    <Grid className="grid-contacto">
                        <Cell col={5}>
                            <h2>Salvador Gil</h2>
                            <img
                                src={avatarContacto}
                                alt="avatar"
                                style={{ height: '350px', borderRadius: '5px', border: 'black 2px solid' }}
                            />
                            <p style={{ width: '75%', margin: 'auto', paddingTop: '16px', textAlign: 'left', paddingLeft: '30px' }}>Soy un joven entusiasta del desarrollo web. No tengo problema con trabajar en proyectos tanto como desarrollador Front-End o Back-End. Futuro desarrollador Full-Stack.<br />
                                También me apasiona la seguridad informática, Big Data y IoT.<br />
                                Pensamientos clave:<br />
                                - No hay nada imposible.<br />
                                - Lo que no se sabe, se puede aprender.<br />
                                - Trabajando en equipo se aprende el doble y mas rápido.</p>
                        </Cell>
                        <Cell col={7}>
                            <h2>Contacto</h2>
                            <hr />

                            <div className="lista-contacto">
                                <List className="contacto-datos">
                                    <ListItem>
                                        <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                            <i className="fa fa-phone-square" aria-hidden="true" />
                                            +34 647 288 896
                                    </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                            salvadorgilrosales@gmail.com
                                    </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                            <i className="fa fa-skype" aria-hidden="true" />
                                            Salvador Gil Rosales
                                    </ListItemContent>
                                    </ListItem>
                                </List>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default Contacto;