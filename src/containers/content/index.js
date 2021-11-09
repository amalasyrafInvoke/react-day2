import React, { Component } from "react";
import Header from "./header";
// import CandidateList from "./candidateList";
import MovieList from "./movieList";
import classes from './content.module.css';

export default class Content extends Component {
  render() {
    return (
      <div className={classes.contentContainer} >
        <Header />
        <MovieList />
      </div>
    )
  }
}