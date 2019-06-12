import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Estudios extends React.Component {
    render() {
        return (
            <Grid>
                <Cell col={3}>
                    <h5 className="fecha-sobreMi">{this.props.añoInicio} {this.props.añoFin}</h5>
                </Cell>
                <Cell col={9}>
                    <h4 className="fecha-sobreMi">{this.props.instituto}</h4>
                    <h6 className="fecha-sobreMi">{this.props.descripcion}</h6>
                </Cell>
            </Grid>
        )
    }   
}

export default Estudios;