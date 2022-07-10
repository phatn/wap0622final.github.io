const User = require('../models/user');

exports.authenticate = (req, res, next) => {
    let user = User.findAll().find(user => user.username === req.body.username && user.password ===  req.body.password);
    if(user) {

        res.status(200).json({username: user.username, name: user.name, accessToken: `${user.username}_${Date.now()}`});
    } else {
        res.status(200).json({username: req.body.username});
    }
}