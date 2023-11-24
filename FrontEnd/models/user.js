class User {
    constructor() {
        this.id = localStorage.getItem('id');
        this.token = localStorage.getItem('token');
        this.isConnected = !!localStorage.getItem('token');
    }

    setUserId(id) {
        localStorage.setItem('id', id);
        this.id = id;
    }

    setToken(token) {
        localStorage.setItem('token', token);
        this.token = token;
        this.isConnected = true;
    }

    removeToken() {
        localStorage.removeItem('token');
        this.token = null;
        this.isConnected = false;
    }
}

// Usage
export const user = new User(); console.log('user:', user);
