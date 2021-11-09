import React, { Component } from 'react';
import classes from './movie.module.css';

export default class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classes.movieCard}>
        <div>
          <img src={this.props.url} alt='' height={350} width={250} />
        </div>
        <h3>{this.props.name}</h3>
        <h5>Recommended By: {this.props.by}</h5>
        <h5>{this.props.release_date}</h5>
        {this.props.tagline && <h5>"{this.props.tagline}"</h5>}
      </div>
    );
  }
}
