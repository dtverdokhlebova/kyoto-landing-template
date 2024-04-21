export default function accordion() {
  $('.accordions__head').on('click', function () {
    $(this).toggleClass('accordions__head--active')
    $(this).parents('.accordions__item').find('.accordions__body').slideToggle()
  })
}
