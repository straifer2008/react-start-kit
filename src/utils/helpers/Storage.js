export default class Storage {
  static token;

  static set(key, token) {
    if (token && key) {
      this.token = token;
      localStorage.setItem(key, token);
    }
  }

  static get(key = process.env.REACT_APP_TOKEN_KEY) {
    this.token = localStorage.getItem(key);
    return this.token;
  }

  static remove(key) {
    this.token = null;
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}
