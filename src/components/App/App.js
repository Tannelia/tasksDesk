import React, { Component } from 'react';
import { connect } from "react-redux";
import dispatch from "../../store/dispatch.js";
import Column from "../Column/Column";
import './App.css';

class App extends Component {
  render() {
    const allData = this.props.allData;
    const namesColumn = allData.map(data => data.name);

    return (
      <div className="App">
        <div className="wrapper">
          {allData.map(data => <Column dataColumn={data} key={data.id} namesColumn={namesColumn} />)}

        </div>

      </div>
    );
  }
}

export default connect(
  dispatch.mapStateToProps,
  dispatch.mapDispatchToProps
)(App);
