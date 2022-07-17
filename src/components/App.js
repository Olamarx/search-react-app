import React, { Component } from 'react'
import SearchBar from './SearchBar'
import API from '../API/API';
import ImageList from './ImageList';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] }
  }

  onSearchSubmit = async (term) => {
    const response = await API.get('/search/photos', {
    params: { query: term.trim()} 
  })

  this.setState({ images: response.data.results })
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App