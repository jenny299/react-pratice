export const requestLogin = info => ({
    type: 'REQUEST_LOGIN',
    info
});

export const loginSuccess = userInfo => ({
    type: 'LOGIN_SUCCESS',
    userInfo
})