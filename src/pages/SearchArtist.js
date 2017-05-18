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

    componentWillMount(){
        if(localStorage.getItem('artistInfo') != null && localStorage.getItem('artistAlbums') != null ){
            this.setState({
              artistInfo: JSON.parse(localStorage.getItem('artistInfo')),
              artistAlbums: JSON.parse(localStorage.getItem('artistAlbums'))
            });
        }

    }

    onGetDataArtist(data, albumsData){
      this.setState({
        artistInfo: data.artist,
        artistAlbums: albumsData.topalbums.album
      });

      // Guardo data de artista y album en localstorage
      localStorage.setItem('artistInfo', JSON.stringify(data.artist));
      localStorage.setItem('artistAlbums', JSON.stringify(albumsData.topalbums.album));

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
