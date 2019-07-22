import React, { Component } from 'react';
import GiphysIndex from './giphys_index';

class GiphysSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { search_term: '', giphysData: [] };
    this.fetchSearchGiphys = this.props.fetchSearchGiphys.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ search_term: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchSearchGiphys(this.state.search_term).then(res => {
      this.setState({ search_term: '', giphysData: res.giphys.data });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            name="search_term"
            onChange={this.handleChange.bind(this)}
            value={this.state.search_term}
          />
          <button type="submit">Submit</button>
        </form>
        <GiphysIndex giphys={this.state.giphysData} />
      </div>
    );
  }
}

export default GiphysSearch;
