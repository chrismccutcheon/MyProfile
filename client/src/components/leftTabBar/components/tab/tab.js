import React, {Component} from 'react';
import './tab.css';

class Tab extends Component {
  render() {
    return (
      <div className="tab" >
        <button className="tabButton" onClick={()=> {
          this.props.click(this.props.link);
        }}>{this.props.title}</button>
      </div>
    );
  }
}

export default Tab;
