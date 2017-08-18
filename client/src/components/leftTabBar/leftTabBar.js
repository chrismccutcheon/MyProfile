import React, {Component} from 'react';
import Tab from './components/tab/tab.js';
import './leftTabBar.css';

class LeftTabBar extends Component {

  render() {
    var tabs = this.props.tabs.map((tab, i)=> {
      return (<Tab key={"tabButton"+i} title={tab.title} link={tab.link} click={this.props.click}/>)
    });
    return (
      <div className="tabBar">
        <div className="logoBox">

        </div>
        <div className="tabBox">
          {tabs}
        </div>
      </div>
    );
  }
}

export default LeftTabBar;
