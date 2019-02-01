const $window = $(window);

const changeSignetHeight = () => {
  const $header = $('#main-header');
  const collapsedClass = 'main-header--collapsed';

  if ($window.scrollTop() > 90 && $header.hasClass(collapsedClass) === false) {
    $header.addClass(collapsedClass);
  } else if ($window.scrollTop() <= 90 && $header.hasClass(collapsedClass) === true) {
    $header.removeClass(collapsedClass);
  }
};

export const init = () => {
  $window.on('scroll', changeSignetHeight);
};
