"use strict";

$(function() {

    //settings for slider
    let width = 720;
    const animationSpeed = 1000;
    const pause = 3000;
    let currentSlide = 1;

    //cache DOM elements
    const $slider = $('#slider');
    const $slideContainer = $('.slides', $slider);
    const $slides = $('.slide', $slider);

    let interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                // if on the last slide go to the first slide
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});
