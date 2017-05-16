// require('../css/style.scss');
// import style from '../css/main.scss';


$(document).ready(() => {

  //select default 'radio button'
  $('#female.radio, #female.radio *, #male.radio, #male.radio *').addClass('default');
  $('#male.radio, #male.radio *').addClass('selected').find('.radio_active').css({'visibility': 'visible'});
  //
  //
  //
  //select radio, deactivate another
  $('.radio').click(function(){
    $('.radio, .radio *').removeClass('selected');
    $('.radio, .radio *').find('.radio_active').css({'visibility': 'hidden'});

    $(this).addClass('selected');
    $(this).find('div').addClass('selected');
    $(this).find('.radio_active').css({'visibility': 'visible'});
    var val = $(this).attr('data-value');
  });

  $('.submit').click(() => {
    // $(form).submit();
    $('#test').click();
    // console.log('submitted');
  });
});
