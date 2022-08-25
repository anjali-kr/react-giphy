import React, { Component } from 'react'
import Gif from './Gif'

class GifList extends Component {
  render() {
    const gifs = this.props.gifs.map(item => {
      return <Gif gif_id={item.id} key={item.id} handleClick={this.props.handleClick}/>
    })
    return (
      <div className='gif-list'>
        {gifs}
      </div>
    )
  }
}

export default GifList;
