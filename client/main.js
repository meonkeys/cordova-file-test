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

function readFile(file) {
  var reader = new FileReader();
  reader.onloadend = function() {
    console.log('read file! contents: ' + this.result);
  };
  reader.readAsText(file);
}

function processFileEntry(fileEntry) {
  fileEntry.file(file => {
    readFile(file);
  }, reportError);
}

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);

    if (Meteor.isCordova) {
      // aaaaaand do some other stuff
      const path = cordova.file.externalDataDirectory + 'a';
      window.resolveLocalFileSystemURL(path, fileEntry => {
        console.log('fileEntry: ', fileEntry);
        processFileEntry(fileEntry);
      }, reportError);
    }
  },
});
