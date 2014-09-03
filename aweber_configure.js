Template.configureLoginServiceDialogForAweber.siteUrl = function () {
  // Trello doesn't recognize localhost as a domain name
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForAweber.fields = function () {
  return [
    {property: 'consumerKey', label: 'Consumer key'},
    {property: 'secret', label: 'Consumer secret'}
  ];
};
