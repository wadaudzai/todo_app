import React from 'react';

const StateTry = () => (
  <ul>
    {this.props.works.map((work) => (
      <li key={work.id}>{work.name}</li>
    ))}
  </ul>
);

export default StateTry;
