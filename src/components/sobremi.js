import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SobreMi extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="animacion-principal" transitionAppear={true} transitionAppearTimeout={300} transitionEnter={false} transitionLeave={false}>
                <div>
                    <Grid>
                        <Cell className="sobreMi-izquierda" col={4}>Left Side</Cell>
                        <Cell className="sobreMi-derecha" col={8}>Right Side</Cell>
                    </Grid>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default SobreMi;