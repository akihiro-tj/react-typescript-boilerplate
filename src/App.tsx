import React from 'react';

import { Container, Header, Link, Logo } from './appStyle';
import { Counter } from './components/Counter/Counter';
import logo from './img/logo.svg';

function App() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <Link
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </Link>
          <span>, </span>
          <Link
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </Link>
          <span>, </span>
          <Link
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </Link>
          ,<span> and </span>
          <Link
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </Link>
        </span>
      </Header>
    </Container>
  );
}

export default App;
