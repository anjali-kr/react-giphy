import React, { Component } from 'react'

class Gif extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const src = `https://media3.giphy.com/media/${this.props.gif_id}/giphy.gif`
    return (
      <div onClick={() => this.props.handleClick(this.props.gif_id)}>
        <img src={src} className="gif"  alt="gif" />
      </div>
    )
  }
}

export default Gif;
