

const authorization = (req, res, next) => {
	const { rol } = req.usuario;
	if(rol !== 'admin'){
		res.status(401).json('no tienes permisos para acceder');
	}else{
		next();
	}
};

module.exports = authorization;