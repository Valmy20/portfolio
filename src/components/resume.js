import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';

export default class Resume extends Component {
  render() {
    return(
      <div className="resume-body">
        <div className="resume">
          <Grid className="resume-grid">
            <Cell col={4} className="about-info">
              <img
                src="https://scontent.flec1-1.fna.fbcdn.net/v/t1.0-9/53207586_2214953905489003_1955936314280902656_n.jpg?_nc_cat=100&_nc_ht=scontent.flec1-1.fna&oh=e344e2710e68efac1757433d176113e4&oe=5D143D93"
                alt="avatar"
                style={{ height: '200px', borderRadius: '50%'}}
              />
              <div className="info">
                <h2 className="name">Valmy Ericles</h2>
                <h3 className="profission">Programmer</h3>
                <hr style={{borderTop: '2px solid #4A148C', width: '60%', marginTop: 0}}/>
                <p style={{ textAlign: 'justify' }}>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo
                  utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou
                  para fazer um livro de modelos de tipos.
                </p>
                <hr style={{borderTop: '2px solid #4A148C', width: '60%', marginTop: 0}}/>
                <p className="info_title">Adrress</p>
                <span>Uibaí-BA - Centro</span>
                <p className="info_title">Phone</p>
                <span>74-988564803</span>
                <p className="info_title">Email</p>
                <span>valmyericles@gmail.com</span>
              </div>

            </Cell>

            <Cell col={8} className="education-info">
              <div className="education">
                <h1>Education</h1>
                <Education
                  date="2011-2014"
                  title="Title education"
                  description="Lorem Ipsum é simplesmente uma simulação de texto da
                  indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor
                  desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos."
                />
                <Education
                  date="2015-2019"
                  title="Other title"
                  description="Lorem Ipsum é simplesmente uma simulação de texto da
                  indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor
                  desconhecido pegou uma bandeja de tipos e os embaralhou."
                />
              </div>

              <hr style={{borderTop: '2px solid #4A148C', width: '80%', marginTop: 0}}/>

              <div className="experience">
                <h1>Experience</h1>
                <Experience
                  date="2015-2019"
                  title="Other title"
                  description="Lorem Ipsum é simplesmente uma simulação de texto da
                  indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor
                  desconhecido pegou uma bandeja de tipos e os embaralhou."
                />
                <Experience
                  date="2015-2019"
                  title="Other title"
                  description="Lorem Ipsum é simplesmente uma simulação de texto da
                  indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"
                />
              </div>

              <hr style={{borderTop: '2px solid #4A148C', width: '80%', marginTop: 0}}/>

              <div className="skills">
                <h1>Skills</h1>
                <Skill name="Ruby on Rails" percentage="70" />
                <Skill name="TDD" percentage="50" />
                <Skill name="Docker" percentage="50" />
                <Skill name="React" percentage="56" />
                <Skill name="React Native" percentage="56" />
                <Skill name="Git" percentage="63" />
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
