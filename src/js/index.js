/* eslint-disable unicorn/prefer-dom-node-dataset */
import '../styles/style.scss'
import accordion from '../blocks/accordion/accordion'
import banner from '../blocks/banner/banner'
import header from '../blocks/header/header'

document.addEventListener('DOMContentLoaded', function () {
  accordion()
  banner()
  header()
})
