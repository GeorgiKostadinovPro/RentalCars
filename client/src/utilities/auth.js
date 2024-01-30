const getUserInfo = () => {
    return JSON.parse(sessionStorage.getItem('userData'));
}

const setUserInfo = (userData) => {
    const userDataStr = JSON.stringify(userData);
    
    sessionStorage.setItem('userData', userDataStr);
}

const clearUserInfo = () => {
    sessionStorage.removeItem('userData');
}

export { 
    getUserInfo ,
    setUserInfo,
    clearUserInfo
}
