// require('../css/style.scss');
// import style from '../css/main.scss';

let variable = 'Hello World!';

console.log(variable);

$(document).ready(() => {
  // $('.content').hide();
    // $('.content').show("slide", {direction: "left"}, 1000);

    $('.radio').click(function(){
      $('.radio, .radio *').removeClass('selected');
      $('.radio, .radio *').find('.radio_active').css({'visibility': 'hidden'});

      // $(this).addClass('active');
      $(this).addClass('selected');
      $(this).find('div').addClass('selected');
      $(this).find('.radio_active').css({'visibility': 'visible'});
      var val = $(this).attr('data-value');
      // alert(val);
      // $(this).parent().find('input').val(val);
    });
});
