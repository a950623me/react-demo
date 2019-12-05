import React from 'react';
// import logo from './logo.svg';
import './App.css';
import JsxTest from './components/JsxTest';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl'
import ConText from './components/ConText'
import HocTest from './components/HocTest'
import Dialog from './components/Dialog'
import RadioGroup from './components/RadioGroup'
import HooksTest from './components/HooksTest'
import Button from 'antd/lib/button';
function App() {
  return (
    <div className="App">
      {/* <JsxTest name="Sara"></JsxTest>
      <Toggle></Toggle>
      <LoginControl></LoginControl>
      <ConText></ConText>
      <HocTest></HocTest>
      <Dialog></Dialog>
      <RadioGroup></RadioGroup> */}
      <Button type="primary">Button</Button>
      <HooksTest></HooksTest>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
