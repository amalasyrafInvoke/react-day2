import React, { Component } from "react";
import Header from "./header";
import CandidateList from "./candidateList";

export default class Content extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection:'column'}}>
        <Header />
        <CandidateList />
      </div>
    )
  }
}