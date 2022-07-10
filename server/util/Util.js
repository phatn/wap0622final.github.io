module.exports = class Util {

    static getUsername(req) {
        const authorization = req.headers.authorization;
        const accessToken = authorization.split(' ')[1];
        return accessToken.split('_')[0];
    }
}