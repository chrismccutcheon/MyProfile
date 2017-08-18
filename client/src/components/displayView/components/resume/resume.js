import React, { Component } from 'react';

class Resume extends Component {
  constructor(props){
    super(props);
    this.state = {res: null};
  }
  componentDidMount(){
    console.log("Hello there");
    return fetch(`/resume`,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }).then(this.checkStatus)
    .then(this.parseJSON)
    .then(this.setResumeData.bind(this));
  }
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }

  parseJSON(response) {
    return response.json();
  }
  setResumeData(data){
    this.setState({
      res: data
    })
  }
  render(){
    const data = this.state.res;
    console.log(data);
    if(data){
      var eduElems = data.resume.education.map((elem) => {
        if(elem.title){
          return (<div key={elem.id.toString()+"edu"} className="resumeElem">
            <h5 className="date">{elem.gradDate}</h5>
            <h5 className="eduElem">{elem.title}</h5>
            <h5 className="eduElem">{elem.school} | {elem.location}</h5>
            <h5 className="eduElem">{elem.degree}</h5>
          </div>)
        } else {
          return (<div key={elem.id.toString()+"exp"} className="resumeElem">
            <h5 className="date">{elem.gradDate}</h5>
            <h5 className="eduElem">{elem.school} | {elem.location}</h5>
            <h5 className="eduElem">{elem.degree}</h5>
            <h5 className="eduElem">{elem.misc}</h5>
          </div>)
        }
      });
      var profElems = data.resume.experience.map((elem) => {
        return (
          <div key={elem.id.toString()+"exp"} className="resumeElem">
            <h5 className="date">{elem.duration}</h5>
            <h5 className="expElem">{elem.employer}</h5>
            <h4 className="expElem">{elem.title} </h4>
            <ul className="rolesList">{
              elem.roles.map((role, i)=>
                <li key={i.toString()+ "role"}>{role}</li>)
              }
            </ul>
          </div>
        )
      });
      var volElems = data.resume.volunteering.map((elem) => {
        return (
          <div key={elem.id.toString()+"exp"} className="resumeElem">
            <h5 className="date">{elem.duration}</h5>
            <h5 className="expElem">{elem.organization}</h5>
            <ul className="rolesList">{
              elem.roles.map((role, i)=>
                <li key={i.toString()+ "role"}>{role}</li>)
              }
            </ul>
          </div>
        )
      });
      var otherElems = data.resume.otherExp.map((elem) => {
        return (
          <div key={elem.id.toString()+"exp"} className="resumeElem">
            <h5 className="date">{elem.duration}</h5>
            <h5 className="expElem">{elem.organization}</h5>
            <h4 className="expElem">{elem.title} </h4>
            <ul className="rolesList">{
              elem.roles.map((role, i)=>
                <li key={i.toString()+ "role"}>{role}</li>)
              }
            </ul>
          </div>
        )
      });
    }
    return (
      <div className="resumeBody">
        <h2 className="eduTitle">Education</h2>
        {eduElems}
        <h2 className="profExpTitle">Professional Experience</h2>
        {profElems}
        <h2 className="profExpTitle">Volunteering</h2>
        {volElems}
        <h2 className="profExpTitle">Other Experience</h2>
        {otherElems}
      </div>
    )
  }
}

export default Resume;
