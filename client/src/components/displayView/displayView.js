import React, {Component} from 'react';
import PanelView from './components/panelView/panelView';
import Resume from './components/resume/resume';
import About from './components/about/about';
import Contact from './components/contact/contact';
import './displayView.css';

class DisplayView extends Component{
  render(){
    var view = this.props.view;
    var panel = null;
    if(view === "home" || view==="events" || view==="projects"){
      panel = <PanelView view={view}/>
    } else if(view === "resume"){
      panel = <Resume />;
    } else if(view ==="about"){
      panel = <About />;
    } else if(view ==="contact"){
      panel = <Contact />;
    }

    return(
      <div className="displayView">
        {panel}
      </div>
    );
  }
}

export default DisplayView;
