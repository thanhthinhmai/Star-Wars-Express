const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const routes = require('./routes');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// Routes

// home
app.get('/', routes.home);

//movies_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//notFound
app.get('*', routes.notFound);

app.listen(3000, (req,res) =>{
	console.log('Start port 3000');
})