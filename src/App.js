import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import 'semantic-ui-css/semantic.min.css'
import { Menu, Segment } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  render() {
    const { activeItem } = this.state;
    let activeSegment;

    switch(activeItem) {
      case 'Home': activeSegment=(<Home />); break;
      case 'Services': activeSegment = (<Services />); break;
      case 'About': activeSegment=(<About />); break;
      default: activeSegment=(<Home />); break;
    }

    return (
      <div className="App">
        <Header />
        <div className="body">
          <Menu pointing>
            <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
            <Menu.Item name='Services' active={activeItem === 'Services'} onClick={this.handleItemClick} />
            <Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
          </Menu>

          <Segment>
            {activeSegment}
          </Segment>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
