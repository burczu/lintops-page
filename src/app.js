import 'waypoints/lib/noframework.waypoints';
import * as headerScripts from './scripts/header';
import * as topScripts from  './scripts/top';
import * as helpScripts from './scripts/help';

import './styles/main.scss';

headerScripts.init();
topScripts.init();
helpScripts.init();

const initScrollVisibility = () => {
  const $topSection = $('#top-section');
  const $elements = $('.visible');

  if ($elements && $elements.length > 0) {
    $elements.each(function () {
      const $element = $(this);

      const pageScrollPosition = $(window).scrollTop() + $topSection.height();
      const elementScrollPosition = $element.offset().top;

      if (pageScrollPosition >= elementScrollPosition) {
        $element.removeClass('visible--not');
      } else if ($element && $element.length > 0) {
        new Waypoint({
          element: $element[0],
          handler: () => {
            $element.removeClass('visible--not');
          },
          offset: '80%',
          continuous: true,
        });
      }
    });
  }
};


const initAboutUsSticky = () => {
  const $previousElement = $('#top-section');
  const $element = $('#content-sticky');

  if ($element && $element.length > 0) {
    new Waypoint({
      element: $previousElement[0],
      handler: direction => {
        if (direction === 'down') {
          $element.addClass('about-us--relative');
          initScrollVisibility();
        } else {
          $element.removeClass('about-us--relative');
        }
      },
      offset: '-100%',
    });
  }
};

const setContainerHeight = () => {
  const $parent = $('#content');
  const $previousElement = $('#top-section');
  const $element = $('#content-sticky');

  let contentHeight = $previousElement.height();
  $element.children().each(function () {
    contentHeight += $(this).height();
  });

  $parent.height(contentHeight);
};

const init = () => {
  initAboutUsSticky();
  setContainerHeight();

  $(window).on('resize', setContainerHeight);
};

init();
