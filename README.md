# Meteor Accounts Aweber

Meteor Accounts Aweber provides account support for [aweber](http://www.aweber.com/) logins with [Meteor](http://www.meteor.com/) applications.

## Installation

Meteor Accounts Aweber can be installed with [Meteorite](https://github.com/oortcloud/meteorite/). From inside a Meteorite-managed app:

``` sh
$ mrt add accounts-aweber
```

## API

### Setup

1. Configure the service like normal from the web-ui. Done!

### Additional configuration

You may want to set the name, scope or expiration of you're tokens, here's an example:

```
Accounts.loginServiceConfiguration.remove({
  service: "aweber"
});

Accounts.loginServiceConfiguration.insert({
  service       : "aweber",
  consumerKey   : "foo",
  secret        : "bar"
  name          : "FooBar App"
  scope         : "read"
  expiration    : "never"
});
```

## Credits

This project is based on [meteor-accounts-trello](https://github.com/robertlowe/meteor-accounts-trello).
