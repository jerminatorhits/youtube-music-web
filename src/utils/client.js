const axios = require('axios');

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

function getYoutubeVideos(query) {

	var modQuery = query.replace(" ", "%20");
	var api_key = "AIzaSyDdy60XJILa67EdMImEplxzhUk0dKh0hwo";
 	var part = "snippet";
 	return axios.get(`${BASE_URL}/search?q=${modQuery}&part=${part}&key=${api_key}`); 
}

//example use: getYoutubeVideos("bears");

export { getYoutubeVideos }