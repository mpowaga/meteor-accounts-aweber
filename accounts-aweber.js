Accounts.oauth.registerService('aweber');

if (Meteor.isClient) {
  Meteor.loginWithAweber = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Aweber.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  var forLoggedInUserAutopublishedFields = _.map(
    Aweber.loggedInUserWhitelistedFields.concat(['id', 'fullName']),
    function (subfield) { 
      return 'services.aweber.' + subfield;
    }
  );

  var forOtherUsersAutopublishedFields = _.map(
    Aweber.otherUsersWhitelistedFields.concat(['id', 'fullName']),
    function (subfield) { 
      return 'services.aweber.' + subfield;
    }
  );

  Accounts.addAutopublishFields({
    forLoggedInUser: forLoggedInUserAutopublishedFields,
    forOtherUsers: forOtherUsersAutopublishedFields
  });
}



