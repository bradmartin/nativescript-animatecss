var observable = require("data/observable").Observable;
var app = require("application");
var platformModule = require("platform");
var color = require("color");
var frame = require("ui/frame");
var hearts = require("nativescript-periscopehearts");

var data = new observable({});

var colorArray = [
    { hex: "#3489db" },
    { hex: '#FF4081' },
    { hex: '#229911' },
    { hex: '#fff000' }
];

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

function newHeart(args) {
        var heartLayout = frame.topmost().currentPage.getViewById("heartLayout");

        // Just getting a random hex string from the colorArray values
        var rand = colorArray[Math.floor(Math.random() * colorArray.length)];

        // Call addHeart() on the PeriscopeHearts UI element to pop in a new heart
        heartLayout.addHeart(rand.hex);   
}
exports.newHeart = newHeart;