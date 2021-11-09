import React, { Component } from 'react';
import Profile from '../../../components/profile';

const DATA = [
  {
    name: 'Amaluddin Asyraf',
    // status: ''
    rating: 5,
  },
  {
    name: 'Zhafri',
    rating: 4,
  },
  {
    name: 'Chee Hoe',
    rating: 3,
  },
  {
    name: 'Azizi',
    rating: 2,
  },
  {
    name: 'Zahin',
    rating: 1,
  },
];

export default class CandidateList extends Component {
  render() {
    return (
      <div
      style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}
      >
        {DATA.map((candidate) => (
          <Profile name={candidate.name} rating={candidate.rating} />
        ))}
      </div>
    );
  }
}
