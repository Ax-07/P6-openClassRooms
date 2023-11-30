class User {
    constructor() {
        if (User.exists) {
            console.warn('User already exists');
        }
        else {
            this.id = localStorage.getItem('id');
            this.token = localStorage.getItem('token');
            this.isConnected = !!localStorage.getItem('token');
        }
        User.exists = true;
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

export const user = new User(); console.log('user:', user);
const user2 = new User(); console.log('user2:', user2);
