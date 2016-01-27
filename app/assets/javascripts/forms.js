document.addEventListener('DOMContentLoaded', function () {
  $('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(200);

  });

  $('#guest-login').on('click', function (e) {
    $.ajax({
      method: 'POST',
      url: '/api/session/',
      data: {
        user: {
          email: 'guest@email.com',
          password: 'password'
        }
      },
      success: function () {window.location = '/#/';}
    });
  });
});
