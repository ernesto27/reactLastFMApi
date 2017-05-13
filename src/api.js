import config from './config';

var api = {
	apiKey: config.apiKey,
	endpoint: config.endpoint,
	methodSearch: 'search',
	methodInfo: 'getinfo',

	searchArtistByName(query){
		return fetch(this.endpoint + '?method=artist.' + this.methodSearch + '&artist='+ query +'&limit=10&api_key=' + this.apiKey + '&format=json')
			     .then((response) => {
					return response.json()
			    });
	},

	getArtistInfo(name){
		return fetch(this.endpoint + '?method=artist.' + this.methodInfo + '&artist='+ name +'&limit=10&api_key=' + this.apiKey + '&format=json')
			     .then((response) => {
					return response.json()
			    });
	}
}


export default api;