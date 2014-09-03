Package.describe({
  summary: "Login service for Aweber accounts",
  version: "0.1.0"
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.use('oauth1', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('random', 'client');
  api.use('underscore', 'server');
  api.use('service-configuration', ['client', 'server']);

  api.export('Aweber');

  api.add_files(
    ['aweber_configure.html', 'aweber_configure.js'],
    'client');

  api.add_files('aweber_server.js', 'server');
  api.add_files('aweber_client.js', 'client');


  api.use('underscore', ['server']);

  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.use('http', ['client', 'server']);
  api.use('templating', 'client');

  api.add_files('aweber_login_button.css', 'client');
  api.add_files("accounts-aweber.js");

});
