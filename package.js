// package metadata file for Meteor.js

const packageName = 'jirikrepl:switchery'; // https://atmospherejs.com/mediatainment/switchery
const where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.

Package.describe({
  name: packageName,
  summary: 'Switchery (official) - turns your default HTML checkbox inputs into beautiful iOS 7 style switches.',
  version: '0.2.0', // packageJson.version,
  git: 'https://github.com/abpetkov/switchery',
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.export('Switchery');
  api.addFiles(['dist/switchery.js', 'dist/switchery.css', 'meteor/export.js'], where);
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);
  api.addFiles('meteor/tests.js', where); // testing specific files
});
