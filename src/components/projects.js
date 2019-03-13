import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import CardProject from './cardProject';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    switch (this.state.activeTab) {
      case 0:
        return(
          <div className="projects-grid">
            <div className="div-card">
              <div className="card">
                <CardProject
                  name="Application Example"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
                  url="https://curatti.com/wp-content/uploads/2017/11/ReactJS-1000x500.jpg"
                />
              </div>
              <div className="card">
                <CardProject
                  name="Application Example"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
                  url="https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                />
              </div>
              <div className="card">
                <CardProject
                  name="Application Example"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
                  url="https://www.mastersoftwaresolutions.com/wp-content/uploads/2018/08/react-native-1.png"
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return(
          <div className="projects-grid">
            <div className="div-card">
              <div className="card">
                <CardProject
                  name="Application Example"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
                  url="https://kaysharbor.com/wp-content/uploads/2018/05/all-about-react-native-apps-776x415.png"
                />
              </div>
              <div className="card">
                <CardProject
                  name="Application Example"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
                  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvuC_8kKyjXJBbiufVsS6VWFoOlEmLM61-QogcP3ITR0D-6i0pA"
                />
              </div>
              <div className="card">
                <CardProject
                  name="Application Example"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
                  url="https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return(
          <div className="projects-grid" >
            <div className="div-card">
              <div className="card">
                <CardProject
                  name="Application Example"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
                  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesbbIBj4QFuKf-XYkzBG80DTQZV9-IaaHTx8vixydQbFKqz8A"
                />
              </div>
              <div className="card">
                <CardProject
                  name="Application Example"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
                  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJGHrR83cfFb8FrmVlu3UBTjBB0cUgtLjqeRJ7MNjAvx_ADvX"
                />
              </div>
              <div className="card">
                <CardProject
                  name="Application Example"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."
                  url="https://cms-assets.tutsplus.com/uploads/users/34/posts/26587/preview_image/preview.jpg"
                />
              </div>
            </div>
          </div>
        );
      default:

    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
          <Tab>React</Tab>
          <Tab>React Native</Tab>
          <Tab>Ruby on Rails</Tab>
        </Tabs>
        <section className="projects">
          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
