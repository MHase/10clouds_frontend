$(document).ready(() => {


$('.left, .right, .tabs, .button, .modal').hide();

//animation if not mobile
if($(window).width() > 450) {
  $('.left').show('slide', {direction: 'right'}, 500, function() {
    if(msieversion() == 'ie')
      $('.left').find('line').removeClass('line');
    $('.line').addClass('move_line');

    $('.right').show('slide', {direction: 'left'}, 500, () => {
      $('.tabs').fadeIn('slow');
    });
    $('.button').fadeIn('slow');
    // $('.button').show('slide', {direction: 'left'}, 500);
  });
} else {
  $('.right, .button').show();
  $('.right').addClass('center');
}

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for(var i=0; i<months.length; i++)
      $('#month').append($("<option></option>").attr("value",months[i]).text(months[i]));

    //select default 'radio button'
    $('.gender').find('div').addClass('default');
    $('#male.radio, #male.radio *').addClass('selected').find('.radio_active').css({
        'visibility': 'visible'
    });

    //default selected tab
    $('.tab[data-value="2"]').addClass('tab_active');

    //toggle tabs
    $('.tab').click(function() {
        $('.tab').removeClass('tab_active');
        $(this).addClass('tab_active');

        // var val = $(this).attr('data-value');
    });

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
        var val = $(this).attr('data-value');
    });

    // prevent form from submitting
    $('form').submit((e) => {
        e.preventDefault();
        $('.modal, .body_inactive').show();
    });
    // submit form with purple div
    $('#submit_div').click(() => {
        $('#submit_btn').click();
    });

    //close modal
    $('.modal .button').click(() => {
      $('.modal, .body_inactive').hide();
    });

});






function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        return 'ie'
    }

    return false;
}
