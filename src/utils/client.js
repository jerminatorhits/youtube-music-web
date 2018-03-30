const axios = require('axios');

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

function getYoutubeVideos(query) {

	const modQuery = query.replace(" ", "%20");
	const part = "snippet";
 	const maxResults = "10";
 	const type = "video";
 	const api_key = "AIzaSyDdy60XJILa67EdMImEplxzhUk0dKh0hwo";
 	
 	return axios.get(`${BASE_URL}/search?q=${modQuery}&part=${part}&maxResults=${maxResults}&type=${type}&key=${api_key}`); 
}

//example use: getYoutubeVideos("bears");

export { getYoutubeVideos }