import React, { Component } from 'react';
import classes from './movieList.module.css';
import TopBar from './listTopBar';
import Movies from './movies';

// import Profile from '../../../components/profile';

export default class MovieList extends Component {
  render() {
    return (
      <div className={classes.movieListContainer}>
        <TopBar />
        <Movies />
      </div>
    );
  }
}
