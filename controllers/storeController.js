exports.myMiddleware = (req, res, next) =>{
	req.name = 'Node';
	next();
}

exports.homePage = (req, res) => {
	res.render('index');
}