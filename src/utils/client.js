const request = require('superagent');

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

function getYoutubeVideos(query) {
 var api_key = "AIzaSyDdy60XJILa67EdMImEplxzhUk0dKh0hwo";
 var part = "snippet";

 request.get(`${BASE_URL}/search?q=${query}&part=${part}&key=${api_key}`)
 .end((err, res) => {
 	console.log(res);
 });
}

getYoutubeVideos("bears");

// export { getYoutubeVideos }