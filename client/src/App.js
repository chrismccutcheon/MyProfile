import React, { Component } from 'react';
import LeftTabBar from './components/leftTabBar/leftTabBar.js';
import DisplayView from './components/displayView/displayView.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.changeView = this.changeView.bind(this);
    this.state={view: "home"};
  }
  changeView(view){
    this.setState({view: view});
  }
  render() {
    var tabs = [{title: "Home", link: "home"},{title: "Events", link: "events"},{title: "Projects", link: "projects"},{title: "Resume", link: "resume"},{title: "About", link: "about"}, {title: "Contact", link: "contact"}]
    return (
      <div className="App">
        <LeftTabBar tabs={tabs} click={this.changeView}/>
        <DisplayView view={this.state.view}/>
      </div>
    );
  }
}

export default App;
