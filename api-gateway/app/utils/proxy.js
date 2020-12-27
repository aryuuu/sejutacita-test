const httpProxy = require('http-proxy');
const querystring = require('querystring');

const create = (target) => {
  const proxy = httpProxy.createProxyServer({
    target: target,
    xfwd: true,
  });

  proxy.on('proxyReq', (proxyReq, req) => {
    if (!req.body || !Object.keys(req.body).length) {
      return;
    }
  
    const contentType = proxyReq.getHeader('Content-Type');
  
    const writeBody = (bodyData) => {
      proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
      proxyReq.write(bodyData);
    }
  
    if (contentType === 'application/json') {
      writeBody(JSON.stringify(req.body));
    }
  
    if (contentType === 'application/x-www-form-urlencoded') {
      writeBody.write(querystring.stringify(req.body));
    }
  });

  return proxy;
}

module.exports = {
  create,
}