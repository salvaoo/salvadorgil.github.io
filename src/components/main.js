import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Principal from './paginaprincipal';
import Contacto from './contacto';
import SobreMi from './sobremi';
import Proyectos from './proyectos';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Principal} />
        <Route path="/sobre_mi" component={SobreMi} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/proyectos" component={Proyectos} />
    </Switch>
)

export default Main;