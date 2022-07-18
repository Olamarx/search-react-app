import React, { Component } from 'react'

export class ImageCard extends Component {
    constructor(props){
        super(props);

        this.state = { spans: 0 }
        this.imageRef = React.createRef();
    }

componentDidMount() {
    // console.log(this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener('load', this.setSpans)
}

setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans })
}

  render() {
    const { urls, alt_description } = this.props.image
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
        ref={this.imageRef}
        src={urls.regular}
        id={this.props.index}
        alt={alt_description}/>
      </div>
    )
  }
}

export default ImageCard