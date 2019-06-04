import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import pdf from './web/Salvador_Gil.pdf';

function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="SALVADOR GIL" scroll>
                    <Navigation>
                        <Link className="hvr-grow" to="/">INICIO</Link>
                        <Link className="hvr-grow" to="/sobre_mi">SOBRE MI</Link>
                        <Link className="hvr-grow" to="/proyectos">PROYECTOS</Link>
                        <Link className="hvr-grow" to="/contacto">CONTACTO</Link>
                        <Link className="hvr-grow" to={pdf} target="_blank">CV</Link>
                    </Navigation>
                </Header>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
}

export default App;
