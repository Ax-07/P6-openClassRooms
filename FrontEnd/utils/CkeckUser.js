const CheckUser = () => {
    const user = localStorage.getItem('user');
    if (user) {
        console.log("user: ",JSON.parse(user));
        return JSON.parse(user);
    }
    return null;
}