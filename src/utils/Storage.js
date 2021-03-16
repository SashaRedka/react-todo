export default class Storage {
    static save (key, value) {
        if (key && value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    static get (key) {
        return JSON.parse(localStorage.getItem(key))
    }
}