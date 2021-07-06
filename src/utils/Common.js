export const getToken = () => {
    let data = sessionStorage.getItem('login');
    if (data) {
        let parsedData = JSON.parse(data);
        let token = parsedData.token
        return token;
    } else return null;
    // return sessionStorage.getItem('login') || null
}

export const getUserName = () => {
    let data = sessionStorage.getItem('login');
    if (data) {
        let parsedData = JSON.parse(data);
        let userName = parsedData.user;
        return userName;
    } else return null;
}

export const clearSessionStorage = () => {
    sessionStorage.removeItem('login');
}
