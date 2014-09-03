var querystring = Npm.require('querystring');

Aweber = {};

var urls = {
  requestToken: "https://auth.aweber.com/1.0/oauth/request_token",
  accessToken: "https://auth.aweber.com/1.0/oauth/access_token",
  authenticate: function(oauthBinding){
    var params = {}

    // allow for reading from config
    if(oauthBinding._config){
      if (oauthBinding._config.name)
        params['name'] = oauthBinding._config.name;
      if (oauthBinding._config.scope)
        params['scope'] = oauthBinding._config.scope;
      if (oauthBinding._config.expiration)
        params['expiration'] = oauthBinding._config.expiration;
    }

    params['oauth_token'] = oauthBinding.requestToken;

    return "https://auth.aweber.com/1.0/authorize?" + querystring.stringify(params);
  }
};

Aweber.otherUsersWhitelistedFields = [];

Aweber.loggedInUserWhitelistedFields = [];

Oauth.registerService('aweber', 1, urls, function(oauthBinding) {
  return null;
});


Aweber.retrieveCredential = function(credentialToken) {
  return Oauth.retrieveCredential(credentialToken);
};
