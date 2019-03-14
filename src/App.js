import React from 'react';
import { ThemeProvider } from 'styled-components';

import LoginForm from './components/forms/login.form';
import mainTheme from './themes/default';

export default class extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={mainTheme}>
          <LoginForm />
        </ThemeProvider>
      </div>
    );
  }
}
