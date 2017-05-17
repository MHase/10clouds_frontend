$(document).ready(() => {

    // hide elements for animation
    $('.left, .right, .tabs, .button, .modal').hide();

    // animation if not mobile
    if ($(window).width() > 450) {
        $('.left').show('slide', {
            direction: 'right'
        }, 500, function() {
            if (ie()) // if IE -> avoid svg css animation
                $('.line').removeClass('line');
            $('.line').addClass('move_line');

            $('.right').show('slide', {
                direction: 'left'
            }, 500, () => {
                $('.tabs').fadeIn('slow');
            });
            $('.button').fadeIn('slow');
        });
    } else {
        $('.right, .button').show();
        $('.right').addClass('center');
    }

    // array for month selection
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (var i = 0; i < months.length; i++)
        $('#month').append($("<option></option>").attr("value", months[i]).text(months[i]));

    // select default tab
    $('.tab[data-value="2"]').addClass('tab_active');

    // toggle tabs
    $('.tab').click(function() {
        $('.tab').removeClass('tab_active');
        $(this).addClass('tab_active');
    });

    //select default 'radio button'
    $('.gender').find('div').addClass('default');
    $('#male.radio, #male.radio *').addClass('selected').find('.radio_active').css({
        'visibility': 'visible'
    });
    var gender = 'male';

    //select radio, deactivate another
    $('.radio').click(function() {
        $('.radio, .radio *').removeClass('selected');
        $('.radio, .radio *').find('.radio_active').css({
            'visibility': 'hidden'
        });

        $(this).addClass('selected');
        $(this).find('div').addClass('selected');
        $(this).find('.radio_active').css({
            'visibility': 'visible'
        });
        gender = $(this).attr('data-value');
    });

    // console.log($('.directional select').val());
    // console.log($('.mobile input').val());
    // console.log(gender);
    // console.log($('#day').val() + ' - ' + $('#month').val() + ' - ' + $('#year').val());

    // prevent form from submitting and open modal after html5 validation
    $('form').submit((e) => {
        e.preventDefault();
        var modal_message = 'Thank you <b>' + $('.name input').val() + '</b></br>(born <b>' + $('#day').val() + ' - ' + $('#month').val() + ' - ' + $('#year').val() + ')</b></br> for completing the form</br>I will call your phone <b>+' + $('.directional select').val() + $('.mobile input').val() + '</b></br>Everything is OK :)';
        $('#modal_message').html(modal_message);
        $('.modal, .body_inactive').show();
    });

    //close modal after button click
    $('.modal .button').click(() => {
        $('.modal, .body_inactive').hide();
        $('#modal_message').html();
    });

    // submit form with purple div
    $('#submit_div').click(() => {
        $('#submit_btn').click();
    });

});



// function for checking if our browser is IE
function ie() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
        return true;
    else
        return false;
}
