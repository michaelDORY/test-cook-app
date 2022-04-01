import {createGlobalStyle} from "styled-components";
import LatoBold from 'assets/fonts/Lato-Bold.woff';
import LatoRegular from 'assets/fonts/Lato-Regular.woff';
import GaeguBold from 'assets/fonts/Gaegu-Bold.woff'

export const theme = {
  color: {
    primary: '#9934A9'
  },
  box: {
    borderRadius: '15px',
    boxShadow: 'drop-shadow(0px 4px 6px rgba(89, 89, 89, 0.25))',
    gradient: 'linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%)'
  }
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${LatoBold});
    font-weight: bold;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegular});
    font-weight: normal;
  }

  @font-face {
    font-family: 'Gaegu';
    src: url(${GaeguBold});
    font-weight: bold;
  }

  * {
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }

  :root {
    font-family: Lato, sans-serif;
    font-size: 16px;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }

  a,
  a:hover,
  a:focus,
  a:active {
    color: #000
  }

  .ReactModal__Body--open,
  .ReactModal__Html--open {
    overflow: hidden;
  }
`