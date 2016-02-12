var observable = require("data/observable").Observable;
var app = require("application");
var platformModule = require("platform");
var color = require("color");
var frame = require("ui/frame");
var animatecss = require("nativescript-animatecss");

var data = new observable({});

function pageLoaded(args) {
    var page = args.object; 
    page.bindingContext = data;
    // Change statusbar color on Lollipop
    if (platformModule.device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow(); 
        window.setStatusBarColor(new color.Color("#0288D1").android);
    }
}
exports.pageLoaded = pageLoaded;

function animateIt(args) {
    var x = args.object.android;
    animatecss.animate({ view: x, cssClass: 'Hinge', duration: 600 }).then(function (result) {
        console.log(result);
    }, function (err) {
        console.log(err);
    });
}
exports.animateIt = animateIt;


function flashIt(args) {
    var x = args.object.android;
    animatecss.animate({ view: x, cssClass: 'Flash', duration: 1000 }).then(function (result) {
        console.log(result);
    }, function (err) {
        console.log(err);
    });
}
exports.flashIt = flashIt;

function rotateIn(args) {
    var x = args.object.android;
    animatecss.animate({ view: x, cssClass: 'RotateIn', duration: 700 }).then(function (result) {
        console.log(result);
    }, function (err) {
        console.log(err);
    });
}
exports.rotateIn = rotateIn;


function rubberBand(args) {
    var x = args.object.android;
    animatecss.animate({ view: x, cssClass: 'RubberBand', duration: 600 }).then(function (result) {
        console.log(result);
    }, function (err) {
        console.log(err);
    });
}
exports.rubberBand = rubberBand;
