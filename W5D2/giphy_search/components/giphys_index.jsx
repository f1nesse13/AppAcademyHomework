import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ({ giphys }) => {
  console.log(giphys);
  const giphyLi = giphys.map((giphy, i) => <GiphysIndexItem key={i} giphy={giphy} />);
  return <ul>{giphyLi}</ul>;
};

export default GiphysIndex;
