import React, { Component } from 'react';
import classes from './header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Senior Product Designer</h1>
        <ul>
          <li>Design</li>
          <li>Full Time</li>
          <li>Kuala Lumpur, Malaysia</li>
        </ul>
      </header>
    )
  }
}
