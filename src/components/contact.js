import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell className="contact-info-left" col={6}>
            <h2>Valmy Ericles</h2>
            <img
              src="https://scontent.flec1-1.fna.fbcdn.net/v/t1.0-9/53207586_2214953905489003_1955936314280902656_n.jpg?_nc_cat=100&_nc_ht=scontent.flec1-1.fna&oh=e344e2710e68efac1757433d176113e4&oe=5D143D93"
              alt="avatar"
              style={{ height: '200px', borderRadius: '50%'}}
            />
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo
              utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou
              para fazer um livro de modelos de tipos.
            </p>
          </Cell>

          <Cell className="contact-info-right" col={6}>
            <h2>Contact Me</h2>
            <div>
              <i className="fab fa-whatsapp" style={{ color: '#128c7e' }}></i>
              <p>74-988574803</p>
            </div>
            <div>
              <i className="far fa-envelope"></i>
              <p>valmyericles@gmail.com</p>
            </div>
            <div>
              <i className="fab fa-skype" style={{ color: '#00aff0' }}></i>
              <p>live:valmyericles</p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
