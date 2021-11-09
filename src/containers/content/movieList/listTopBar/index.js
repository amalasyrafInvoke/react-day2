import React, { Component } from 'react';
import classes from './topbar.module.css';

export default class TopBar extends Component {
  render() {
    return (
      <div className={classes.topBar_container}>
        <div className={classes.topBar_select}>
          <label htmlFor='filter-select'>Sort By</label>
          <select name='filter' id='filter'>
            <option value='volvo'>Duration</option>
            <option value='saab'>Released Year</option>
            <option value='mercedes'>Alphabet (A-Z)</option>
            <option value='audi'>Alphabet (Z-A)</option>
          </select>
        </div>
        <div className={classes.topBar_icon}>
          <p>Icon 1</p>
          <p>Icon 2</p>
        </div>
      </div>
    );
  }
}
