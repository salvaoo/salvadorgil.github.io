import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Competencias extends React.Component {
    render() {
        return(
            <Grid>
                <Cell col={3}>
                    <h5 className="fecha-sobreMi" style={{margin: '2%'}}>{this.props.competencia}</h5>
                </Cell>
                <Cell col={9}>
                <ProgressBar style={{margin: '1%', width: '65%', display: 'flex' }} progress={this.props.progreso} />
                </Cell>
            </Grid>
        )
    }
}

export default Competencias;