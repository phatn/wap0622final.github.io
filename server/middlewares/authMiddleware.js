const Util = require('../util/Util')

module.exports = (req, res, next) => {
    const username = Util.getUsername(req);
    if(username !== 'null' && username) {
        next();
    } else {
        res.status(200).json({error : 'Authentication failed!'});
    }
}