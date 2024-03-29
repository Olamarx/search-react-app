import React, { Component } from 'react'

export class SearchBar extends Component {
constructor(props) {
    super(props);
    this.state = { term: '' };
}


    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
        this.setState({term: ''})
    }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui field">
            <div className="field">
                <label> Image Search </label>
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