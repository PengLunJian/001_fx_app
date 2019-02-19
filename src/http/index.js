import apis from '../apis/index';

const http = {
    post: (options) => {
        console.log(arguments);
        return new Promise((resolve, reject) => {
            my.httpRequest({
                url: apis.baseUrl + options.url,
                headers: apis.headers,
                method: apis.method,
                success: (res) => {
                    res = res || {};
                    resolve(res);
                },
                fail: (res) => {
                    res = res || {};
                    reject(res);
                }
            });
        });
    },
}

export default http;