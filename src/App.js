import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import SearchArtist from './pages/SearchArtist';
import AlbumDetail from './pages/AlbumDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SearchArtist} />
          <Route exact path="/albumDetail/:artist/:album" component={AlbumDetail} />

          <br />
        </div>
      </Router>
    );
  }
}

export default App;
