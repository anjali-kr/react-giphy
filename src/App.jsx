import './App.css';
import './assets/stylesheets/application.scss';

import { GiphyFetch } from '@giphy/js-fetch-api'
import React, { Component } from 'react'
import Gif from './components/Gif'
import GifList from './components/GifList'
import SearchBar from './components/SearchBar'

// function App() {
// const App = () => {
class App extends Component {

  constructor(props) {
    super(props);

    const temp_gif_list = [
      { id: "BVSMbtX5ZRGqwnCQnX" },
      { id: "dc5NLlkPEj92Vj09IY" },
      { id: "12Ge3LuCAofm2A" },
      { id: "iibH5ymW6LFvSIVyUc"}
    ];
    this.giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)

    this.state = {
      gifs: temp_gif_list,
      selectedGifId: "12Ge3LuCAofm2A",
      searchText: ""
    }
  }

  search = async(query) => {
    // fetch 10 gifs
    console.log('search', query)
    const res = await this.giphy.search(query, { sort: 'relevant', limit: 10})
    // console.log(res.data)
    this.setState({
      gifs: res.data
    })
  }

  handleInput = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.search(this.state.searchText)
  }

  handleClick = (id) => {
    // console.log(id)
    this.setState({
      selectedGifId: id
    })
  }

  render() {
    return (
      <div>
        <div className='left-scene' >
          <SearchBar handleInput={this.handleInput} />
          <button className='search-btn' onClick={this.handleSubmit}>
            Search
          </button>
          <div className="selected-gif">
            <Gif gif_id={this.state.selectedGifId}/>
          </div>

        </div>
        <div className='right-scene' >
          <GifList gifs={this.state.gifs} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
