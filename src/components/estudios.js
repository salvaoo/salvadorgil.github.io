import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Estudios extends React.Component {
    render() {
        return (
            <Grid>
                <Cell col={3}>
                    <h5>{this.props.añoInicio} {this.props.añoFin}</h5>
                </Cell>
                <Cell col={9}>
                    <h4>{this.props.instituto}</h4>
                    <h5>{this.props.descripcion}</h5>
                </Cell>
            </Grid>
        )
    }   
}

export default Estudios;