import React, { Component } from 'react';
import classes from './profile.module.css';
import icon1 from '../../assets/images/icon_1.png';
import icon2 from '../../assets/images/icon_2.png';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classes.profile_card}>
        <div className={classes.card_top}>
          <div className={classes.profile_pic}>
            {/* <img src={icon} alt='Profile Icon' /> */}
          </div>
          <div>
            <h3>{this.props.name}</h3>
            <h5>Applied Today</h5>
          </div>
          <div>...</div>
        </div>
        <div className={classes.card_bottom}>
          <div
            className={`${classes.profile_rating} ${
              this.props.rating > 3 ? classes.high_rating : classes.low_rating
            } `}
          >
            {this.props.rating} Star Rating
          </div>
          <div className={classes.profile_icon}>
            <img src={icon1} alt='Profile Icon' />
            <img src={icon2} alt='Profile Icon' />
          </div>
        </div>
      </div>
    );
  }
}
