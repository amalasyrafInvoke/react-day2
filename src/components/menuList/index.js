import React, { Component } from 'react';
import classes from './menu.module.css';

export default class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: 'Menu 1',
    };
  }
  render() {
    return (
      <div className={classes.menu_holder}>
        <img src={this.props.icon} alt="Icon" />
        <p>{this.props.title}</p>
        {this.props.notification && (<caption>{this.props.notification}</caption>)}
      </div>
    );
  }
}
