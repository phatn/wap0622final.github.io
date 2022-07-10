import { Config } from "./config.js";

export class Util {

    static getAccessToken = () => sessionStorage.getItem(Config.ACCESS_TOKEN_NAME)

}