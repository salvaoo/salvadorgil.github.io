import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Proyectos extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <ReactCSSTransitionGroup transitionName="animacion-principal" transitionAppear={true} transitionAppearTimeout={300} transitionEnter={false} transitionLeave={false}>
                    <div className="proyectos">
                        {/* Proyecto 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*lKN9xV1YEin-2wfAiGySBA.png) center / cover' }}>Proyecto React #1</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* Proyecto 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*lKN9xV1YEin-2wfAiGySBA.png) center / cover' }}>Proyecto React #2</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* Proyecto 3 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*lKN9xV1YEin-2wfAiGySBA.png) center / cover' }}>Proyecto React #3</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </ReactCSSTransitionGroup>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <ReactCSSTransitionGroup transitionName="animacion-principal" transitionAppear={true} transitionAppearTimeout={300} transitionEnter={false} transitionLeave={false}>
                    <div className="proyectos">
                        {/* Proyecto 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '200px', background: 'url(https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg) center / cover' }}>Proyecto Angular #1</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* Proyecto 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '200px', background: 'url(https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg) center / cover' }}>Proyecto Angular #2</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* Proyecto 3 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: 'black', height: '200px', background: 'url(https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg) center / cover' }}>Proyecto Angular #3</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </ReactCSSTransitionGroup>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <ReactCSSTransitionGroup transitionName="animacion-principal" transitionAppear={true} transitionAppearTimeout={300} transitionEnter={false} transitionLeave={false}>
                    <div className="proyectos">
                        {/* Proyecto 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center / cover' }}>Proyecto PHP #1</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* Proyecto 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center / cover' }}>Proyecto PHP #2</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* Proyecto 3 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center / cover' }}>Proyecto PHP #3</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </ReactCSSTransitionGroup>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <ReactCSSTransitionGroup transitionName="animacion-principal" transitionAppear={true} transitionAppearTimeout={300} transitionEnter={false} transitionLeave={false}>
                    <div className="proyectos">
                        {/* Proyecto 1 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '200px', background: 'url(http://2ality.com/2011/10/logo-js/js.jpg) center / cover' }}>Proyecto JavaScript #1</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* Proyecto 2 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '200px', background: 'url(http://2ality.com/2011/10/logo-js/js.jpg) center / cover' }}>Proyecto JavaScript #2</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* Proyecto 3 */}
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '200px', background: 'url(http://2ality.com/2011/10/logo-js/js.jpg) center / cover' }}>Proyecto JavaScript #3</CardTitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </ReactCSSTransitionGroup>
            )
        }
    }

    render() {
        return (
            <ReactCSSTransitionGroup transitionName="animacion-principal" transitionAppear={true} transitionAppearTimeout={300} transitionEnter={false} transitionLeave={false}>
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                        <Tab className="hvr-fade">React</Tab>
                        <Tab className="hvr-fade">Angular</Tab>
                        <Tab className="hvr-fade">PHP</Tab>
                        <Tab className="hvr-fade">JavaScript</Tab>
                    </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="contenido">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default Proyectos;