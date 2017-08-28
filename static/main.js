'use strict';

function setTime() {
    // get curent time and set on page
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let a_p = 'AM';
    if (hour >= 12) {
        a_p = 'pm';
    }
    if (minute <= 9) {
        minute = '0' + minute;
    }
    hour = ((hour + 11) % 12 + 1);
    $('.time-of-day').text(`${hour}:${minute} ${a_p}`);
}



function makeWhite(button) {
    // change page to white version
    $('.header-nav a').css({
        'color': 'black'
    });
    $('body').css({
        'background-color': 'white',
        'color': 'black'
    });
    $('.links a').css({
        'color': 'grey'
    });
    $('.links a').hover(function() {
        $(this).css({
            'color': 'black'
        });
    }, function() {
        $(this).css({
            'color': 'grey'
        });
    });
    $(button).css({
        'background': 'white',
        'color': 'black',
        'border': '2px solid black',
    });
    $(button).attr('data-invert', 'white');
    $(button).text('black?');
}

function makeBlack(button) {
    // make page black
    $('.header-nav a').css({
        'color': 'white'
    });
    $('body').css({
        'background-color': 'black',
        'color': 'white'
    });
    $('.links a').css({
        'color': 'grey'
    });
    $('.links a').hover(function() {
        $(this).css({
            'color': 'white'
        });
    }, function() {
        $(this).css({
            'color': 'grey'
        });
    });
    $(button).css({
        'background': 'black',
        'color': 'white',
        'border': '2px solid white',
    });
    $(button).attr('data-invert', 'black');
    $(button).text('white?');
}

function setLinkActions() {
    // invert color for fun
    $('.invert-color').on('click', function() {
        if ($(this).attr('data-invert') === 'black') {
            makeWhite(this);
        } else {
            makeBlack(this);
        }

    });
}

$(document).ready(function() {
    // start func
    setTime();
    setInterval(setTime, 30000);
    setLinkActions();
    $('h2').on('click', function() {
        $('.drop').slideToggle('slow');
    });
});
