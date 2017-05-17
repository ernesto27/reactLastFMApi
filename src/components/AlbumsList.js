import React, {Component} from 'react';
import {Media} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';

class AlbumsList extends Component{
    render(){
        return(
            <div>
    			{this.props.albums.map((album, key) =>
    				<Media key={key}>
    					<Media.Left>
                            <Link to={'/albumDetail/' + album.artist.name + '/' + album.name }>
    						    <img width={64} height={64} src={album.image[0]['#text']} alt="Image"/>
                            </Link>
                        </Media.Left>
    					<Media.Body>
    						<Media.Heading>{album.name}</Media.Heading>
    					</Media.Body>
    				</Media>
    			)}
    		</div>
        );
    }
}

export default AlbumsList;
