module.exports = class Util {

    static getUsername(req) {
        const authorization = req.headers.authorization;
        const authorizationArr = authorization.split(' ');
        if(authorizationArr.length > 1) {
            const accessToken = authorizationArr[1];
            const accessTokenArr = accessToken.split('_');
            if(accessTokenArr.length > 0) {
                return accessTokenArr[0];
            }
        }

        return '';
    }
}