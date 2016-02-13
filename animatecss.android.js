/*/**************************************************************************************
 * Made for the {N} community by Brad Martin @BradWayneMartin                 
 * https://twitter.com/BradWayneMartin
 * https://github.com/bradmartin
 * Open Source Lib : https://github.com/daimajia/AndroidViewAnimations
 * Pull requests are welcome. Enjoy!
 *************************************************************************************/

var AnimateCss = require("./animatecss-common");

var library = com.daimajia.androidanimations.library;
var Techniques = com.daimajia.androidanimations.library.Techniques;

// Animate
// @params  { view, cssClass, duration }
AnimateCss.animate = function(options) {
    if (!options) {
        return;
    }

    return new Promise(function (resolve, reject) {
        try {
            var animateTechnique = getClassTechnique(options.cssClass);
            if (animateTechnique) {
                library.YoYo.with(animateTechnique).duration(options.duration).playOn(options.view);
                resolve();
            } else {
                reject("Error in AnimateCss.animate(): Check the cssClass property passed in the options. ");
            }
        } catch (ex) {
            reject("Error in AnimateCss.animate(): " + ex);
        }
    });

}


function getClassTechnique(value) {
    if (value === 'Flash') {
        return Techniques.Flash;
    }
    else if (value === 'Pulse') {
        return Techniques.Pulse;
    }
    else if (value === 'RubberBand') {
        return Techniques.RubberBand;
    }
    else if (value === 'Shake') {
        return Techniques.Shake;
    }
    else if (value === 'Swing') {
        return Techniques.Swing;
    }
    else if (value === 'Wobble') {
        return Techniques.Wobble;
    }
    else if (value === 'Bounce') {
        return Techniques.Bounce;
    }
    else if (value === 'Tada') {
        return Techniques.Tada;
    }
    else if (value === 'StandUp') {
        return Techniques.StandUp;
    }
    else if (value === 'Wave') {
        return Techniques.Wave;
    }
    else if (value === 'Hinge') {
        return Techniques.Hinge;
    }
    else if (value === 'RollIn') {
        return Techniques.RollIn;
    }
    else if (value === 'RollOut') {
        return Techniques.RollOut;
    }
    else if (value === 'Landing') {
        return Techniques.Landing;
    }
    else if (value === 'TakingOff') {
        return Techniques.TakingOff;
    }
    else if (value === 'DropOut') {
        return Techniques.DropOut;
    }
    else if (value === 'BounceIn') {
        return Techniques.BounceIn;
    }
    else if (value === 'BounceInDown') {
        return Techniques.BounceInDown;
    }
    else if (value === 'BounceInLeft') {
        return Techniques.BounceInLeft;
    }
    else if (value === 'BounceInRight') {
        return Techniques.BounceInRight;
    }
    else if (value === 'BounceInUp') {
        return Techniques.BounceInUp;
    }
    else if (value === 'FadeIn') {
        return Techniques.FadeIn;
    }
    else if (value === 'FadeInUp') {
        return Techniques.FadeInUp;
    }
    else if (value === 'FadeInDown') {
        return Techniques.FadeInDown;
    }
    else if (value === 'FadeInLeft') {
        return Techniques.FadeInLeft;
    }
    else if (value === 'FadeInRight') {
        return Techniques.FadeInRight;
    }
    else if (value === 'FadeOut') {
        return Techniques.FadeOut;
    }
    else if (value === 'FadeOutDown') {
        return Techniques.FadeOutDown;
    }
    else if (value === 'FadeOutLeft') {
        return Techniques.FadeOutLeft;
    }
    else if (value === 'FadeOutRight') {
        return Techniques.FadeOutRight;
    }
    else if (value === 'FadeOutUp') {
        return Techniques.FadeOutUp;
    }
    else if (value === 'FlipInX') {
        return Techniques.FlipInX;
    }
    else if (value === 'FlipOutX') {
        return Techniques.FlipOutX;
    }
    else if (value === 'FlipOutY') {
        return Techniques.FlipOutY;
    }
    else if (value === 'RotateIn') {
        return Techniques.RotateIn;
    }
    else if (value === 'RotateInDownLeft') {
        return Techniques.RotateInDownLeft;
    }
    else if (value === 'RotateInDownRight') {
        return Techniques.RotateInDownRight;
    }
    else if (value === 'RotateInUpLeft') {
        return Techniques.RotateInUpLeft;
    }
    else if (value === 'RotateInUpRight') {
        return Techniques.RotateInUpRight;
    }
    else if (value === 'RotateOut') {
        return Techniques.RotateOut;
    }
    else if (value === 'RotateOutDownLeft') {
        return Techniques.RotateOutDownLeft;
    }
    else if (value === 'RotateOutDownRight') {
        return Techniques.RotateOutDownRight;
    }
    else if (value === 'RotateOutUpLeft') {
        return Techniques.RotateOutUpLeft;
    }
    else if (value === 'RotateOutUpRight') {
        return Techniques.RotateOutUpRight;
    }
    else if (value === 'SlideInLeft') {
        return Techniques.SlideInLeft;
    }
    else if (value === 'SlideInRight') {
        return Techniques.SlideInRight;
    }
    else if (value === 'SlideInUp') {
        return Techniques.SlideInUp;
    }
    else if (value === 'SlideInDown') {
        return Techniques.SlideInDown;
    }
    else if (value === 'SlideOutLeft') {
        return Techniques.SlideOutLeft;
    }
    else if (value === 'SlideOutRight') {
        return Techniques.SlideOutRight;
    }
    else if (value === 'SlideOutUp') {
        return Techniques.SlideOutUp;
    }
    else if (value === 'SlideOutDown') {
        return Techniques.SlideOutDown;
    }
    else if (value === 'ZoomIn') {
        return Techniques.ZoomIn;
    }
    else if (value === 'ZoomInDown') {
        return Techniques.ZoomInDown;
    }
    else if (value === 'ZoomInLeft') {
        return Techniques.ZoomInLeft;
    }
    else if (value === 'ZoomInRight') {
        return Techniques.ZoomInRight;
    }
    else if (value === 'ZoomInUp') {
        return Techniques.ZoomInUp;
    }
    else if (value === 'ZoomOut') {
        return Techniques.ZoomOut;
    }
    else if (value === 'ZoomOutDown') {
        return Techniques.ZoomOutDown;
    }
    else if (value === 'ZoomOutLeft') {
        return Techniques.ZoomOutLeft;
    }
    else if (value === 'ZoomOutRight') {
        return Techniques.ZoomOutRight;
    }
    else if (value === 'ZoomOutUp') {
        return Techniques.ZoomOutUp;
    }
}

module.exports = AnimateCss;