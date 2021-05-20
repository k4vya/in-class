
import React from 'react';
import './App.css';
import * as d3 from 'd3';

class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      data: [], 
      xVariable: 'Sport'
    }
  }

  componentDidMount() { 
    d3.csv('data/medalists.csv').then((d) =>{
      this.setState({data: d})
    })
  }
  render(){
    //console.log(this.state.data);
    let chartData = d3.group()
      .key((d) => d[this.state.xVariable])
      .rollup((d)=> d.length)
      .entries(this.state.data);

      console.log(chartData);
  return (
    <div className="container"></div>
  );
}
}

export default App;
