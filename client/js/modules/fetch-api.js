import { Util } from "./util.js";

export class FetchAPI {

    static async post(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${Util.getAccessToken()}` },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    static async get(url = '') {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${Util.getAccessToken()}` },
        });
        return response.json();
    }

    static async delete(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${Util.getAccessToken()}` },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    static async put(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${Util.getAccessToken()}` },
            body: JSON.stringify(data)
        });
        return response.json();
    }
}