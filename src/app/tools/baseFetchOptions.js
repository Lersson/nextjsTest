const HttpsProxyAgent = require('https-proxy-agent');

const baseFetchOptions= {};
// if(process.env.HTTP_PROXY) {
    const proxyUrl = new URL('https://proxy.prodemge.gov.br:8080');
    baseFetchOptions.agent = new HttpsProxyAgent({
        host: proxyUrl.hostname,
        port: proxyUrl.port
    });
// }

export default baseFetchOptions;