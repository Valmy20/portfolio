import React, { Component } from 'react';
import './App.scss';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh', position: 'relative'}}>
          <Layout fixedHeader>

              <Header className="header-color" title={<Link to="/" className="navbar-logo"><i className="fas fa-home"></i></Link>}>
                  <Navigation className="navigation-desktop">
                      <Link to="/resume">Resumo</Link>
                      <Link to="/projects">Projetos</Link>
                      <Link to="/contact">Contato</Link>
                  </Navigation>
              </Header>
              <Drawer className="drawer-mobile">
                  <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resumo</Link>
                    <Link to="/projects">Projetos</Link>
                    <Link to="/contact">Contato</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <div className="page-content" />
                <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
