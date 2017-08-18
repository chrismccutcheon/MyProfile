import React, {Component} from 'react';
import './panelView.css'

class PanelView extends Component{
  render(){
    return (
      <div className="panelWindow">
        <div className="panel">
          <p> {this.props.view}</p>
        </div>
      </div>
    )
  }
}

export default PanelView;
