import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProgressBar from './progressBar';

export default class Skill extends Component {

  render() {
    return(
      <div className="skill-component">
        <div className="skill">
        <Grid className="grid-skill">
          <Cell col={4} className="skill-name">
            <p>{this.props.name}</p>
          </Cell>

          <Cell col={8} className="skill-progress">
            <div><ProgressBar percentage={this.props.percentage} /></div>
          </Cell>
        </Grid>
        </div>
      </div>
    );
  }
}
