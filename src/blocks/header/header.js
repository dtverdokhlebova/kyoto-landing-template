export default function header() {
  window.openBurgerMenu = () => {
    $('.header').removeClass('header--menu')
    $('.header').addClass('header--burger')
    $('html').addClass('no-scroll')
  }

  window.closeBurgerMenu = () => {
    $('.header').removeClass('header--burger')
    $('html').removeClass('no-scroll')
  }

  headerHeight()
  $(window).on('load', headerHeight)
  $(window).on('resize', headerHeight)
}

function headerHeight() {
  const headerHeight = $('.header').outerHeight()
  $('html').css('--header-height', `${headerHeight}px`)
}
