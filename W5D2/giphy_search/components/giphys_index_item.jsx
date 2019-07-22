import React from 'react';

const GiphysIndexItem = ({ key, giphy }) => (
  <li key={key}>
    <img src={giphy.images.downsized_medium.url} />
  </li>
);

export default GiphysIndexItem;
