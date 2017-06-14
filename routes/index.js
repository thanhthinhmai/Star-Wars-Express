exports.home = function(req, res){
	res.render('home',{
		title : 'Star Wars Movies'
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