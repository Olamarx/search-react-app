import React, { Component } from 'react'

export class SearchBar extends Component {
constructor(props) {
    super(props);
    this.state = { term: '' };
}


    onFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.term)

    }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui field">
            <div className="field">
                <label htmlFor="imput-text" > Image Search </label>
            <input type="text" id="input-text"
            value={this.state.term}
            onChange={(e) =>this.setState({ term: e.target.value })} />
            
            </div>
        </form>
      </div>
    );
  }
}

export default SearchBar