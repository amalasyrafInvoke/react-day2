import React, { Component } from "react";

export default class MenuSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 style={{color: 'grey'}}>
          {this.props.sectionTitle}
        </h3>
        {this.props.children}
      </div>
    )
  }
}