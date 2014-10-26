var cordova = require('cordova'),
    exec = require('cordova/exec');

var gpsDetect = function() {};

gpsDetect.prototype.checkGPS = function(successCallback, failureCallback) {
    cordova.exec(successCallback, failureCallback, 'GpsDetectionPlugin', 'gpsDetection', []);
};    
