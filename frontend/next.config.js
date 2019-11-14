const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  publicRuntimeConfig: {
    APP_NAME: "SEOBLOG",
    API_DEVELOPMENT: "http://localhost:8000/api",
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: "http://localhost:3000",
    DOMAIN_PRODUCTION: "",
    FACE_APP_ID: "1033238083677412",
    DISQUS_SHORTNAME: "seoblog-5",
    GOOGLE_CLIENT_ID:
      "34174919125-gmd93ursunmdfcv4rdfos6rps7uq42j1.apps.googleusercontent.com"
  }
});
