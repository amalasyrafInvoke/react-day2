import React, { Component } from 'react';
import classes from './header.module.css';
import icon1 from '../../../assets/images/icon_10.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <form>
          <input disabled type="text" name="search" id="search-input" placeholder='Search by Title, Genre and Years' />
        </form>
        <div className={classes.headerInfo}>
          <h5>Amaluddin Asyraf</h5>
          <div>
            <img src={icon1} alt="Icon" />
          </div>
          <div>
            Settings
          </div>
        </div>
      </header>
    )
  }
}
