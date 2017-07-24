const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
	//const ntinos = {name: 'ntinos', age: 1234, node: true};
	//res.json(ntinos);
	//res.send(req.query.name);
	//res.json(req.query);
	res.render('hello', {
		what: 'Coming',
		when: 'Soon'
	});

});


router.get('/name/:name', (req, res) => {
	const name = [...req.params.name].reverse().join("");
	res.send(name);
});

module.exports = router;
