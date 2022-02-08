const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app){
    app.use(
        createProxyMiddleware("/api/shop",{
            target:"http://localhost:3003/",
            pathRewrite: {"^/api/shop": ""}
        })
    )
}