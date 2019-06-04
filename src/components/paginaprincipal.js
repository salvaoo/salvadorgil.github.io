import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from './images/avatar_fin.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Principal extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="animacion-principal" transitionAppear={true} transitionAppearTimeout={300} transitionEnter={false} transitionLeaveTimeout={300}>
                <div style={{ width: '100%', margin: 'auto' }}>
                    <Grid className="principal-grid">
                        <Cell className="celda-principal" col={12}>
                            <img
                                src={avatar}
                                alt="avatar"
                                className="imagen_avatar"
                            />
                            <div className="texto-banner">
                                <h1>DESARROLLADOR WEB</h1>
                                <hr />
                                <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | MongoDB | SQL | Java</p>
                                <div className="social-links">
                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/salvador-gil-rosales/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square hvr-bob" aria-hidden="true" />
                                    </a>
                                    {/* GitHub */}
                                    <a href="https://github.com/salvaoo" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square hvr-bob" aria-hidden="true" />
                                    </a>
                                    {/* YouTube */}
                                    <a href="https://youtube.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-youtube-square hvr-bob" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default Principal;