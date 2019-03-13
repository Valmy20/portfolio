import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Education extends Component {

  render() {
    return(
      <div className="education-component" style={{ border: '2px solid red;'}}>
        <Grid>
          <Cell col={4}><p>{this.props.date}</p></Cell>
          <Cell col={8}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <h4 style={{ marginTop: 0}}>{this.props.title}</h4>
              <p>{this.props.description}</p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
