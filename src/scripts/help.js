import 'jquery-smooth-scroll';

const setUpSmoothScroll = () => {
  const $buttons = $('#help-links').find('.help__link');
  $buttons.on('click', function() {
    const href = $(this).attr('href');

    const $header = $('#main-header');
    const currentHeaderHeight = $header.height();

    let offset = currentHeaderHeight * -1;
    if ($(window).width() >= 768) {
      offset = -70;
    }

    $.smoothScroll({
      scrollTarget: href,
      offset,
      speed: 800,
    });

    return false;
  });
};

export const init = () => {
  setUpSmoothScroll();
};
