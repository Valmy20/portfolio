import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class LandingPage extends Component {
  render() {
    return(
      <div className="landing-page" style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <div className="content">
                <h1>Web Developer</h1>
                <hr/>
                <p>React | React Native | Ruby on Rails | Git | Docker | TDD</p>
                <div className="social-links">
                 <a href="https://www.linkedin.com/in/valmy-machado-55b185125/" rel="noopener noreferrer" target="_blank">
                   <i className="fab fa-linkedin" aria-hidden="true" />
                 </a>
                 <a href="https://github.com/Valmy20" rel="noopener noreferrer" target="_blank">
                   <i className="fab fa-github-square" aria-hidden="true" />
                 </a>
                </div>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
