const moviesJSON = require('../movies.json');

exports.home = function(req, res){
	let movies = moviesJSON.movies;
	// let moviePosters = [];

	// for(let i = 0; i < movies.length;i++){
	// 	moviePoster = moviePosters.concat[movies[i].poster]
	// }

	res.render('home',{
		title : 'Star Wars Movies',
		movies : movies,
		// moviePoster : moviePoster
	});
};

// movie_single

exports.movie_single = function(req, res){
	let episode_number = req.params.episode_number;
	res.send('This is the page for episode' + episode_number);

};

exports.notFound = function(req, res){
	res.send('This is not the page that you are looking for')
};