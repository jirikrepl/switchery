// package metadata file for Meteor.js

Package.describe({
  name: 'jirikrepl:switchery',
  summary: 'Switchery (official) - turns your default HTML checkbox inputs into beautiful iOS 7 style switches.',
  version: '0.2.0',
  git: 'https://github.com/abpetkov/switchery',
});

Package.onUse(function (api) {
  api.versionsFrom('1.11.1');
  api.use('ecmascript');
  api.mainModule('meteor/index.js', 'client', { lazy: true });
});

Package.onTest(function (api) {
  api.use('jirikrepl:switchery', 'client');
  api.use('tinytest', 'client');
  api.addFiles('meteor/tests.js', 'client'); // testing specific files
});
