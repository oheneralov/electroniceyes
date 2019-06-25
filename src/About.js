import React, { Component } from 'react';

class About extends Component {
  constructor(props){
      super(props);
      this.state = {content: 'Loading'}
  }
  componentDidMount(){
      fetch('/backend/about')
      .then(function(response){
           return response.json();
       }
       )
       .then((data) => this.setState({content: data.data}))
  }

  render() {
    return (<div>{this.state.content}</div>);
  }
}

export default About;
