const moviesJSON = require('../movies.json');

exports.home = function(req, res){
	let movies = moviesJSON.movies;
	
	res.render('home',{
		title : 'Star Wars Movies',
		movies : movies,
	});
};

// movie_single

exports.movie_single = function(req, res){
	let episode_number = req.params.episode_number;
	
	let movies = moviesJSON.movies;

	// let movie = movies[episode_number - 1]; 	
	
	if(episode_number >= 1 && episode_number <=6){
		let movie = movies[episode_number - 1];
		let title = movie.title;
		let main_characters = movie.main_characters;
		
		res.render('movie_single', {
			movies : movies,
			movie : movie ,
			title : title,
			main_characters : main_characters
	})
	}else{
		res.render('notFound', {
			movies: movies,
			title: 'This is not the page that you are looking for'
		})
	}
};

exports.notFound = function(req, res){
	let movies = moviesJSON.movies;
	res.render('notFound', {
		movies : movies,
		title: 'This is not the page that you are looking for'
	})
};