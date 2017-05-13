import React, { Component } from 'react';
import AutoCompleteSearch from './components/AutoCompleteSearch';
import ArtistInfo from './components/ArtistInfo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artistInfo: null
    }
  }

  onGetDataArtist(data){
    this.setState({
      artistInfo: data.artist
    });
    console.log(this.state)
  }

  render() {
    var artist = (this.state.artistInfo) ? <ArtistInfo artist={this.state.artistInfo}/> : '';
    

    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <h2>Last FM API</h2>
            <AutoCompleteSearch onGetDataArtist={this.onGetDataArtist.bind(this)} />
          </div>
        </div>
        <br />
        {artist}

        <br />
      </div>

    );
  }
}

export default App;
