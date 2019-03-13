import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export default class Project extends Component {
  interpolateUrlImg() {
    return `url(${this.props.url}) center / cover`;
  };

  render() {
    return(
      <Card shadow={5} style={{ minWidth: '450', margin: 'auto', marginBottom: '20px'}}>
        <CardTitle style={{ color: '#fff', height: '176px',
          background: this.interpolateUrlImg(), display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end',
          padding: 0 }}>
          <h3 style={{ fontSize: '16px', background: '#37474F', padding: '0px 5px 0px', margin: 0}}>{this.props.name}</h3>
        </CardTitle>
        <CardText>
          {this.props.description}
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>Codepen</Button>
          <Button colored>Live demo</Button>
        </CardActions>
        <CardMenu style={{ color: '#fff' }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    );
  }
}
