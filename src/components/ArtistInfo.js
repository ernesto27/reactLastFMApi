import React, {Component} from 'react';
import {Label, Media} from 'react-bootstrap';
import SliderArtist from './SliderArtist'

function Tags(tags){
  return (
  	<div>
  		{tags.map((key, tag) => 
  			<span key={key}>
    			<Label  bsStyle="primary" style={{ 'font-size' : '12px' }}>{tag.name}</Label>{'   '}
    		</span>
  		)}

 	</div>
 );
}


function Albums(albums){
	return(
		<div>
			{albums.map((album, key) => 
				<Media key={key}>
					<Media.Left>
						<img width={64} height={64} src={album.image[0]['#text']} alt="Image"/>
					</Media.Left>
					<Media.Body>
						<Media.Heading>{album.name}</Media.Heading>
					</Media.Body>
				</Media>
			)}	
		</div>
	);
}



class ArtistInfo extends Component{


	componentDidMount() {

	}

	render(){
		return(
			<div>
				<div className="row">
					<div className="col-md-10">
			          <h4>{this.props.artist.name}</h4>
			          <div className="row">
			            <div className="col-md-4 col-sm-12">
			              <img src={this.props.artist.image[3]['#text']} className="img-responsive" /> 
			            </div>
			  
			            <div className="col-md-8 col-sm-12">
			              <p className="">{this.props.artist.bio.summary}</p>
			            </div>
			          </div>
			        </div>
			    </div>

			    <hr />

			    <div className="row">
			        <div className="col-md-10">
			        	<h5>Discos</h5>
			        	{Albums(this.props.albums)}
			        </div>
			    </div>

			    <hr />
		        <div className="row">
			        <div className="col-md-10">
			        	<label>Tags</label>
			        	{Tags(this.props.artist.tags.tag)}
			        </div>
			    </div>

			    <hr />

			    <div className="row">
			        <div className="col-md-10">
			        	<label>Relation artists</label>
			        	<SliderArtist similarArtists={this.props.artist.similar.artist}/>
			        </div>
			    </div>
		    </div>
		);
	}
}

export default ArtistInfo;