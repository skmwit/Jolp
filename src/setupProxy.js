const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports= function(app){
    app.use(
        createProxyMiddleware("/", {
            target:'http://13.124.139.165:3001/',
            changeOrigin:true
        })
    );
}