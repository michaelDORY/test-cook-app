import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle} from 'style';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router>
        <App/>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
