const apis = {
    baseUrl: '/api/',
    method: 'POST',
    timeout: 20000,
    dataType: 'json',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    login: {
        url: 'login',
        params: {
            username: 'PENG',
            password: '18130278679'
        }
    }
};

export default apis;