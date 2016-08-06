'use strict';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

function reportError(err) {
  console.error(err);
}

function getPrivateDataPath(file) {
  const nativePath = WebAppLocalServer.localFileSystemUrl(file);
  // strip trailing slash
  var href = window.location.href.substring(0, window.location.href.length - 1);
  console.log('cordova.file.dataDirectory: ' + cordova.file.dataDirectory);
  // ex: http://localhost:12640/local-filesystem/data/user/0/com.adammonsen.app/files/file
  return href + WebAppLocalServer.localFileSystemUrl(cordova.file.dataDirectory) + file;
}

function getExternalDataPath(file) {
  // strip trailing slash
  var href = window.location.href.substring(0, window.location.href.length - 1);
  return href + WebAppLocalServer.localFileSystemUrl(cordova.file.externalDataDirectory) + file;
}

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);

    // aaaaaand do some other stuff
    const path = 'a';
    console.log('path: ' + path);
    const nativePath = getPrivateDataPath(path);
    console.log('nativePath: ' + nativePath);
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, (fs) => {
      fs.root.getFile(nativePath, {create: false}, (fileEntry) => {
        console.log('fileEntry: ', fileEntry);
      }, reportError);
    }, reportError);
  },
});
