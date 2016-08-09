# cordova-file-test

Demo [Meteor](https://www.meteor.com) mobile app for [this stackoverflow question](https://stackoverflow.com/questions/38800845/fileerror-code-5-trying-to-use-absolute-file-paths-with-meteor-1-4-cordova).

The `master` branch contains original code referred to in the stackoverflow question. The `solution` branch contains working code.

## Test

1. Clone this repository, checkout `solution` branch.
1. [Install prerequisites](https://guide.meteor.com/mobile.html#installing-prerequisites-android).
1. Enable USB debugging on the device.
1. Start app with `meteor run android-device`.
1. Copy a file to the device's external storage.
    1. Create a text file `a` with some contents.
    1. Use something like `adb push a /sdcard/Android/data/com.adammonsen.app/files/a`.
1. Open <chrome://inspect> in a browser.
1. Touch the button in the app and look for debug output in the console.

## Copyright, License

Copyright (C) 2016 Adam Monsen

MIT license.
