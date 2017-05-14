import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete'
import api from '../api';
import emitter from '../emitter';

class AutoCompleteSearch extends Component{

	constructor(props) {
		super(props);
		this.state = {
			query: '',
			loading: false,
			items: []
		}
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		emitter.addListener('getArtistInfo', (artistName) => {
			console.log('get artist info and render' + artistName);
			this.getInfo(artistName);
		});
	}	

	handleEnterKey(e){
		if(e.key === 'Enter'){
			console.log('Make search')
		}
	}


	handleChange(e){
		this.setState({
			query: e.target.value
		});

		if(this.state.query.length >= 3){
			this.setState({ loading: true });
			api.searchArtistByName(this.state.query)
				.then((data) => {
					this.setState({
						items: data.results.artistmatches.artist,
						loading: false
					});
			});
		}else{
			this.setState({
				items: []
			});
		}
	}

	onSelect(artistName){
		this.getInfo(artistName);

	}

	getInfo(artistName){
		this.setState({
			query: artistName,
			loading: true
		}, () => {
			api.getArtistInfo(this.state.query)
			   .then((artistData) => {
			   		api.getArtistAlbums(this.state.query)
			   		   .then((albumsData) => {
			   		   		console.log(albumsData)
					   		this.props.onGetDataArtist(artistData, albumsData);
					   		this.setState({
					   			loading: false,
					   			query: ''
					   		});
			   		});

			});
		});

	}


	render(){

		var loading = (this.state.loading) ? <p><br /><img src="loading.gif" /></p> : '';

		return(
			<div className="wrap-autocomplete">
				<Autocomplete
					inputProps={{'className' : 'form-control'}}
					wrapperStyle={{}}
					value={this.state.query}
					items={this.state.items}
					onSelect={this.onSelect.bind(this)}
					onChange={this.handleChange}
					getItemValue={(item) => item.name}
					menuStyle={{'zIndex': 9999}}
					renderItem={(item, isHighlighted) => (
			            <div
			              style={isHighlighted ? styles.highlightedItem : styles.item}
			              key={item.id}
			            >{item.name}</div>
			        )}

				/>
				{loading}


		    </div>
		);
	}
}


let styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },

  menu: {
    border: 'solid 1px #ccc'
  }
}



export default AutoCompleteSearch;




