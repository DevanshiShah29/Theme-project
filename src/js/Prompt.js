import React, { Component } from 'react'

export default class Prompt extends Component {
  componentDidMount(){
    let txt;
    let person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person ;
    }
    document.getElementById("paragraph").innerHTML = txt;
  }
  render() {
    
    return (
      <div id="paragraph">
       
      </div>
    )
  }
}


