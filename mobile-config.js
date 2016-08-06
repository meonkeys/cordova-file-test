'use strict';

App.info({
  id: 'com.adammonsen.cordova-file-test',
  name: 'AdamApp',
  description: 'Test cordorva native file operations',
  author: 'Adam Monsen',
  email: 'haircut@gmail.com',
  website: 'http://adammonsen.com'
});

App.setPreference('AndroidExtraFilesystems', 'files,files-external');
