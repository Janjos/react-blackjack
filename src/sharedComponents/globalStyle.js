import { createGlobalStyle } from 'styled-components'

const cursorImage = require('../assets/images/interface/white-cursor.png')
const pixelatedFont = require('../assets/fonts/Pixeled.woff')
const pixelatedFont2 = require('../assets/fonts/Pixeled.woff2')
const fippsFont = require('../assets/fonts/Fipps-Regular.woff2')
const fippsFont2 = require('../assets/fonts/Fipps-Regular.woff')

export const GlobalStyle = createGlobalStyle`
  * {
    cursor: url(${cursorImage}), default;
    font-family: 'Pixeled'
  }

  body {
    margin: 0;
    padding: 0;
    filter: blur(.25px)
  }

  img {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }

  div {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Pixeled';
    src: url(${pixelatedFont2}) format('woff2'),
        url(${pixelatedFont}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Fipps';
    src: url(${fippsFont2}) format('woff2'),
        url(${fippsFont}) format('woff');
    font-weight: normal;
    font-style: normal;
}
`
