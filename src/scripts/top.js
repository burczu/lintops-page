import 'jquery-smooth-scroll';

const $window = $(window);

const adjustHeight = () => {
  const $topSection = $('#top-section');
  const $loadingPanel = $('#loading-panel');
  const currentHeight = $(window).height();

  $topSection.height(currentHeight);

  setTimeout(() => {
    $loadingPanel.removeClass('loading-panel--visible');
  }, 700);
};

const setUpSmoothScroll = () => {
  const $button = $('#learn-more-button');
  $button.on('click', () => {
    const $topSection = $('#top-section');

    let offset = $topSection.height() - 70;
    offset -= $(window).scrollTop();

    $.smoothScroll({
      scrollTarget: '#about-us',
      offset,
      speed: 800,
    });

    return false;
  });
};

export const init = () => {
  adjustHeight();
  $window.on('resize', adjustHeight);

  setUpSmoothScroll();
};
