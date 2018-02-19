const request = require('superagent');

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

function getYoutubeVideos(query, callback) {

	var modQuery = query.replace(" ", "%20");
	var api_key = "AIzaSyDdy60XJILa67EdMImEplxzhUk0dKh0hwo";
 	var part = "snippet";

 	request.get(`${BASE_URL}/search?q=${modQuery}&part=${part}&key=${api_key}`)
 	.end(callback);
}

//getYoutubeVideos("bears");

export { getYoutubeVideos }