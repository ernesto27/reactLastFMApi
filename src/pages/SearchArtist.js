import React,{Component} from 'react';
import ArtistInfo from '../components/ArtistInfo';
import AutoCompleteSearch from '../components/AutoCompleteSearch';

class SearchArtist extends Component{
    constructor(props) {
      super(props);
      this.state = {
        artistInfo: null,
        artistAlbums: null
      }
    }

    onGetDataArtist(data, albumsData){
      this.setState({
        artistInfo: data.artist,
        artistAlbums: albumsData.topalbums.album
      });
      console.log(this.state)

    }
    render(){
        var artist = (this.state.artistInfo)
            ? <ArtistInfo artist={this.state.artistInfo} albums={this.state.artistAlbums}/>
            : '';

        return(
            <div>
                <div className="row">
                  <div className="col-md-10">
                    <h2>Last FM API</h2>
                    <AutoCompleteSearch onGetDataArtist={this.onGetDataArtist.bind(this)} />
                  </div>
                </div>
                {artist}
            </div>
        );

    }
}


export default SearchArtist;
