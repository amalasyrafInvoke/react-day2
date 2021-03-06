import React, { Component } from 'react';
import Movie from '../../../../components/movie';
import classes from './movies.module.css';
import moviesArr from '../../../../resources/movies.json';

export default class Movies extends Component {
  render() {
    return (
      <div className={classes.moviesContainer}>
        {moviesArr.movies.map((movie) => (
          <Movie
            key={movie.id}
            name={movie.name}
            by={movie.recommended_by}
            release_date={movie.release_date}
            tagline={movie.tagline}
            url={movie.url}
          />
        ))}
      </div>
    );
  }
}
