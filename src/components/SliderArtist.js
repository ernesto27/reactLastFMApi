import React,{Component} from 'react';
import Slider from 'react-slick';
import emitter from '../emitter';


class SliderArtist extends Component{

	handleClick(artistName){
		emitter.emit('getArtistInfo', artistName);
	}

	render(){
	    var settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 5,
	      slidesToScroll: 1
	    };
	    return (
	      <Slider {...settings}>
	      	{this.props.similarArtists.map((artist) => 
	        	<div>
	        		<a href='#' onClick={() => this.handleClick(artist.name) }>
		        		<img src={artist.image[2]["#text"]} />
		        		<p>{artist.name}</p>
		        	</a>
	        	</div>
	      	)}
	      </Slider>
	    );
	  }
}

export default SliderArtist;