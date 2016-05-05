typeof module !== 'undefined' && (module.exports = {
    ENV : "development",
    APP: "fabaoM",
    PORT: 3300,
    PEM: 'serverPrivateKey_Alpha.pem',
    BASE_OPENAPI_URL: 'http://openapi.beta.haolawyers.cn/openapi/',
    API_URL: 'http://api.beta.haolawyers.cn/',
    WEB_URL: 'http://m.beta.pocketlawyer.cn/',
    APPID: process.env.APPID || 'qARRzq',
    MQTT_URL: '120.55.198.32',
	MQTT_COUNT_URL: 'http://10.168.10.210:7081',
    SECRET: 'Zf93puv4xqYs3i9D',
    VER:"1.0.0",
    parentProductId: "1166",
    APPINFO:{
        apiVersion: "1.0.0",
        cityCode: "0",
        osType: "3",
        region : "+86"
    },
    STATIC:"/"
});