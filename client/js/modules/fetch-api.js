import { Util } from "./util.js";

export class FetchAPI {

    static async post(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${Util.getAccessToken()}` },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    static async get(url = '') {
        console.log(`Inside FetchAPI get: ${Util.getAccessToken()}`)
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${Util.getAccessToken()}` },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        });
        return response.json();
    }

    static async delete(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${Util.getAccessToken()}` },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    static async put(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${Util.getAccessToken()}` },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    }
}